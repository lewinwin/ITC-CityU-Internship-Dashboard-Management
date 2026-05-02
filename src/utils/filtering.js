export const categories = [
  'All',
  'Software Engineering',
  'Frontend',
  'Data / AI',
  'STEM Education',
  'Research',
  'Cybersecurity',
  'Product / Business Tech',
]

export const filterInternships = (jobs, searchTerm, selectedCategory) => {
  const query = searchTerm.trim().toLowerCase()

  return jobs.filter((job) => {
    const searchableText = [
      job.company,
      job.jobTitle,
      job.jobDescription,
      job.jobRequirements,
      job.skills.join(' '),
    ]
      .join(' ')
      .toLowerCase()

    const matchesSearch = !query || searchableText.includes(query)
    const matchesCategory =
      selectedCategory === 'All' || job.category === selectedCategory

    return matchesSearch && matchesCategory
  })
}
