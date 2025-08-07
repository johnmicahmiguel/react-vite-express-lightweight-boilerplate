import { Link } from 'react-router-dom';

export default function Profile() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">⚡</span>
                </div>
                <h1 className="text-xl font-bold text-gray-900">React Vite Express</h1>
              </div>
              <nav className="flex space-x-6">
                <Link to="/app" className="text-gray-600 hover:text-blue-600 pb-2">Dashboard</Link>
                <Link to="/app/profile" className="text-blue-600 font-semibold border-b-2 border-blue-600 pb-2">Profile</Link>
                <Link to="/app/settings" className="text-gray-600 hover:text-blue-600 pb-2">Settings</Link>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <a href="/api/documentation" className="text-gray-600 hover:text-blue-600 text-sm">API Docs</a>
              <a href="/" className="text-gray-600 hover:text-blue-600 text-sm">← Landing</a>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Profile Header */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6 text-white mb-8">
          <div className="flex items-center">
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-2xl font-bold mr-4">
              👤
            </div>
            <div>
              <h1 className="text-3xl font-bold">Developer Profile</h1>
              <p className="text-purple-100">Manage your developer account and preferences</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Form */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h2 className="text-xl font-bold text-gray-900 mb-4">👤 Personal Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                    placeholder="React Developer"
                    defaultValue="React Developer"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                    placeholder="dev@reactviteexpress.com"
                    defaultValue="dev@reactviteexpress.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>Full-Stack Developer</option>
                    <option>Frontend Developer</option>
                    <option>Backend Developer</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                  <input 
                    type="text" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                    placeholder="San Francisco, CA"
                    defaultValue="Everywhere"
                  />
                </div>
              </div>
            </div>

            {/* Skills Section */}
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h2 className="text-xl font-bold text-gray-900 mb-4">🛠️ Tech Stack & Skills</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  { name: 'React', color: 'bg-blue-100 text-blue-800' },
                  { name: 'TypeScript', color: 'bg-blue-100 text-blue-800' },
                  { name: 'Vite', color: 'bg-yellow-100 text-yellow-800' },
                  { name: 'Express', color: 'bg-green-100 text-green-800' },
                  { name: 'TailwindCSS', color: 'bg-cyan-100 text-cyan-800' },
                  { name: 'Node.js', color: 'bg-green-100 text-green-800' },
                  { name: 'MongoDB', color: 'bg-green-100 text-green-800' },
                  { name: 'REST APIs', color: 'bg-purple-100 text-purple-800' },
                  { name: 'Swagger', color: 'bg-orange-100 text-orange-800' }
                ].map((skill) => (
                  <span key={skill.name} className={`px-3 py-2 rounded-full text-sm font-medium text-center ${skill.color}`}>
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Preferences */}
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h2 className="text-xl font-bold text-gray-900 mb-4">⚙️ Development Preferences</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <h3 className="font-semibold">Hot Module Replacement</h3>
                    <p className="text-sm text-gray-600">Enable fast refresh during development</p>
                  </div>
                  <div className="w-12 h-6 bg-green-500 rounded-full relative">
                    <div className="w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <h3 className="font-semibold">TypeScript Strict Mode</h3>
                    <p className="text-sm text-gray-600">Enable strict type checking</p>
                  </div>
                  <div className="w-12 h-6 bg-green-500 rounded-full relative">
                    <div className="w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <h3 className="font-semibold">Auto API Documentation</h3>
                    <p className="text-sm text-gray-600">Generate Swagger docs automatically</p>
                  </div>
                  <div className="w-12 h-6 bg-green-500 rounded-full relative">
                    <div className="w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Stats Card */}
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-lg font-bold text-gray-900 mb-4">📊 Development Stats</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Projects Built</span>
                  <span className="font-bold text-2xl text-blue-600">∞</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Lines of Code</span>
                  <span className="font-bold text-2xl text-green-600">100K+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Bugs Fixed</span>
                  <span className="font-bold text-2xl text-purple-600">999</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Coffee Consumed</span>
                  <span className="font-bold text-2xl text-orange-600">☕∞</span>
                </div>
              </div>
            </div>

            {/* Achievement Badges */}
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-lg font-bold text-gray-900 mb-4">🏆 Achievements</h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="text-center p-3 bg-yellow-50 rounded-lg">
                  <div className="text-2xl mb-1">🚀</div>
                  <div className="text-xs font-semibold">Fast Builder</div>
                </div>
                <div className="text-center p-3 bg-blue-50 rounded-lg">
                  <div className="text-2xl mb-1">⚡</div>
                  <div className="text-xs font-semibold">Vite Master</div>
                </div>
                <div className="text-center p-3 bg-green-50 rounded-lg">
                  <div className="text-2xl mb-1">🎨</div>
                  <div className="text-xs font-semibold">UI Wizard</div>
                </div>
                <div className="text-center p-3 bg-purple-50 rounded-lg">
                  <div className="text-2xl mb-1">🔧</div>
                  <div className="text-xs font-semibold">API Expert</div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-lg font-bold text-gray-900 mb-4">⚡ Quick Actions</h3>
              <div className="space-y-3">
                <Link to="/app" className="block w-full text-left p-3 bg-blue-50 hover:bg-blue-100 rounded-lg text-blue-700 font-medium transition-colors">
                  📊 View Dashboard
                </Link>
                <Link to="/app/settings" className="block w-full text-left p-3 bg-gray-50 hover:bg-gray-100 rounded-lg text-gray-700 font-medium transition-colors">
                  ⚙️ App Settings
                </Link>
                <a href="/api/documentation" className="block w-full text-left p-3 bg-green-50 hover:bg-green-100 rounded-lg text-green-700 font-medium transition-colors">
                  📚 API Docs
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="mt-8 flex justify-end">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all">
            💾 Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}