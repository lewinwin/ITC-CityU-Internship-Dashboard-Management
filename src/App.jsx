import { HashRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Internships from './pages/Internships.jsx'
import Saved from './pages/Saved.jsx'
import Calculator from './pages/Calculator.jsx'
import './App.css'

function App() {
  return (
    <HashRouter>
      <Navbar />
      <main className="app-shell">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/internships" element={<Internships />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/calculator" element={<Calculator />} />
        </Routes>
      </main>
    </HashRouter>
  )
}

export default App
