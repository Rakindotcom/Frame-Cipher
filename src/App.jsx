import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Home from './pages/Home'
import ProjectsPage from './pages/ProjectsPage'
import ServicesPage from './pages/ServicesPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <Router>
      <div className="bg-[#0a0a0f] text-white min-h-screen overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
