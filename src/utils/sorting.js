export const sortOptions = [
  { value: 'deadline', label: 'Deadline soonest' },
  { value: 'company', label: 'Company A-Z' },
  { value: 'startDate', label: 'Start date earliest' },
  { value: 'vacancies', label: 'Most vacancies' },
]

export const sortInternships = (jobs, sortBy) => {
  return [...jobs].sort((a, b) => {
    if (sortBy === 'company') {
      return a.company.localeCompare(b.company)
    }

    if (sortBy === 'startDate') {
      return new Date(a.proposedStartDate) - new Date(b.proposedStartDate)
    }

    if (sortBy === 'vacancies') {
      return b.vacancies - a.vacancies
    }

    return new Date(a.applicationDeadline) - new Date(b.applicationDeadline)
  })
}
