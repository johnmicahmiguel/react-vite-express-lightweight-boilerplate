import { Routes, Route } from 'react-router-dom';
import { Dashboard } from './pages';

export default function AppRouter() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </div>
  );
}