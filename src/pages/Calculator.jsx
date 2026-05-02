import { useMemo, useState } from 'react'
import SummaryCard from '../components/SummaryCard.jsx'

function Calculator() {
  const [days, setDays] = useState(90)

  const allowance = useMemo(() => Math.min(Number(days) || 0, 90) * 383, [days])
  const cappedDays = Math.min(Number(days) || 0, 90)

  return (
    <section className="page calculator-page">
      <div className="page-header">
        <span className="eyebrow">ITC allowance calculator</span>
        <h1>Estimate internship allowance</h1>
        <p>
          The estimate uses the formula Math.min(days, 90) * 383, capped at 90
          eligible days.
        </p>
      </div>

      <div className="calculator-layout">
        <form className="calculator-form">
          <label className="field">
            <span>Internship days</span>
            <input
              type="number"
              min="0"
              value={days}
              onChange={(event) => setDays(event.target.value)}
            />
          </label>
          <input
            type="range"
            min="0"
            max="120"
            value={Math.min(Number(days) || 0, 120)}
            onChange={(event) => setDays(event.target.value)}
            aria-label="Internship days"
          />
        </form>

        <div className="summary-grid calculator-summary">
          <SummaryCard label="Eligible days" value={cappedDays} />
          <SummaryCard label="Daily rate" value="HK$383" />
          <SummaryCard
            label="Estimated allowance"
            value={`HK$${allowance.toLocaleString()}`}
            helper="Capped at 90 days"
          />
        </div>
      </div>
    </section>
  )
}

export default Calculator
