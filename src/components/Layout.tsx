import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, Users, Search, Home } from 'lucide-react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-[#0f1329]">
      <nav className="sticky top-0 z-50 glass-card-strong border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5 text-[#00d4ff] font-bold text-lg tracking-tight">
            <Shield className="w-7 h-7" />
            <span className="hidden sm:inline">Håndball Tracker</span>
          </Link>
          <div className="flex items-center gap-1 sm:gap-2">
            <NavLink to="/" icon={<Home className="w-4 h-4" />} label="Hjem" active={location.pathname === '/'} />
            <NavLink to="/spillere" icon={<Search className="w-4 h-4" />} label="Spillere" active={location.pathname === '/spillere' || location.pathname.startsWith('/spillere/')} />
            <NavLink to="/lag" icon={<Users className="w-4 h-4" />} label="Lag" active={location.pathname === '/lag' || location.pathname.startsWith('/lag/')} />
          </div>
        </div>
      </nav>
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 py-6">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
        >
          {children}
        </motion.div>
      </main>
      <footer className="border-t border-white/10 bg-[#1a1f3a]/50 py-6 mt-auto">
        <div className="max-w-6xl mx-auto px-4 text-center text-sm text-text-muted">
          Håndball Tracker — Norsk håndballspillerdatabase
        </div>
      </footer>
    </div>
  );
}

function NavLink({ to, icon, label, active }: { to: string; icon: React.ReactNode; label: string; active: boolean }) {
  return (
    <Link
      to={to}
      className={`relative flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-medium transition-colors ${
        active ? 'text-[#00d4ff]' : 'text-text-muted hover:text-[#00d4ff] hover:bg-white/5'
      }`}
    >
      {icon}
      <span className="hidden sm:inline">{label}</span>
      {active && (
        <motion.div
          layoutId="nav-indicator"
          className="absolute inset-0 rounded-xl bg-[#00d4ff]/10 border border-[#00d4ff]/20"
          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
        />
      )}
    </Link>
  );
}
