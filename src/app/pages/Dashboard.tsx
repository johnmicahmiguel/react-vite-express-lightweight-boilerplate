import { Link } from 'react-router-dom';
import { Disclosure, Transition } from '@headlessui/react';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Disclosure as="header" className="bg-white shadow-sm border-b">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center py-4">
                <div className="flex items-center space-x-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold">⚡</span>
                    </div>
                    <h1 className="text-xl font-bold text-gray-900">React Vite Express</h1>
                  </div>
                  <nav className="hidden md:flex space-x-6">
                    <Link to="/app" className="text-blue-600 font-semibold border-b-2 border-blue-600 pb-2 transition-colors">Dashboard</Link>
                  </nav>
                </div>
                <div className="hidden md:flex items-center space-x-4">
                  <a href="/api/documentation" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">API Docs</a>
                  <a href="/" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">← Landing</a>
                </div>
                <div className="md:hidden">
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    ) : (
                      <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                      </svg>
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>
            <Transition
              show={open}
              enter="transition duration-200 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-in"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Disclosure.Panel className="md:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
                  <Link to="/app" className="block px-3 py-2 rounded-md text-sm font-medium text-blue-600 bg-blue-50">
                    Dashboard
                  </Link>
                  <a href="/api/documentation" className="block px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                    API Docs
                  </a>
                  <a href="/" className="block px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                    ← Landing
                  </a>
                </div>
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6 text-white">
            <h1 className="text-3xl font-bold mb-2">Welcome to Your Dashboard! 🚀</h1>
            <p className="text-blue-100">This is your authenticated SPA area. Everything here is client-side rendered and perfect for building dynamic applications.</p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center">
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-600">Build Time</p>
                <p className="text-2xl font-bold text-green-600">⚡ Fast</p>
                <p className="text-xs text-gray-500">Vite HMR in ~50ms</p>
              </div>
              <div className="text-2xl">🏗️</div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center">
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-600">Type Safety</p>
                <p className="text-2xl font-bold text-blue-600">100%</p>
                <p className="text-xs text-gray-500">TypeScript Coverage</p>
              </div>
              <div className="text-2xl">🛡️</div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center">
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-600">API Routes</p>
                <p className="text-2xl font-bold text-purple-600">8</p>
                <p className="text-xs text-gray-500">Auto-documented</p>
              </div>
              <div className="text-2xl">🌐</div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center">
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-600">Performance</p>
                <p className="text-2xl font-bold text-orange-600">A+</p>
                <p className="text-xs text-gray-500">Lighthouse Score</p>
              </div>
              <div className="text-2xl">📈</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Architecture Overview */}
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h2 className="text-xl font-bold text-gray-900 mb-4">🏗️ Architecture Overview</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                <div>
                  <p className="font-semibold text-blue-900">Frontend (React + Vite)</p>
                  <p className="text-sm text-blue-700">Hot reload, TypeScript, TailwindCSS</p>
                </div>
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              </div>
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                <div>
                  <p className="font-semibold text-green-900">Backend (Express + TS)</p>
                  <p className="text-sm text-green-700">REST API, Middleware, Auto-docs</p>
                </div>
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              </div>
              <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                <div>
                  <p className="font-semibold text-purple-900">SSG + CSR Hybrid</p>
                  <p className="text-sm text-purple-700">SEO-friendly marketing + dynamic app</p>
                </div>
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h2 className="text-xl font-bold text-gray-900 mb-4">⚛️ Tech Stack</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <div className="text-2xl mb-2">⚛️</div>
                <p className="font-semibold text-sm">React 19</p>
                <p className="text-xs text-gray-500">Latest & Greatest</p>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <div className="text-2xl mb-2">⚡</div>
                <p className="font-semibold text-sm">Vite</p>
                <p className="text-xs text-gray-500">Lightning Fast</p>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <div className="text-2xl mb-2">🌐</div>
                <p className="font-semibold text-sm">Express</p>
                <p className="text-xs text-gray-500">Robust Backend</p>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <div className="text-2xl mb-2">📘</div>
                <p className="font-semibold text-sm">TypeScript</p>
                <p className="text-xs text-gray-500">Type Safety</p>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <div className="text-2xl mb-2">🎨</div>
                <p className="font-semibold text-sm">TailwindCSS</p>
                <p className="text-xs text-gray-500">Utility-First</p>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <div className="text-2xl mb-2">🔍</div>
                <p className="font-semibold text-sm">Swagger</p>
                <p className="text-xs text-gray-500">Auto API Docs</p>
              </div>
            </div>
          </div>
        </div>

        {/* Development Status */}
        <div className="bg-white p-6 rounded-lg shadow-sm border mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">🚀 Development Status</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <h3 className="font-semibold text-gray-800">✅ Ready to Use</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center text-green-600">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  React Router Setup
                </li>
                <li className="flex items-center text-green-600">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Express API Server
                </li>
                <li className="flex items-center text-green-600">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  TypeScript Config
                </li>
                <li className="flex items-center text-green-600">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Auto API Documentation
                </li>
              </ul>
            </div>
            
            <div className="space-y-3">
              <h3 className="font-semibold text-gray-800">🔧 Customize For You</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center text-blue-600">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Add Your Database
                </li>
                <li className="flex items-center text-blue-600">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Implement Auth Logic
                </li>
                <li className="flex items-center text-blue-600">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Build Your Features
                </li>
                <li className="flex items-center text-blue-600">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Deploy Anywhere
                </li>
              </ul>
            </div>
            
            <div className="space-y-3">
              <h3 className="font-semibold text-gray-800">📚 Explore More</h3>
              <div className="space-y-2">
                <a href="/api/documentation" className="block text-sm text-blue-600 hover:text-blue-800 p-2 bg-blue-50 rounded transition-colors">
                  📖 View API Documentation
                </a>
                <a href="/" className="block text-sm text-purple-600 hover:text-purple-800 p-2 bg-purple-50 rounded transition-colors">
                  🏠 Back to Landing Page
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-lg text-white">
          <h2 className="text-xl font-bold mb-4">⚡ Quick Start Commands</h2>
          <div className="bg-black rounded-lg p-4 font-mono text-sm">
            <div className="text-green-400 mb-1">$ npm run dev    <span className="text-gray-400"># Start development server</span></div>
            <div className="text-green-400 mb-1">$ npm run build  <span className="text-gray-400"># Build for production</span></div>
            <div className="text-green-400 mb-1">$ npm start      <span className="text-gray-400"># Run production server</span></div>
            <div className="text-yellow-400">$ npm run check   <span className="text-gray-400"># TypeScript type checking</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}