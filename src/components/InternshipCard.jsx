import StatusSelect from './StatusSelect.jsx'

function InternshipCard({
  internship,
  saved,
  status,
  onToggleSave,
  onStatusChange,
}) {
  return (
    <article className="internship-card">
      <div className="card-topline">
        <span className="category-pill">{internship.category}</span>
        <span>{internship.vacancies} vacancies</span>
      </div>

      <div className="card-heading">
        <div>
          <h2>{internship.jobTitle}</h2>
          <p>{internship.company}</p>
        </div>
        <button type="button" className="save-button" onClick={onToggleSave}>
          {saved ? 'Saved' : 'Save'}
        </button>
      </div>

      <p className="company-overview">{internship.companyOverview}</p>
      <p>{internship.jobDescription}</p>

      <div className="meta-grid">
        <span>
          <strong>Start</strong>
          {internship.proposedStartDate}
        </span>
        <span>
          <strong>Deadline</strong>
          {internship.applicationDeadline}
        </span>
        <span>
          <strong>Duration</strong>
          {internship.duration}
        </span>
        <span>
          <strong>Honorarium</strong>
          {internship.monthlyHonorarium}
        </span>
      </div>

      <div>
        <h3>Requirements</h3>
        <p>{internship.jobRequirements}</p>
      </div>

      <div className="skill-list" aria-label="Skills">
        {internship.skills.map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </div>

      <div className="application-panel">
        <StatusSelect value={status} onChange={onStatusChange} />
        <div>
          <strong>Apply</strong>
          <a href={`mailto:${internship.submissionEmail}`}>
            {internship.submissionEmail}
          </a>
        </div>
        <a href={internship.website} target="_blank" rel="noreferrer">
          Company website
        </a>
      </div>

      <p className="remarks">{internship.remarks}</p>
    </article>
  )
}

export default InternshipCard
