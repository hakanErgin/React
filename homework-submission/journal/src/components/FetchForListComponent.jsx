import React, { useState, useEffect } from 'react'
import ListComponent from './ListComponent'

const FetchForListComponent = () => {
  const [apiResults, setApiResults] = useState(null)

  useEffect(() => {
    fetch(`http://142.93.51.96/posts/`)
      .then(res => res.json())
      .then(res => setApiResults(res))
      .catch(err => err)
  })

  if (!apiResults) return null

  return (
    <ListComponent data={apiResults}/>
  )
}

export default FetchForListComponent
