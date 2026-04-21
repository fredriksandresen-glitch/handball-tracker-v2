import { Link } from 'react-router-dom';
import { Shirt } from 'lucide-react';
import type { Player } from '../types';
import { getTeamName, getPositionLabel, getPositionColorClass } from '../utils';

interface PlayerCardProps {
  player: Player;
  showTeam?: boolean;
}

export default function PlayerCard({ player, showTeam = true }: PlayerCardProps) {
  const initials = player.name
    .split(' ')
    .map(n => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <Link
      to={`/spillere/${player.slug}`}
      className="group block bg-surface-light rounded-xl border border-white/5 hover:border-[#00d4ff]/30 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#00d4ff]/5"
    >
      <div className="p-4">
        <div className="flex items-start gap-3">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00d4ff]/20 to-[#00a8cc]/10 flex items-center justify-center text-[#00d4ff] font-bold text-sm shrink-0 border border-[#00d4ff]/20">
            {initials}
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="font-semibold text-text truncate group-hover:text-[#00d4ff] transition-colors">
              {player.name}
            </h3>
            <div className="flex items-center gap-2 mt-1 flex-wrap">
              <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium border ${getPositionColorClass(player.position)}`}>
                {getPositionLabel(player.position)}
              </span>
              {showTeam && (
                <span className="text-xs text-text-muted truncate">
                  {getTeamName(player.teamId)}
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="mt-3 flex items-center gap-1.5 text-xs text-text-muted">
          <Shirt className="w-3.5 h-3.5" />
          <span>Drakt #{player.jerseyNumber}</span>
        </div>
      </div>
    </Link>
  );
}
