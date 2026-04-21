import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Shirt, Users, User } from 'lucide-react';
import { players, teams } from '../data';
import { getTeamName, getPositionLabel, getPositionColorClass } from '../utils';

export default function PlayerDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const player = players.find(p => p.slug === slug);

  if (!player) {
    return (
      <div className="text-center py-20">
        <User className="w-12 h-12 mx-auto mb-4 text-text-muted" />
        <h1 className="text-xl font-bold text-text">Spiller ikke funnet</h1>
        <p className="text-text-muted mt-2">Spilleren du leter etter finnes ikke i databasen.</p>
        <button
          onClick={() => navigate('/spillere')}
          className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#00d4ff] text-[#0f1329] font-semibold text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Tilbake til spillere
        </button>
      </div>
    );
  }

  const team = teams.find(t => t.id === player.teamId);
  const initials = player.name
    .split(' ')
    .map(n => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  // Mock stats
  const mockStats = [
    { label: 'Kamper', value: Math.floor(Math.random() * 50) + 50 },
    { label: 'Mål', value: Math.floor(Math.random() * 300) + 50 },
    { label: 'Assist', value: Math.floor(Math.random() * 150) + 20 },
    { label: 'Røde kort', value: Math.floor(Math.random() * 5) },
  ];

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <button
        onClick={() => navigate(-1)}
        className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-[#00d4ff] transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Tilbake
      </button>

      <div className="bg-surface-light rounded-2xl border border-white/5 p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-[#00d4ff]/20 to-[#00a8cc]/10 flex items-center justify-center text-[#00d4ff] font-bold text-2xl border-2 border-[#00d4ff]/20 shrink-0">
            {initials}
          </div>
          <div className="text-center sm:text-left flex-1">
            <h1 className="text-2xl sm:text-3xl font-bold text-text">{player.name}</h1>
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mt-3">
              <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${getPositionColorClass(player.position)}`}>
                {getPositionLabel(player.position)}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium bg-surface-lighter text-text border border-white/5">
                <Shirt className="w-3.5 h-3.5" />
                #{player.jerseyNumber}
              </span>
            </div>
            <div className="mt-4">
              <Link
                to={`/lag/${team?.slug}`}
                className="inline-flex items-center gap-2 text-[#00d4ff] hover:underline text-sm font-medium"
              >
                <Users className="w-4 h-4" />
                {getTeamName(player.teamId)}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div>
        <h2 className="text-lg font-bold text-text mb-3">Statistikk</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {mockStats.map(stat => (
            <div key={stat.label} className="bg-surface-light rounded-xl border border-white/5 p-4 text-center">
              <div className="text-2xl font-bold text-[#00d4ff]">{stat.value}</div>
              <div className="text-xs text-text-muted mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Info */}
      <div className="bg-surface-light rounded-xl border border-white/5 p-5">
        <h2 className="text-lg font-bold text-text mb-3">Spillerinfo</h2>
        <dl className="space-y-2 text-sm">
          <div className="flex justify-between py-1.5 border-b border-white/5">
            <dt className="text-text-muted">Navn</dt>
            <dd className="text-text font-medium">{player.name}</dd>
          </div>
          <div className="flex justify-between py-1.5 border-b border-white/5">
            <dt className="text-text-muted">Lag</dt>
            <dd className="text-text font-medium">{getTeamName(player.teamId)}</dd>
          </div>
          <div className="flex justify-between py-1.5 border-b border-white/5">
            <dt className="text-text-muted">Posisjon</dt>
            <dd className="text-text font-medium">{getPositionLabel(player.position)}</dd>
          </div>
          <div className="flex justify-between py-1.5">
            <dt className="text-text-muted">Draktnummer</dt>
            <dd className="text-text font-medium">#{player.jerseyNumber}</dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
