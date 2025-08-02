import { Link } from 'react-router-dom';

export default function Profile() {
  return (
    <div className="p-6">
      <nav className="mb-6">
        <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow">
          <Link to="/app" className="text-gray-600 hover:text-blue-600">Dashboard</Link>
          <Link to="/app/profile" className="text-blue-600 font-semibold">Profile</Link>
          <Link to="/app/settings" className="text-gray-600 hover:text-blue-600">Settings</Link>
          <div className="ml-auto">
            <a href="/" className="text-gray-600 hover:text-blue-600">← Back to Marketing</a>
          </div>
        </div>
      </nav>
      
      <div className="bg-white p-6 rounded-lg shadow">
        <h1 className="text-2xl font-bold mb-4">Profile</h1>
        <p className="text-gray-600 mb-6">Manage your user profile and account settings.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input type="text" className="w-full p-2 border rounded-md" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" className="w-full p-2 border rounded-md" placeholder="john@example.com" />
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Account Stats</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Member since:</span>
                <span className="font-medium">January 2024</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Projects completed:</span>
                <span className="font-medium">8</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Account status:</span>
                <span className="font-medium text-green-600">Active</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-6">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}