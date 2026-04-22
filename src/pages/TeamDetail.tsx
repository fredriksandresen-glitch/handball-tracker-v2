import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Users, Shield, Goal } from 'lucide-react';
import { teams } from '../data';
import { getTeamPlayers } from '../utils';
import PlayerCard from '../components/PlayerCard';

const teamColors: Record<number, { from: string; to: string }> = {
  1: { from: '#00d4ff', to: '#0066ff' },
  2: { from: '#ff6b6b', to: '#ee5a24' },
  3: { from: '#2ed573', to: '#1e90ff' },
  4: { from: '#ffa502', to: '#ff6348' },
  5: { from: '#3742fa', to: '#2f3542' },
  6: { from: '#ff4757', to: '#ff6b81' },
  7: { from: '#7bed9f', to: '#70a1ff' },
  8: { from: '#5352ed', to: '#3742fa' },
  9: { from: '#ff9ff3', to: '#f368e0' },
  10: { from: '#54a0ff', to: '#5f27cd' },
  11: { from: '#48dbfb', to: '#0abde3' },
  12: { from: '#1dd1a1', to: '#10ac84' },
  13: { from: '#feca57', to: '#ff9f43' },
  14: { from: '#ff6b6b', to: '#c44569' },
};

export default function TeamDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const team = teams.find(t => t.slug === slug);

  if (!team) {
    return (
      <div className="text-center py-20">
        <Shield className="w-12 h-12 mx-auto mb-4 text-text-muted" />
        <h1 className="text-xl font-bold text-text">Lag ikke funnet</h1>
        <p className="text-text-muted mt-2">Laget du leter etter finnes ikke i databasen.</p>
        <button
          onClick={() => navigate('/lag')}
          className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#00d4ff] text-[#0f1329] font-semibold text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Tilbake til lag
        </button>
      </div>
    );
  }

  const roster = getTeamPlayers(team.id);
  const colors = teamColors[team.id] ?? { from: '#00d4ff', to: '#0066ff' };
  const totalGoals = roster.reduce((s, p) => s + p.stats.goals, 0);
  const avgMEP = roster.length > 0 ? (roster.reduce((s, p) => s + p.stats.mepScore, 0) / roster.length).toFixed(1) : '0';

  return (
    <div className="space-y-6">
      <button
        onClick={() => navigate(-1)}
        className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-[#00d4ff] transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Tilbake
      </button>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card-strong rounded-3xl p-6 sm:p-8 relative overflow-hidden"
      >
        <div
          className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-10 -translate-y-1/2 translate-x-1/2"
          style={{ background: `linear-gradient(135deg, ${colors.from}, ${colors.to})` }}
        />
        <div className="relative flex items-center gap-5">
          <div
            className="w-18 h-18 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center border-2 border-white/10 shrink-0"
            style={{ background: `linear-gradient(135deg, ${colors.from}30, ${colors.to}30)` }}
          >
            <Shield className="w-8 h-8 sm:w-10 sm:h-10" style={{ color: colors.from }} />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-text tracking-tight">{team.name}</h1>
            <div className="flex items-center gap-4 mt-2 text-sm text-text-muted">
              <span className="flex items-center gap-1.5">
                <Users className="w-4 h-4" />
                {roster.length} spillere
              </span>
              <span className="flex items-center gap-1.5">
                <Goal className="w-4 h-4" />
                {totalGoals} mål
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-xs">MEP</span>
                {avgMEP}
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      <div>
        <h2 className="text-lg font-bold text-text mb-4">Tropp</h2>
        {roster.length === 0 ? (
          <div className="text-center py-12 text-text-muted glass-card rounded-2xl">
            Ingen spillere registrert for dette laget.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {roster.map((player, i) => (
              <PlayerCard key={player.id} player={player} showTeam={false} index={i} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
