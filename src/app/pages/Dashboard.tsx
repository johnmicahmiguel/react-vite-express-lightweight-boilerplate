import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div className="p-6">
      <nav className="mb-6">
        <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow">
          <Link to="/app" className="text-blue-600 font-semibold">Dashboard</Link>
          <Link to="/app/profile" className="text-gray-600 hover:text-blue-600">Profile</Link>
          <Link to="/app/settings" className="text-gray-600 hover:text-blue-600">Settings</Link>
          <div className="ml-auto">
            <a href="/" className="text-gray-600 hover:text-blue-600">← Back to Marketing</a>
          </div>
        </div>
      </nav>
      
      <div className="bg-white p-6 rounded-lg shadow">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <p className="text-gray-600 mb-4">Welcome to your dashboard. This is a placeholder for authenticated content.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-blue-900">Total Projects</h3>
            <p className="text-2xl font-bold text-blue-600">12</p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg">
            <h3 className="font-semibold text-green-900">Active Users</h3>
            <p className="text-2xl font-bold text-green-600">1,234</p>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg">
            <h3 className="font-semibold text-purple-900">Revenue</h3>
            <p className="text-2xl font-bold text-purple-600">$12,345</p>
          </div>
        </div>
      </div>
    </div>
  );
}