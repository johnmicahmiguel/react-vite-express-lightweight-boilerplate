import { Link } from 'react-router-dom';

export default function Settings() {
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
                <Link to="/app/profile" className="text-gray-600 hover:text-blue-600 pb-2">Profile</Link>
                <Link to="/app/settings" className="text-blue-600 font-semibold border-b-2 border-blue-600 pb-2">Settings</Link>
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
        {/* Settings Header */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-lg p-6 text-white mb-8">
          <div className="flex items-center">
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-2xl font-bold mr-4">
              ⚙️
            </div>
            <div>
              <h1 className="text-3xl font-bold">Application Settings</h1>
              <p className="text-green-100">Configure your development environment and preferences</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Settings */}
          <div className="lg:col-span-2 space-y-6">
            {/* Development Environment */}
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h2 className="text-xl font-bold text-gray-900 mb-4">🚀 Development Environment</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <h3 className="font-semibold">Hot Module Replacement</h3>
                    <p className="text-sm text-gray-600">Enable instant updates during development</p>
                  </div>
                  <div className="w-12 h-6 bg-green-500 rounded-full relative">
                    <div className="w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <h3 className="font-semibold">TypeScript Type Checking</h3>
                    <p className="text-sm text-gray-600">Enable strict type checking</p>
                  </div>
                  <div className="w-12 h-6 bg-green-500 rounded-full relative">
                    <div className="w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <h3 className="font-semibold">Auto Import Sorting</h3>
                    <p className="text-sm text-gray-600">Automatically organize imports</p>
                  </div>
                  <div className="w-12 h-6 bg-green-500 rounded-full relative">
                    <div className="w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Build Settings */}
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h2 className="text-xl font-bold text-gray-900 mb-4">🏗️ Build Configuration</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Build Mode</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                    <option>Production</option>
                    <option>Development</option>
                    <option>Test</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Bundle Target</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                    <option>ES2020</option>
                    <option>ES2022</option>
                    <option>ESNext</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Output Directory</label>
                  <input 
                    type="text" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" 
                    defaultValue="dist"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Source Maps</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                    <option>Enabled</option>
                    <option>Disabled</option>
                    <option>Inline</option>
                  </select>
                </div>
              </div>
            </div>

            {/* API Configuration */}
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h2 className="text-xl font-bold text-gray-900 mb-4">🌐 API Configuration</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">API Base URL</label>
                  <input 
                    type="text" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" 
                    defaultValue="http://localhost:5000/api"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">API Version</label>
                  <input 
                    type="text" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" 
                    defaultValue="v1"
                  />
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <h3 className="font-semibold">Auto-Generate API Docs</h3>
                    <p className="text-sm text-gray-600">Generate Swagger documentation automatically</p>
                  </div>
                  <div className="w-12 h-6 bg-green-500 rounded-full relative">
                    <div className="w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <h3 className="font-semibold">CORS Enabled</h3>
                    <p className="text-sm text-gray-600">Allow cross-origin requests</p>
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
            {/* Environment Status */}
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-lg font-bold text-gray-900 mb-4">🔧 Environment Status</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Node.js</span>
                  <span className="text-green-600 font-semibold">✓ v20.19.0</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">npm</span>
                  <span className="text-green-600 font-semibold">✓ Latest</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">TypeScript</span>
                  <span className="text-green-600 font-semibold">✓ v5.7.2</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Vite</span>
                  <span className="text-green-600 font-semibold">✓ v7.0.6</span>
                </div>
              </div>
            </div>

            {/* Build Scripts */}
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-lg font-bold text-gray-900 mb-4">📜 Available Scripts</h3>
              <div className="space-y-3">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <div className="font-mono text-sm text-blue-800">npm run dev</div>
                  <div className="text-xs text-blue-600">Start development server</div>
                </div>
                <div className="p-3 bg-green-50 rounded-lg">
                  <div className="font-mono text-sm text-green-800">npm run build</div>
                  <div className="text-xs text-green-600">Build for production</div>
                </div>
                <div className="p-3 bg-purple-50 rounded-lg">
                  <div className="font-mono text-sm text-purple-800">npm start</div>
                  <div className="text-xs text-purple-600">Run production server</div>
                </div>
                <div className="p-3 bg-orange-50 rounded-lg">
                  <div className="font-mono text-sm text-orange-800">npm run check</div>
                  <div className="text-xs text-orange-600">Type checking</div>
                </div>
              </div>
            </div>

            {/* Documentation Links */}
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-lg font-bold text-gray-900 mb-4">📚 Documentation</h3>
              <div className="space-y-3">
                <a href="/api/documentation" className="block p-3 bg-blue-50 hover:bg-blue-100 rounded-lg text-blue-700 font-medium transition-colors">
                  🔍 API Documentation
                </a>
                <div className="block p-3 bg-gray-50 rounded-lg text-gray-700 font-medium">
                  📖 React Documentation
                </div>
                <div className="block p-3 bg-yellow-50 rounded-lg text-yellow-700 font-medium">
                  ⚡ Vite Guide
                </div>
                <div className="block p-3 bg-green-50 rounded-lg text-green-700 font-medium">
                  🟢 Node.js Docs
                </div>
              </div>
            </div>

            {/* Danger Zone */}
            <div className="bg-red-50 p-6 rounded-lg border border-red-200">
              <h3 className="text-lg font-bold text-red-900 mb-4">⚠️ Danger Zone</h3>
              <div className="space-y-3">
                <button className="w-full p-3 bg-red-100 hover:bg-red-200 rounded-lg text-red-700 font-medium transition-colors">
                  🗑️ Reset Configuration
                </button>
                <button className="w-full p-3 bg-red-100 hover:bg-red-200 rounded-lg text-red-700 font-medium transition-colors">
                  🔥 Clear Build Cache
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="mt-8 flex justify-between items-center">
          <div className="text-sm text-gray-600">
            Settings are saved automatically
          </div>
          <div className="flex space-x-4">
            <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium transition-colors">
              Reset to Defaults
            </button>
            <button className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all">
              💾 Apply Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}