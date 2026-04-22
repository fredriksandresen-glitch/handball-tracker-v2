import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Users, ArrowRight, Shield } from 'lucide-react';
import { teams } from '../data';
import { getTeamPlayers } from '../utils';

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

export default function Teams() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-extrabold text-text mb-1">Lag</h1>
        <p className="text-text-muted text-sm">{teams.length} lag i eliteserien</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {teams.map((team, i) => {
          const roster = getTeamPlayers(team.id);
          const colors = teamColors[team.id] ?? { from: '#00d4ff', to: '#0066ff' };
          return (
            <motion.div
              key={team.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04 }}
            >
              <Link
                to={`/lag/${team.slug}`}
                className="group block glass-card rounded-2xl hover:border-[#00d4ff]/30 transition-all duration-300 hover:-translate-y-1 p-5 overflow-hidden relative"
              >
                <div
                  className="absolute top-0 right-0 w-24 h-24 rounded-full blur-2xl opacity-10 -translate-y-1/2 translate-x-1/2"
                  style={{ background: `linear-gradient(135deg, ${colors.from}, ${colors.to})` }}
                />
                <div className="relative flex items-start justify-between">
                  <div>
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-bold text-lg border border-white/10 mb-3 shadow-lg"
                      style={{ background: `linear-gradient(135deg, ${colors.from}40, ${colors.to}40)` }}
                    >
                      <Shield className="w-6 h-6" style={{ color: colors.from }} />
                    </div>
                    <h3 className="font-bold text-text text-lg group-hover:text-[#00d4ff] transition-colors">
                      {team.name}
                    </h3>
                  </div>
                  <ArrowRight className="w-5 h-5 text-text-muted group-hover:text-[#00d4ff] transition-colors shrink-0 mt-1" />
                </div>
                <div className="mt-4 flex items-center gap-3">
                  <div className="flex items-center gap-1.5 text-sm text-text-muted">
                    <Users className="w-4 h-4" />
                    <span>{roster.length} spillere</span>
                  </div>
                  <div className="h-3.5 w-px bg-white/10" />
                  <div className="text-sm text-text-muted">
                    {roster.reduce((s, p) => s + p.stats.goals, 0)} mål
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
