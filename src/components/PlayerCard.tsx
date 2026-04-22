import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shirt, Goal, Star } from 'lucide-react';
import type { Player } from '../types';
import { getTeamName, getPositionLabel, getPositionColorClass } from '../utils';

interface PlayerCardProps {
  player: Player;
  showTeam?: boolean;
  index?: number;
}

export default function PlayerCard({ player, showTeam = true, index = 0 }: PlayerCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.03 }}
    >
      <Link
        to={`/spillere/${player.slug}`}
        className="group block glass-card rounded-2xl hover:border-[#00d4ff]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#00d4ff]/5 overflow-hidden"
      >
        <div className="p-4">
          <div className="flex items-start gap-3.5">
            <div className="relative shrink-0">
              <img
                src={player.imageUrl}
                alt={player.name}
                className="w-14 h-14 rounded-full object-cover border-2 border-white/10 group-hover:border-[#00d4ff]/40 transition-colors"
                loading="lazy"
              />
              <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#1a1f3a] border border-white/10 flex items-center justify-center">
                <span className="text-[9px] font-bold text-[#00d4ff]">{player.jerseyNumber}</span>
              </div>
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="font-semibold text-text truncate group-hover:text-[#00d4ff] transition-colors text-[15px]">
                {player.name}
              </h3>
              <div className="flex items-center gap-2 mt-1.5 flex-wrap">
                <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold border ${getPositionColorClass(player.position)}`}>
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

          {/* Mini stat row */}
          <div className="mt-3.5 flex items-center gap-3">
            <div className="flex items-center gap-1 text-xs text-text-muted">
              <Goal className="w-3.5 h-3.5 text-[#00d4ff]" />
              <span className="font-semibold text-text">{player.stats.goals}</span>
              <span>mål</span>
            </div>
            <div className="flex items-center gap-1 text-xs text-text-muted">
              <Star className="w-3.5 h-3.5 text-amber-400" />
              <span className="font-semibold text-text">{player.stats.mepScore}</span>
              <span>MEP</span>
            </div>
            <div className="flex items-center gap-1 text-xs text-text-muted ml-auto">
              <Shirt className="w-3.5 h-3.5" />
              <span>#{player.jerseyNumber}</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
