function Landing() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">BusinessConnect</h1>
            </div>
            <div className="flex items-center space-x-4">
              <a href="/about" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                About
              </a>
              <a href="/pricing" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                Pricing
              </a>
              <a href="/app" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Connect Business Owners with Contractors
          </h2>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            A platform that bridges the gap between business owners and skilled contractors. 
            Post your needs, find the right talent, and grow your business.
          </p>
          <div className="mt-10 flex justify-center space-x-6">
            <a href="/app" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md text-lg font-medium">
              I'm a Business Owner
            </a>
            <a href="/app" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-md text-lg font-medium">
              I'm a Contractor
            </a>
          </div>
          
          {/* Secondary CTAs */}
          <div className="mt-8 flex justify-center space-x-4">
            <a href="/about" className="text-blue-600 hover:text-blue-800 font-medium">
              Learn more about our platform →
            </a>
            <span className="text-gray-400">|</span>
            <a href="/pricing" className="text-blue-600 hover:text-blue-800 font-medium">
              View pricing plans →
            </a>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Business Owners */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">For Business Owners</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  Create and manage your business profile
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  Post job requirements and needs
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  Review and approve contractor applications
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  Direct messaging with potential contractors
                </li>
              </ul>
            </div>

            {/* Contractors */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">For Contractors</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  Showcase your skills and services
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  Browse and apply to business opportunities
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  View ratings and build your reputation
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  Create your own service posts
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">How It Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Create Your Profile</h4>
              <p className="text-gray-600">Sign up and create a detailed profile showcasing your business or skills.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Connect & Apply</h4>
              <p className="text-gray-600">Browse opportunities, post your needs, and connect with the right people.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Grow Together</h4>
              <p className="text-gray-600">Build lasting business relationships and grow your network.</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">BusinessConnect</h3>
              <p className="text-gray-600">Connecting business owners with skilled contractors.</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="/about" className="text-gray-600 hover:text-gray-900">About</a></li>
                <li><a href="/pricing" className="text-gray-600 hover:text-gray-900">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-4">Platform</h4>
              <ul className="space-y-2">
                <li><a href="/app" className="text-gray-600 hover:text-gray-900">Dashboard</a></li>
                <li><a href="/api/documentation" className="text-gray-600 hover:text-gray-900">API Docs</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-4">Get Started</h4>
              <a href="/app" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium inline-block">
                Join Now
              </a>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
            <p>&copy; 2025 BusinessConnect. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Landing