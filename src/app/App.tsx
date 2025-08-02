import { Routes, Route } from 'react-router-dom';
import { Dashboard, Profile, Settings } from './pages';

export default function AppRouter() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Routes>
        <Route path="/app" element={<Dashboard />} />
        <Route path="/app/profile" element={<Profile />} />
        <Route path="/app/settings" element={<Settings />} />
      </Routes>
    </div>
  );
}