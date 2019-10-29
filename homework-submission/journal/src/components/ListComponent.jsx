import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


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
      <li key={key} >
        <div>
          <Link to={`/${key}`}>
            {title}
          </Link>
        </div>
      </li>
    )
  }

  return (
    <div>
      <ul>
        {apiResults.map(item => listItem(item.id, item.title))}
      </ul>
    </div>
  )
}

export default ListComponent
