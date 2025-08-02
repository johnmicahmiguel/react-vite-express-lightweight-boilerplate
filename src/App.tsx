import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AppRouter from './app/App'

function App() {
  return (
    <Router>
      <Routes>
        {/* App Routes - Marketing routes are handled by SSG */}
        <Route path="/app/*" element={<AppRouter />} />
        
        {/* Fallback for any unhandled routes */}
        <Route path="*" element={<div>Page not found</div>} />
      </Routes>
    </Router>
  )
}

export default App