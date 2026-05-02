import { Link } from 'react-router-dom'
import SummaryCard from '../components/SummaryCard.jsx'

function Home() {
  return (
    <section className="page home-page">
      <div className="hero-section">
        <div>
          <span className="eyebrow">CityU Computer Science side project</span>
          <h1>Track ITC and STEM internship applications in one place.</h1>
          <p>
            A practical React dashboard for exploring internship records,
            saving targets, updating application status, and estimating the ITC
            allowance for a summer placement.
          </p>
          <div className="hero-actions">
            <Link className="primary-link" to="/internships">
              Browse internships
            </Link>
            <Link className="secondary-link" to="/calculator">
              Calculate allowance
            </Link>
          </div>
        </div>
      </div>

      <div className="summary-grid">
        <SummaryCard label="Internship records" value="20" helper="JSON Server API" />
        <SummaryCard label="Categories" value="7" helper="IT, AI, STEM and product" />
        <SummaryCard label="Max allowance days" value="90" helper="HK$383 per day" />
      </div>

      <section className="content-band">
        <h2>Built to show practical frontend skills</h2>
        <div className="feature-grid">
          <article>
            <h3>React and routing</h3>
            <p>Four pages with reusable components and clear state flow.</p>
          </article>
          <article>
            <h3>Fetch API</h3>
            <p>Internship data loads from JSON Server at localhost:3001.</p>
          </article>
          <article>
            <h3>localStorage</h3>
            <p>Saved roles and application status stay available after refresh.</p>
          </article>
        </div>
      </section>
    </section>
  )
}

export default Home
