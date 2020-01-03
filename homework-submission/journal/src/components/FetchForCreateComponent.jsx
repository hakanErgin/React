import DetailComponent from './DetailComponent'
import React, { useState } from 'react'

const FetchForListComponent = ({ title, body }) => {
  const [apiResults, setApiResults] = useState(null)

  let url = 'https://jsonplaceholder.typicode.com/posts'

  fetch(url, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify({ title, body })
  })
    .then(res => res.json())
    .then(res => setApiResults(res))

  if (!apiResults) return null

  return (
    <div>
      <br />
      <DetailComponent data={apiResults} /></div>
  )
}

export default FetchForListComponent
