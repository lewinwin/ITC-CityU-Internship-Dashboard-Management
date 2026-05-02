function SearchBar({ value, onChange }) {
  return (
    <label className="field search-field">
      <span>Search</span>
      <input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Company, role, requirements, skills..."
      />
    </label>
  )
}

export default SearchBar
