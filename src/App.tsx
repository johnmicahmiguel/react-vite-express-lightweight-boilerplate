import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AppRouter from './app/App'
import { Landing } from './marketing/pages'

function App() {
  return (
    <Router>
      <Routes>
        {/* Marketing Routes - CSR in development, SSG in production */}
        <Route path="/" element={<Landing />} />
        
        {/* App Routes */}
        <Route path="/app/*" element={<AppRouter />} />
        
        {/* Fallback for any unhandled routes */}
        <Route path="*" element={<div>Page not found</div>} />
      </Routes>
    </Router>
  )
}

export default App