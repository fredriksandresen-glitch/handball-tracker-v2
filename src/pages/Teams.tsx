import { Link } from 'react-router-dom';
import { Users, ArrowRight } from 'lucide-react';
import { teams } from '../data';
import { getTeamPlayers } from '../utils';

export default function Teams() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-text mb-1">Lag</h1>
        <p className="text-text-muted text-sm">{teams.length} lag i eliteserien</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {teams.map(team => {
          const roster = getTeamPlayers(team.id);
          return (
            <Link
              key={team.id}
              to={`/lag/${team.slug}`}
              className="group bg-surface-light rounded-xl border border-white/5 hover:border-[#00d4ff]/30 transition-all hover:-translate-y-0.5 p-5"
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00d4ff]/20 to-[#00a8cc]/10 flex items-center justify-center text-[#00d4ff] font-bold text-lg border border-[#00d4ff]/20 mb-3">
                    {team.name.slice(0, 2).toUpperCase()}
                  </div>
                  <h3 className="font-bold text-text text-lg group-hover:text-[#00d4ff] transition-colors">
                    {team.name}
                  </h3>
                </div>
                <ArrowRight className="w-5 h-5 text-text-muted group-hover:text-[#00d4ff] transition-colors shrink-0 mt-1" />
              </div>
              <div className="mt-4 flex items-center gap-1.5 text-sm text-text-muted">
                <Users className="w-4 h-4" />
                <span>{roster.length} spillere</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
