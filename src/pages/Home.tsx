import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Users, Trophy, Calendar, ArrowRight, Goal, Star, ShieldCheck } from 'lucide-react';
import { players, teams } from '../data';
import { getFeaturedPlayers, getTopPlayersByGoals } from '../utils';
import PlayerCard from '../components/PlayerCard';

export default function Home() {
  const featured = getFeaturedPlayers();
  const topScorers = getTopPlayersByGoals(5);

  const upcomingMatches = [
    { home: 'Sola', away: 'Storhamar Elite', date: '24. apr', time: '18:00' },
    { home: 'Molde Elite', away: 'Larvik', date: '26. apr', time: '19:00' },
    { home: 'Tertnes Elite', away: 'Fana', date: '27. apr', time: '17:00' },
    { home: 'Byåsen Elite', away: 'Fredrikstad', date: '29. apr', time: '18:00' },
  ];

  const totalGoals = players.reduce((sum, p) => sum + p.stats.goals, 0);
  const avgMEP = (players.reduce((sum, p) => sum + p.stats.mepScore, 0) / players.length).toFixed(1);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
  };

  return (
    <div className="space-y-10">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-3xl glass-card-strong p-8 sm:p-12">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#00d4ff]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#00d4ff]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        <div className="relative text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-6xl font-extrabold text-text mb-4 tracking-tight"
          >
            Norsk <span className="text-[#00d4ff]">Håndball</span> Tracker
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-text-muted max-w-xl mx-auto text-base sm:text-lg"
          >
            Utforsk spillere og lag fra norsk eliteserie i håndball. {players.length} spillere fra {teams.length} lag med full statistikk.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-4 mt-8"
          >
            <Link
              to="/spillere"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#00d4ff] text-[#0f1329] font-bold hover:bg-[#00a8cc] transition-colors shadow-lg shadow-[#00d4ff]/20"
            >
              <Users className="w-4 h-4" />
              Se spillere
            </Link>
            <Link
              to="/lag"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass-card text-text font-bold hover:bg-white/10 transition-colors"
            >
              <Trophy className="w-4 h-4" />
              Se lag
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Quick stats */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-2 sm:grid-cols-4 gap-4"
      >
        <StatCard icon={<Users className="w-5 h-5" />} value={players.length} label="Spillere" delay={0} />
        <StatCard icon={<Trophy className="w-5 h-5" />} value={teams.length} label="Lag" delay={0.1} />
        <StatCard icon={<Goal className="w-5 h-5" />} value={totalGoals} label="Totalt mål" delay={0.2} />
        <StatCard icon={<Star className="w-5 h-5" />} value={avgMEP} label="Snitt MEP" delay={0.3} />
      </motion.section>

      {/* Featured players (top MEP) */}
      <section>
        <div className="flex items-center justify-between mb-5">
          <div>
            <h2 className="text-2xl font-bold text-text">Utvalgte spillere</h2>
            <p className="text-sm text-text-muted mt-0.5">Toppscorere etter MEP-score</p>
          </div>
          <Link to="/spillere" className="text-sm text-[#00d4ff] hover:underline inline-flex items-center gap-1 font-medium">
            Se alle <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {featured.map((player, i) => (
            <PlayerCard key={player.id} player={player} index={i} />
          ))}
        </div>
      </section>

      {/* Top scorers + Upcoming matches */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top scorers */}
        <section className="glass-card rounded-2xl p-5">
          <h2 className="text-lg font-bold text-text mb-4 flex items-center gap-2">
            <Goal className="w-5 h-5 text-[#00d4ff]" />
            Toppscorere
          </h2>
          <div className="space-y-3">
            {topScorers.map((player, i) => (
              <Link
                key={player.id}
                to={`/spillere/${player.slug}`}
                className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-white/5 transition-colors group"
              >
                <span className="w-6 text-center text-sm font-bold text-text-muted">{i + 1}</span>
                <img src={player.imageUrl} alt={player.name} className="w-9 h-9 rounded-full object-cover border border-white/10" loading="lazy" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-text truncate group-hover:text-[#00d4ff] transition-colors">{player.name}</p>
                  <p className="text-xs text-text-muted">{player.stats.goals} mål</p>
                </div>
                <span className="text-xs font-bold text-[#00d4ff]">{player.stats.goals}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Upcoming matches */}
        <section className="glass-card rounded-2xl p-5">
          <h2 className="text-lg font-bold text-text mb-4 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-[#00d4ff]" />
            Kommende kamper
          </h2>
          <div className="space-y-3">
            {upcomingMatches.map((match, i) => (
              <div
                key={i}
                className="flex items-center justify-between rounded-xl px-4 py-3 bg-white/5 border border-white/5"
              >
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <ShieldCheck className="w-4 h-4 text-text-muted shrink-0" />
                  <span className="font-semibold text-text text-sm truncate">{match.home}</span>
                  <span className="text-text-muted text-xs">vs</span>
                  <span className="font-semibold text-text text-sm truncate">{match.away}</span>
                </div>
                <div className="text-right shrink-0 ml-4">
                  <div className="text-sm font-bold text-[#00d4ff]">{match.date}</div>
                  <div className="text-xs text-text-muted">{match.time}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

function StatCard({ icon, value, label, delay }: { icon: React.ReactNode; value: number | string; label: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      className="glass-card rounded-2xl p-5 text-center"
    >
      <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-[#00d4ff]/10 text-[#00d4ff] mb-3">
        {icon}
      </div>
      <div className="text-2xl font-extrabold text-text">{value}</div>
      <div className="text-xs text-text-muted mt-1 font-medium">{label}</div>
    </motion.div>
  );
}
