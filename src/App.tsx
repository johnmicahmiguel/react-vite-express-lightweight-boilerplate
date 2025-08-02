import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Landing } from './marketing/pages'
import AppRouter from './app/App'

function App() {
  return (
    <Router>
      <Routes>
        {/* Marketing/Public Routes */}
        <Route path="/" element={<Landing />} />
        
        {/* App Routes */}
        <Route path="/app/*" element={<AppRouter />} />
      </Routes>
    </Router>
  )
}

export default App