import { useEffect, useMemo, useState } from 'react'
import FilterBar from '../components/FilterBar.jsx'
import InternshipCard from '../components/InternshipCard.jsx'
import SearchBar from '../components/SearchBar.jsx'
import SortDropdown from '../components/SortDropdown.jsx'
import SummaryCard from '../components/SummaryCard.jsx'
import { filterInternships } from '../utils/filtering.js'
import { fetchInternships } from '../utils/internshipsApi.js'
import { sortInternships } from '../utils/sorting.js'
import {
  getSavedIds,
  getStatus,
  getStatuses,
  setStatus,
  toggleSavedId,
} from '../utils/storage.js'

function Internships() {
  const [internships, setInternships] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [sortBy, setSortBy] = useState('deadline')
  const [savedIds, setSavedIds] = useState(getSavedIds)
  const [statuses, setStatuses] = useState(getStatuses)

  useEffect(() => {
    const loadInternships = async () => {
      try {
        setInternships(await fetchInternships())
      } catch {
        setError(
          'Could not load internship data. Please refresh this page.',
        )
      } finally {
        setLoading(false)
      }
    }

    loadInternships()
  }, [])

  const visibleInternships = useMemo(() => {
    const filtered = filterInternships(
      internships,
      searchTerm,
      selectedCategory,
    )
    return sortInternships(filtered, sortBy)
  }, [internships, searchTerm, selectedCategory, sortBy])

  const handleToggleSave = (id) => {
    setSavedIds(toggleSavedId(id))
  }

  const handleStatusChange = (id, status) => {
    setStatuses(setStatus(id, status))
  }

  return (
    <section className="page">
      <div className="page-header">
        <span className="eyebrow">Internship board</span>
        <h1>Browse ITC internship opportunities</h1>
        <p>
          Search across company, role, description, requirements, and skills.
          Filter by category and sort by the most useful application signals.
        </p>
      </div>

      <div className="summary-grid compact">
        <SummaryCard label="Loaded roles" value={internships.length} />
        <SummaryCard label="Showing" value={visibleInternships.length} />
        <SummaryCard label="Saved" value={savedIds.length} />
      </div>

      <div className="toolbar">
        <SearchBar value={searchTerm} onChange={setSearchTerm} />
        <FilterBar
          selectedCategory={selectedCategory}
          onChange={setSelectedCategory}
        />
        <SortDropdown value={sortBy} onChange={setSortBy} />
      </div>

      {loading ? <div className="state-box">Loading internships...</div> : null}

      {error ? <div className="state-box error-state">{error}</div> : null}

      {!loading && !error && visibleInternships.length === 0 ? (
        <div className="state-box">
          No internship matches your search or category filter.
        </div>
      ) : null}

      <div className="internship-grid">
        {visibleInternships.map((internship) => (
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

export default Internships
