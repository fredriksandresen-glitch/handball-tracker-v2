import { Link } from 'react-router-dom';
import { Shield, Users, Search, Home } from 'lucide-react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#0f1329]">
      <nav className="sticky top-0 z-50 bg-[#1a1f3a]/95 backdrop-blur border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-[#00d4ff] font-bold text-lg">
            <Shield className="w-6 h-6" />
            <span>Håndball Tracker</span>
          </Link>
          <div className="flex items-center gap-1 sm:gap-4">
            <NavLink to="/" icon={<Home className="w-4 h-4" />} label="Hjem" />
            <NavLink to="/spillere" icon={<Search className="w-4 h-4" />} label="Spillere" />
            <NavLink to="/lag" icon={<Users className="w-4 h-4" />} label="Lag" />
          </div>
        </div>
      </nav>
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 py-6">
        {children}
      </main>
      <footer className="border-t border-white/10 bg-[#1a1f3a]/50 py-6 mt-auto">
        <div className="max-w-6xl mx-auto px-4 text-center text-sm text-text-muted">
          Håndball Tracker — Norsk håndballspillerdatabase
        </div>
      </footer>
    </div>
  );
}

function NavLink({ to, icon, label }: { to: string; icon: React.ReactNode; label: string }) {
  return (
    <Link
      to={to}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium text-text-muted hover:text-[#00d4ff] hover:bg-white/5 transition-colors"
    >
      {icon}
      <span className="hidden sm:inline">{label}</span>
    </Link>
  );
}
