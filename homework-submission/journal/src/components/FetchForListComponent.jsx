import React, { useState, useEffect } from 'react'
import ListComponent from './ListComponent'

const FetchForListComponent = () => {
  const [apiResults, setApiResults] = useState(null)

  const validate = (item) => {
    if ((typeof item.title === 'string') && (typeof item.body === 'string') && (item.tite !== null)) { return item }
  }

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/`)
      .then(res => res.json())
      .then(res => res.filter(item => validate(item)))
      .then(res => setApiResults(res))
      .catch(err => err)
  })

  if (!apiResults) return null

  return (
    <ListComponent data={apiResults} />
  )
}

export default FetchForListComponent
