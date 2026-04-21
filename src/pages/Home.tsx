import { Link } from 'react-router-dom';
import { Users, Trophy, Calendar, ArrowRight } from 'lucide-react';
import { players, teams } from '../data';
import { getFeaturedPlayers } from '../utils';
import PlayerCard from '../components/PlayerCard';

export default function Home() {
  const featured = getFeaturedPlayers();

  const upcomingMatches = [
    { home: 'Sola', away: 'Storhamar Elite', date: '24. apr', time: '18:00' },
    { home: 'Molde Elite', away: 'Larvik', date: '26. apr', time: '19:00' },
    { home: 'Tertnes Elite', away: 'Fana', date: '27. apr', time: '17:00' },
  ];

  return (
    <div className="space-y-10">
      {/* Hero */}
      <section className="text-center py-10 sm:py-14">
        <h1 className="text-3xl sm:text-5xl font-bold text-text mb-4">
          Norsk <span className="text-[#00d4ff]">Håndball</span> Tracker
        </h1>
        <p className="text-text-muted max-w-xl mx-auto text-base sm:text-lg">
          Utforsk spillere og lag fra norsk eliteserie i håndball. {players.length} spillere fra {teams.length} lag.
        </p>
        <div className="flex items-center justify-center gap-4 mt-6">
          <Link
            to="/spillere"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#00d4ff] text-[#0f1329] font-semibold hover:bg-[#00a8cc] transition-colors"
          >
            <Users className="w-4 h-4" />
            Se spillere
          </Link>
          <Link
            to="/lag"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-surface-light border border-white/10 text-text font-semibold hover:bg-surface-lighter transition-colors"
          >
            <Trophy className="w-4 h-4" />
            Se lag
          </Link>
        </div>
      </section>

      {/* Quick stats */}
      <section className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <StatCard icon={<Users className="w-5 h-5" />} value={players.length} label="Spillere" />
        <StatCard icon={<Trophy className="w-5 h-5" />} value={teams.length} label="Lag" />
        <StatCard icon={<Users className="w-5 h-5" />} value={new Set(players.map(p => p.position)).size} label="Posisjoner" />
        <StatCard icon={<Calendar className="w-5 h-5" />} value={upcomingMatches.length} label="Kommende kamper" />
      </section>

      {/* Featured players */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-text">Utvalgte spillere</h2>
          <Link to="/spillere" className="text-sm text-[#00d4ff] hover:underline inline-flex items-center gap-1">
            Se alle <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {featured.map(player => (
            <PlayerCard key={player.id} player={player} />
          ))}
        </div>
      </section>

      {/* Upcoming matches */}
      <section>
        <h2 className="text-xl font-bold text-text mb-4">Kommende kamper</h2>
        <div className="space-y-3">
          {upcomingMatches.map((match, i) => (
            <div
              key={i}
              className="flex items-center justify-between bg-surface-light rounded-xl px-4 py-3 border border-white/5"
            >
              <div className="flex items-center gap-3 flex-1 min-w-0">
                <span className="font-semibold text-text truncate">{match.home}</span>
                <span className="text-text-muted text-sm">vs</span>
                <span className="font-semibold text-text truncate">{match.away}</span>
              </div>
              <div className="text-right shrink-0 ml-4">
                <div className="text-sm font-medium text-[#00d4ff]">{match.date}</div>
                <div className="text-xs text-text-muted">{match.time}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function StatCard({ icon, value, label }: { icon: React.ReactNode; value: number; label: string }) {
  return (
    <div className="bg-surface-light rounded-xl border border-white/5 p-4 text-center">
      <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[#00d4ff]/10 text-[#00d4ff] mb-2">
        {icon}
      </div>
      <div className="text-2xl font-bold text-text">{value}</div>
      <div className="text-xs text-text-muted mt-0.5">{label}</div>
    </div>
  );
}
