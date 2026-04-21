import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Players from './pages/Players';
import PlayerDetail from './pages/PlayerDetail';
import Teams from './pages/Teams';
import TeamDetail from './pages/TeamDetail';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/spillere" element={<Players />} />
        <Route path="/spillere/:slug" element={<PlayerDetail />} />
        <Route path="/lag" element={<Teams />} />
        <Route path="/lag/:slug" element={<TeamDetail />} />
      </Routes>
    </Layout>
  );
}
