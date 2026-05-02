const SAVED_KEY = 'cityu-itc-saved-internships'
const STATUS_KEY = 'cityu-itc-application-statuses'

const readJson = (key, fallback) => {
  try {
    const value = localStorage.getItem(key)
    return value ? JSON.parse(value) : fallback
  } catch {
    return fallback
  }
}

const writeJson = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value))
}

export const getSavedIds = () => readJson(SAVED_KEY, [])

export const isSaved = (id) => getSavedIds().includes(id)

export const toggleSavedId = (id) => {
  const savedIds = getSavedIds()
  const nextSavedIds = savedIds.includes(id)
    ? savedIds.filter((savedId) => savedId !== id)
    : [...savedIds, id]

  writeJson(SAVED_KEY, nextSavedIds)
  return nextSavedIds
}

export const getStatuses = () => readJson(STATUS_KEY, {})

export const getStatus = (id, fallback = 'Not Applied') =>
  getStatuses()[id] || fallback

export const setStatus = (id, status) => {
  const nextStatuses = {
    ...getStatuses(),
    [id]: status,
  }

  writeJson(STATUS_KEY, nextStatuses)
  return nextStatuses
}

export const statusOptions = [
  'Not Applied',
  'Saved',
  'Applied',
  'Interview',
  'Offer',
  'Rejected',
]
