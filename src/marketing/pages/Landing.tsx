import { Disclosure, Transition } from '@headlessui/react'

function Landing() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Disclosure as="header" className="bg-white shadow-sm">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center py-6">
                <div className="flex items-center">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-lg">⚡</span>
                    </div>
                    <h1 className="text-2xl font-bold text-gray-900">React Vite Express</h1>
                  </div>
                </div>
                <div className="hidden md:flex items-center space-x-4">
                  <a href="/api/documentation" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                    API Docs
                  </a>
                  <a href="/app" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
                    Try Demo
                  </a>
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
                  <a href="/api/documentation" className="block px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                    API Docs
                  </a>
                  <a href="/app" className="block px-3 py-2 rounded-md text-sm font-medium bg-blue-600 text-white hover:bg-blue-700">
                    Try Demo
                  </a>
                </div>
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <div className="mb-8">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
              🚀 Production Ready Boilerplate
            </span>
          </div>
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Full-Stack Boilerplate<br />
            <span className="text-blue-600">Built for Speed</span>
          </h2>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            Modern React + Vite frontend with Express + TypeScript backend. 
            Clean architecture, auto-generated API docs, and ready for deployment.
          </p>
          <div className="mt-10 flex justify-center space-x-6">
            <a href="/app" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md text-lg font-medium">
              View Dashboard
            </a>
            <a href="/api/documentation" className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-md text-lg font-medium">
              API Documentation
            </a>
          </div>

          {/* Tech Stack */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-lg mx-auto">
            <div className="text-center">
              <div className="text-3xl mb-2">⚛️</div>
              <div className="text-sm font-medium text-gray-700">React 19</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">⚡</div>
              <div className="text-sm font-medium text-gray-700">Vite</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🌐</div>
              <div className="text-sm font-medium text-gray-700">Express</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">📘</div>
              <div className="text-sm font-medium text-gray-700">TypeScript</div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">What's Included</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Frontend */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-2xl mb-4">🎨</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Modern Frontend</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  React 19 + Vite for lightning-fast development
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  TailwindCSS for rapid UI development
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  React Router for client-side routing
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  React Query for state management
                </li>
              </ul>
            </div>

            {/* Backend */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-2xl mb-4">🔧</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Robust Backend</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  Express + TypeScript for type safety
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  Auto-generated API documentation
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  JWT-ready authentication structure
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  Middleware for security & logging
                </li>
              </ul>
            </div>

            {/* Architecture */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-2xl mb-4">🏗️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Smart Architecture</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  SSG for marketing pages (SEO-friendly)
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  CSR for authenticated app pages
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  Clean domain separation
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  Ready for production deployment
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Quick Start Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Get Started in Seconds</h3>
          <div className="bg-gray-900 rounded-lg p-6 max-w-2xl mx-auto">
            <div className="text-green-400 font-mono text-sm">
              <div className="mb-2">$ git clone your-repo</div>
              <div className="mb-2">$ npm install</div>
              <div className="mb-2">$ npm run dev</div>
              <div className="text-gray-400"># 🚀 Server running at http://localhost:5000</div>
            </div>
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-600">
              Everything configured and ready to go. Start building your app immediately.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">⚡</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">React Vite Express</h3>
              </div>
              <p className="text-gray-600 text-sm">Production-ready full-stack boilerplate for modern web applications.</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-4">Explore</h4>
              <ul className="space-y-2">
                <li><a href="/app" className="text-gray-600 hover:text-gray-900 text-sm">Live Demo</a></li>
                <li><a href="/api/documentation" className="text-gray-600 hover:text-gray-900 text-sm">API Documentation</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-4">Ready to Build?</h4>
              <a href="/app" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium inline-block">
                Try the Demo
              </a>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
            <p className="text-sm">&copy; 2025 React Vite Express Boilerplate. Built for developers, by developers.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Landing