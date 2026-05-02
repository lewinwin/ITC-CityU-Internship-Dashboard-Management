import { sortOptions } from '../utils/sorting.js'

function SortDropdown({ value, onChange }) {
  return (
    <label className="field">
      <span>Sort by</span>
      <select value={value} onChange={(event) => onChange(event.target.value)}>
        {sortOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  )
}

export default SortDropdown
