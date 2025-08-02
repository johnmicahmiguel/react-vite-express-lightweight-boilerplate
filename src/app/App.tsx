import { Routes, Route } from 'react-router-dom';
import { Dashboard, Profile, Settings } from './pages';

export default function AppRouter() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
}