import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, SlidersHorizontal, ArrowUpDown, X } from 'lucide-react';
import { players, teams } from '../data';
import PlayerCard from '../components/PlayerCard';
import { getPositionLabel } from '../utils';

type SortKey = 'name' | 'goals' | 'mep';

export default function Players() {
  const [query, setQuery] = useState('');
  const [teamFilter, setTeamFilter] = useState<number | 'all'>('all');
  const [positionFilter, setPositionFilter] = useState<string | 'all'>('all');
  const [sortKey, setSortKey] = useState<SortKey>('name');
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('asc');

  const positions = useMemo(() => {
    const set = new Set(players.map(p => p.position));
    return Array.from(set).sort();
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    let result = players.filter(p => {
      const matchesQuery = !q || p.name.toLowerCase().includes(q);
      const matchesTeam = teamFilter === 'all' || p.teamId === teamFilter;
      const matchesPosition = positionFilter === 'all' || p.position === positionFilter;
      return matchesQuery && matchesTeam && matchesPosition;
    });

    result.sort((a, b) => {
      let cmp = 0;
      if (sortKey === 'name') cmp = a.name.localeCompare(b.name);
      else if (sortKey === 'goals') cmp = a.stats.goals - b.stats.goals;
      else if (sortKey === 'mep') cmp = a.stats.mepScore - b.stats.mepScore;
      return sortDir === 'asc' ? cmp : -cmp;
    });

    return result;
  }, [query, teamFilter, positionFilter, sortKey, sortDir]);

  const toggleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortDir(prev => prev === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortDir('desc');
    }
  };

  const hasFilters = query || teamFilter !== 'all' || positionFilter !== 'all';

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-extrabold text-text mb-1">Spillere</h1>
        <p className="text-text-muted text-sm">{players.length} spillere i databasen</p>
      </div>

      {/* Search */}
      <div className="glass-card rounded-2xl p-4 space-y-4">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
          <input
            type="text"
            placeholder="Søk etter navn..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            className="w-full pl-11 pr-10 py-3 rounded-xl bg-[#0f1329]/60 border border-white/10 text-text placeholder:text-text-muted focus:outline-none focus:border-[#00d4ff]/50 text-sm transition-colors"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-text"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <select
            value={teamFilter}
            onChange={e => setTeamFilter(e.target.value === 'all' ? 'all' : Number(e.target.value))}
            className="px-4 py-2.5 rounded-xl bg-[#0f1329]/60 border border-white/10 text-text text-sm focus:outline-none focus:border-[#00d4ff]/50"
          >
            <option value="all">Alle lag</option>
            {teams.map(t => (
              <option key={t.id} value={t.id}>{t.name}</option>
            ))}
          </select>

          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={() => setPositionFilter('all')}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-colors ${
                positionFilter === 'all'
                  ? 'bg-[#00d4ff]/20 text-[#00d4ff] border-[#00d4ff]/30'
                  : 'bg-white/5 text-text-muted border-white/10 hover:bg-white/10'
              }`}
            >
              Alle
            </button>
            {positions.map(pos => (
              <button
                key={pos}
                onClick={() => setPositionFilter(prev => prev === pos ? 'all' : pos)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-colors ${
                  positionFilter === pos
                    ? 'bg-[#00d4ff]/20 text-[#00d4ff] border-[#00d4ff]/30'
                    : 'bg-white/5 text-text-muted border-white/10 hover:bg-white/10'
                }`}
              >
                {getPositionLabel(pos)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Sort + results count */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm text-text-muted">
          <SlidersHorizontal className="w-4 h-4" />
          <span>{filtered.length} spillere vises</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-xs text-text-muted hidden sm:inline">Sorter:</span>
          <SortButton active={sortKey === 'name'} onClick={() => toggleSort('name')} label="Navn" />
          <SortButton active={sortKey === 'goals'} onClick={() => toggleSort('goals')} label="Mål" />
          <SortButton active={sortKey === 'mep'} onClick={() => toggleSort('mep')} label="MEP" />
          <button
            onClick={() => setSortDir(prev => prev === 'asc' ? 'desc' : 'asc')}
            className="p-1.5 rounded-lg hover:bg-white/5 text-text-muted"
          >
            <ArrowUpDown className={`w-3.5 h-3.5 transition-transform ${sortDir === 'desc' ? 'rotate-180' : ''}`} />
          </button>
        </div>
      </div>

      {/* Grid */}
      <AnimatePresence mode="popLayout">
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {filtered.map((player, i) => (
            <PlayerCard key={player.id} player={player} index={i} />
          ))}
        </motion.div>
      </AnimatePresence>

      {filtered.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-16 text-text-muted"
        >
          <Search className="w-10 h-10 mx-auto mb-3 opacity-50" />
          <p className="text-lg font-medium text-text">Ingen spillere funnet</p>
          <p className="text-sm mt-1">Prøv å endre søkeord eller filtre</p>
          {hasFilters && (
            <button
              onClick={() => { setQuery(''); setTeamFilter('all'); setPositionFilter('all'); }}
              className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#00d4ff] text-[#0f1329] font-semibold text-sm"
            >
              <X className="w-3.5 h-3.5" />
              Nullstill filtre
            </button>
          )}
        </motion.div>
      )}
    </div>
  );
}

function SortButton({ active, onClick, label }: { active: boolean; onClick: () => void; label: string }) {
  return (
    <button
      onClick={onClick}
      className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-colors ${
        active ? 'bg-[#00d4ff]/20 text-[#00d4ff]' : 'text-text-muted hover:bg-white/5'
      }`}
    >
      {label}
    </button>
  );
}
