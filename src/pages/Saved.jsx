import { useEffect, useMemo, useState } from 'react'
import InternshipCard from '../components/InternshipCard.jsx'
import SummaryCard from '../components/SummaryCard.jsx'
import { fetchInternships } from '../utils/internshipsApi.js'
import {
  getSavedIds,
  getStatus,
  getStatuses,
  setStatus,
  toggleSavedId,
} from '../utils/storage.js'

function Saved() {
  const [internships, setInternships] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [savedIds, setSavedIds] = useState(getSavedIds)
  const [statuses, setStatuses] = useState(getStatuses)

  useEffect(() => {
    const loadInternships = async () => {
      try {
        setInternships(await fetchInternships())
      } catch {
        setError(
          'Saved IDs are stored locally, but internship details could not be loaded.',
        )
      } finally {
        setLoading(false)
      }
    }

    loadInternships()
  }, [])

  const savedInternships = useMemo(
    () => internships.filter((internship) => savedIds.includes(internship.id)),
    [internships, savedIds],
  )

  const handleToggleSave = (id) => {
    setSavedIds(toggleSavedId(id))
  }

  const handleStatusChange = (id, status) => {
    setStatuses(setStatus(id, status))
  }

  return (
    <section className="page">
      <div className="page-header">
        <span className="eyebrow">Saved list</span>
        <h1>Saved internships and application tracker</h1>
        <p>
          Keep a shortlist of roles and update each application stage with
          localStorage.
        </p>
      </div>

      <div className="summary-grid compact">
        <SummaryCard label="Saved roles" value={savedIds.length} />
        <SummaryCard
          label="With details loaded"
          value={savedInternships.length}
        />
      </div>

      {loading ? <div className="state-box">Loading saved internships...</div> : null}
      {error ? <div className="state-box error-state">{error}</div> : null}

      {!loading && !error && savedInternships.length === 0 ? (
        <div className="state-box">
          No saved internships yet. Save roles from the internships page to build
          your shortlist.
        </div>
      ) : null}

      <div className="internship-grid">
        {savedInternships.map((internship) => (
          <InternshipCard
            key={internship.id}
            internship={internship}
            saved={savedIds.includes(internship.id)}
            status={statuses[internship.id] || getStatus(internship.id)}
            onToggleSave={() => handleToggleSave(internship.id)}
            onStatusChange={(status) => handleStatusChange(internship.id, status)}
          />
        ))}
      </div>
    </section>
  )
}

export default Saved
