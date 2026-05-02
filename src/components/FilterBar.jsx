import { categories } from '../utils/filtering.js'

function FilterBar({ selectedCategory, onChange }) {
  return (
    <label className="field">
      <span>Category</span>
      <select
        value={selectedCategory}
        onChange={(event) => onChange(event.target.value)}
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </label>
  )
}

export default FilterBar
