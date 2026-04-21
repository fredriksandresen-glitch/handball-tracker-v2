import { useState, useMemo } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import { players, teams } from '../data';
import PlayerCard from '../components/PlayerCard';

export default function Players() {
  const [query, setQuery] = useState('');
  const [teamFilter, setTeamFilter] = useState<number | 'all'>('all');
  const [positionFilter, setPositionFilter] = useState<string | 'all'>('all');

  const positions = useMemo(() => {
    const set = new Set(players.map(p => p.position));
    return Array.from(set).sort();
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return players.filter(p => {
      const matchesQuery = !q || p.name.toLowerCase().includes(q);
      const matchesTeam = teamFilter === 'all' || p.teamId === teamFilter;
      const matchesPosition = positionFilter === 'all' || p.position === positionFilter;
      return matchesQuery && matchesTeam && matchesPosition;
    });
  }, [query, teamFilter, positionFilter]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-text mb-1">Spillere</h1>
        <p className="text-text-muted text-sm">{players.length} spillere i databasen</p>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
          <input
            type="text"
            placeholder="Søk etter navn..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 rounded-lg bg-surface-light border border-white/10 text-text placeholder:text-text-muted focus:outline-none focus:border-[#00d4ff]/50 text-sm"
          />
        </div>
        <div className="flex gap-3">
          <select
            value={teamFilter}
            onChange={e => setTeamFilter(e.target.value === 'all' ? 'all' : Number(e.target.value))}
            className="px-3 py-2.5 rounded-lg bg-surface-light border border-white/10 text-text text-sm focus:outline-none focus:border-[#00d4ff]/50"
          >
            <option value="all">Alle lag</option>
            {teams.map(t => (
              <option key={t.id} value={t.id}>{t.name}</option>
            ))}
          </select>
          <select
            value={positionFilter}
            onChange={e => setPositionFilter(e.target.value)}
            className="px-3 py-2.5 rounded-lg bg-surface-light border border-white/10 text-text text-sm focus:outline-none focus:border-[#00d4ff]/50"
          >
            <option value="all">Alle posisjoner</option>
            {positions.map(pos => (
              <option key={pos} value={pos}>{pos}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Results count */}
      <div className="flex items-center gap-2 text-sm text-text-muted">
        <SlidersHorizontal className="w-4 h-4" />
        <span>{filtered.length} spillere vises</span>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map(player => (
          <PlayerCard key={player.id} player={player} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16 text-text-muted">
          <Search className="w-10 h-10 mx-auto mb-3 opacity-50" />
          <p className="text-lg font-medium text-text">Ingen spillere funnet</p>
          <p className="text-sm mt-1">Prøv å endre søkeord eller filtre</p>
        </div>
      )}
    </div>
  );
}
