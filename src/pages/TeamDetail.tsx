import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Users, Shield } from 'lucide-react';
import { teams } from '../data';
import { getTeamPlayers } from '../utils';
import PlayerCard from '../components/PlayerCard';

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
          className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#00d4ff] text-[#0f1329] font-semibold text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Tilbake til lag
        </button>
      </div>
    );
  }

  const roster = getTeamPlayers(team.id);

  return (
    <div className="space-y-6">
      <button
        onClick={() => navigate(-1)}
        className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-[#00d4ff] transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Tilbake
      </button>

      <div className="bg-surface-light rounded-2xl border border-white/5 p-6 sm:p-8">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#00d4ff]/20 to-[#00a8cc]/10 flex items-center justify-center text-[#00d4ff] font-bold text-xl border-2 border-[#00d4ff]/20 shrink-0">
            {team.name.slice(0, 2).toUpperCase()}
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-text">{team.name}</h1>
            <div className="flex items-center gap-1.5 text-sm text-text-muted mt-1">
              <Users className="w-4 h-4" />
              <span>{roster.length} spillere</span>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-lg font-bold text-text mb-4">Tropp</h2>
        {roster.length === 0 ? (
          <div className="text-center py-12 text-text-muted bg-surface-light rounded-xl border border-white/5">
            Ingen spillere registrert for dette laget.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {roster.map(player => (
              <PlayerCard key={player.id} player={player} showTeam={false} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
