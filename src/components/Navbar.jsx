import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <header className="navbar">
      <NavLink to="/" className="brand">
        <span className="brand-mark">ITC</span>
        <span>CityU ITC Internship Tracker</span>
      </NavLink>
      <nav className="nav-links" aria-label="Main navigation">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/internships">Internships</NavLink>
        <NavLink to="/saved">Saved</NavLink>
        <NavLink to="/calculator">Calculator</NavLink>
      </nav>
    </header>
  )
}

export default Navbar
