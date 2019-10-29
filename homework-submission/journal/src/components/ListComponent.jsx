import React, { useState, useEffect } from 'react'

const ListComponent = () => {
  const [apiResults, setApiResults] = useState(null)

  useEffect(() => {
    fetch(`http://142.93.51.96/posts/`)
      .then(res => res.json())
      .then(res => setApiResults(res))
      .catch(err => err)
  }, [])

  if (!apiResults) return null

  function listItem(key, title) {
    return (
      <li key={key}>
        <div>
          <h1 onClick={console.log(key)}>{title}</h1>
        </div>
      </li>
    )
  }

  return (
    <div>
      <ul>
        {apiResults.map(x => listItem(x.id, x.title))}
      </ul>
    </div>
  )
}

export default ListComponent
