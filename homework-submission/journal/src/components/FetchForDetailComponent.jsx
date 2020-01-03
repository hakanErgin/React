import DetailComponent from './DetailComponent'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'

const FetchForDetailComponent = () => {
  const { id } = useParams()
  const [apiResults, setApiResults] = useState(null)

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => res.json())
      .then(res => setApiResults(res))
      .catch(err => err)
  })

  if (!apiResults) return null

  return (
    <DetailComponent data={apiResults} />
  )
}

export default FetchForDetailComponent
