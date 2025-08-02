import { Link } from 'react-router-dom';

export default function Settings() {
  return (
    <div className="p-6">
      <nav className="mb-6">
        <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow">
          <Link to="/app" className="text-gray-600 hover:text-blue-600">Dashboard</Link>
          <Link to="/app/profile" className="text-gray-600 hover:text-blue-600">Profile</Link>
          <Link to="/app/settings" className="text-blue-600 font-semibold">Settings</Link>
          <div className="ml-auto">
            <a href="/" className="text-gray-600 hover:text-blue-600">← Back to Marketing</a>
          </div>
        </div>
      </nav>
      
      <div className="bg-white p-6 rounded-lg shadow">
        <h1 className="text-2xl font-bold mb-4">Settings</h1>
        <p className="text-gray-600 mb-6">Configure your application preferences and account settings.</p>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Notifications</h3>
            <div className="space-y-3">
              <label className="flex items-center">
                <input type="checkbox" className="rounded" defaultChecked />
                <span className="ml-2 text-gray-700">Email notifications</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="rounded" />
                <span className="ml-2 text-gray-700">Push notifications</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="rounded" defaultChecked />
                <span className="ml-2 text-gray-700">Weekly reports</span>
              </label>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Privacy</h3>
            <div className="space-y-3">
              <label className="flex items-center">
                <input type="checkbox" className="rounded" defaultChecked />
                <span className="ml-2 text-gray-700">Make profile public</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="rounded" />
                <span className="ml-2 text-gray-700">Allow data sharing</span>
              </label>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Account</h3>
            <div className="space-y-3">
              <button className="text-red-600 hover:text-red-800 font-medium">
                Delete Account
              </button>
              <div>
                <button className="text-gray-600 hover:text-gray-800 font-medium">
                  Export Data
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 mr-3">
            Save Settings
          </button>
          <button className="text-gray-600 hover:text-gray-800">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}