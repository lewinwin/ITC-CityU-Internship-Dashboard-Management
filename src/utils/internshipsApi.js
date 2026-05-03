import database from '../../database.json'

export async function fetchInternships() {
  return database.internships
}
