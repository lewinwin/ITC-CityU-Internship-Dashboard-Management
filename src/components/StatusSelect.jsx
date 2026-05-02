import { statusOptions } from '../utils/storage.js'

function StatusSelect({ value, onChange }) {
  return (
    <label className="status-select">
      <span>Application status</span>
      <select value={value} onChange={(event) => onChange(event.target.value)}>
        {statusOptions.map((status) => (
          <option key={status} value={status}>
            {status}
          </option>
        ))}
      </select>
    </label>
  )
}

export default StatusSelect
