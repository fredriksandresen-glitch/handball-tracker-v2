import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Shirt, Users, User, Goal, HandHelping, Target, AlertTriangle, Timer, Star, Sparkles, TrendingUp } from 'lucide-react';
import { players, teams } from '../data';
import { getTeamName, getPositionLabel, getPositionColorClass, getPositionColorHex } from '../utils';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

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
          className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#00d4ff] text-[#0f1329] font-semibold text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Tilbake til spillere
        </button>
      </div>
    );
  }

  const team = teams.find(t => t.id === player.teamId);
  const isKeeper = player.position === 'Keeper';

  const formData = player.formCurve.map((goals, i) => ({
    match: `K${i + 1}`,
    goals,
  }));

  const teamMates = players.filter(p => p.teamId === player.teamId && p.id !== player.id).slice(0, 5);

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <button
        onClick={() => navigate(-1)}
        className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-[#00d4ff] transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Tilbake
      </button>

      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card-strong rounded-3xl p-6 sm:p-10 relative overflow-hidden"
      >
        <div
          className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-10 -translate-y-1/2 translate-x-1/2"
          style={{ backgroundColor: getPositionColorHex(player.position) }}
        />
        <div className="relative flex flex-col sm:flex-row items-center sm:items-start gap-6">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            className="relative shrink-0"
          >
            <img
              src={player.imageUrl}
              alt={player.name}
              className="w-28 h-28 sm:w-36 sm:h-36 rounded-full object-cover border-4 border-white/10 shadow-2xl"
            />
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#1a1f3a] border border-white/10 flex items-center gap-1">
              <Shirt className="w-3 h-3 text-[#00d4ff]" />
              <span className="text-xs font-bold text-[#00d4ff]">#{player.jerseyNumber}</span>
            </div>
          </motion.div>
          <div className="text-center sm:text-left flex-1">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-text tracking-tight">{player.name}</h1>
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mt-4">
              <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold border ${getPositionColorClass(player.position)}`}>
                {getPositionLabel(player.position)}
              </span>
            </div>
            <div className="mt-5">
              <Link
                to={`/lag/${team?.slug}`}
                className="inline-flex items-center gap-2 text-[#00d4ff] hover:underline text-sm font-bold"
              >
                <Users className="w-4 h-4" />
                {getTeamName(player.teamId)}
              </Link>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Stats grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <h2 className="text-lg font-bold text-text mb-3 flex items-center gap-2">
          <Target className="w-5 h-5 text-[#00d4ff]" />
          Statistikk
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          <StatBox icon={<Goal className="w-4 h-4" />} label="Mål" value={player.stats.goals} color="#00d4ff" />
          <StatBox icon={<HandHelping className="w-4 h-4" />} label="Målgivende" value={player.stats.assists} color="#34d399" />
          {!isKeeper && (
            <StatBox icon={<Target className="w-4 h-4" />} label="Skuddprosent" value={`${player.stats.shootingPercent}%`} color="#f472b6" />
          )}
          {isKeeper && player.stats.saves !== undefined && (
            <StatBox icon={<Star className="w-4 h-4" />} label="Redninger" value={player.stats.saves} color="#f472b6" />
          )}
          <StatBox icon={<AlertTriangle className="w-4 h-4" />} label="Gule kort" value={player.stats.yellowCards} color="#facc15" />
          <StatBox icon={<Timer className="w-4 h-4" />} label="2-min" value={player.stats.twoMin} color="#fb923c" />
          <StatBox icon={<Star className="w-4 h-4" />} label="MEP" value={player.stats.mepScore} color="#a78bfa" />
        </div>
      </motion.div>

      {/* Form curve */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="glass-card rounded-2xl p-5"
      >
        <h2 className="text-lg font-bold text-text mb-4 flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-[#00d4ff]" />
          Formkurve
        </h2>
        <p className="text-xs text-text-muted mb-4">Mål per kamp — siste 10 kamper</p>
        <div className="h-48 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={formData} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="formGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#00d4ff" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="#00d4ff" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="match" tick={{ fill: '#94a3b8', fontSize: 12 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: '#94a3b8', fontSize: 12 }} axisLine={false} tickLine={false} />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1a1f3a',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '12px',
                  color: '#e2e8f0',
                  fontSize: '13px',
                }}
                formatter={(value: any) => [`${value} mål`, 'Mål']}
                labelStyle={{ color: '#94a3b8' }}
              />
              <Area
                type="monotone"
                dataKey="goals"
                stroke="#00d4ff"
                strokeWidth={2.5}
                fill="url(#formGradient)"
                dot={{ fill: '#00d4ff', strokeWidth: 0, r: 4 }}
                activeDot={{ r: 6, fill: '#00d4ff', stroke: '#0f1329', strokeWidth: 2 }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      {/* Season highlights */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="glass-card rounded-2xl p-5"
      >
        <h2 className="text-lg font-bold text-text mb-4 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-[#00d4ff]" />
          Sesonghighlights
        </h2>
        {player.seasonHighlights.length === 0 ? (
          <p className="text-sm text-text-muted">Ingen highlights registrert.</p>
        ) : (
          <div className="space-y-2.5">
            {player.seasonHighlights.map((highlight, i) => (
              <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#00d4ff] mt-2 shrink-0" />
                <span className="text-sm text-text">{highlight}</span>
              </div>
            ))}
          </div>
        )}
      </motion.div>

      {/* Team info + teammates */}
      {teamMates.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="glass-card rounded-2xl p-5"
        >
          <h2 className="text-lg font-bold text-text mb-4 flex items-center gap-2">
            <Users className="w-5 h-5 text-[#00d4ff]" />
            Lagkamerater
          </h2>
          <div className="flex flex-wrap gap-3">
            {teamMates.map(mate => (
              <Link
                key={mate.id}
                to={`/spillere/${mate.slug}`}
                className="flex items-center gap-2.5 p-2 pr-4 rounded-xl bg-white/5 border border-white/5 hover:border-[#00d4ff]/30 hover:bg-white/10 transition-colors group"
              >
                <img src={mate.imageUrl} alt={mate.name} className="w-9 h-9 rounded-full object-cover border border-white/10" loading="lazy" />
                <div>
                  <p className="text-sm font-semibold text-text group-hover:text-[#00d4ff] transition-colors">{mate.name}</p>
                  <p className="text-[11px] text-text-muted">{getPositionLabel(mate.position)}</p>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>
      )}

      {/* Full player info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="glass-card rounded-2xl p-5"
      >
        <h2 className="text-lg font-bold text-text mb-4">Spillerinfo</h2>
        <dl className="space-y-2 text-sm">
          <InfoRow label="Navn" value={player.name} />
          <InfoRow label="Lag" value={getTeamName(player.teamId)} />
          <InfoRow label="Posisjon" value={getPositionLabel(player.position)} />
          <InfoRow label="Draktnr" value={`#${player.jerseyNumber}`} />
          <InfoRow label="Kamper spilt" value={String(player.stats.matchesPlayed)} />
        </dl>
      </motion.div>
    </div>
  );
}

function StatBox({ icon, label, value, color }: { icon: React.ReactNode; label: string; value: string | number; color: string }) {
  return (
    <div className="glass-card rounded-xl p-4 text-center hover:bg-white/[0.07] transition-colors">
      <div className="inline-flex items-center justify-center w-9 h-9 rounded-lg mb-2" style={{ backgroundColor: `${color}20`, color }}>
        {icon}
      </div>
      <div className="text-xl font-extrabold text-text">{value}</div>
      <div className="text-[11px] text-text-muted mt-0.5 font-medium">{label}</div>
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between py-2 border-b border-white/5 last:border-0">
      <dt className="text-text-muted">{label}</dt>
      <dd className="text-text font-semibold">{value}</dd>
    </div>
  );
}
