import React, { useState } from 'react'
import FilteredCats from './FilteredCats.js'
import './CatForm.css'

function CatForm() {
  const [category, setCategory] = useState('5')
  const [catAmount, setCatAmount] = useState('1')
  const [submitCategory, setSubmitCategory] = useState(null)
  const [submitCatAmount, setSubmitCatAmount] = useState(null)

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitCategory(category)
    setSubmitCatAmount(catAmount)
  }

  return (
    <div>
      <form className="filter-form" onSubmit={handleSubmit}>
        <label className="filter-option">
          Kattegori:{' '}
          <select
            onChange={(event) => setCategory(event.target.value)}
            value={category}
          >
            <option value={5}>Katt i låda</option>
            <option value={15}>Katt i kläder</option>
            <option value={1}>Katt i hatt</option>
            <option value={14}>Katt i handfat</option>
            <option value={2}>Katt i rymden</option>
            <option value={7}>Katt i slips</option>
          </select>
        </label>

        <label>
          Antal bilder:{' '}
          <select
            onChange={(event) => setCatAmount(event.target.value)}
            value={catAmount}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </label>
        <input className="submit-button" type="submit" value="Kör!" />
      </form>
      <FilteredCats
        filterCategory={submitCategory}
        filterAmount={submitCatAmount}
      />
    </div>
  )
}

export default CatForm
