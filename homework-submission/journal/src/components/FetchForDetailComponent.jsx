import DetailComponent from './DetailComponent'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { executeGetRequest } from './helpers/auth'

const FetchForDetailComponent = () => {
  const { id } = useParams()
  const [apiResults, setApiResults] = useState(null)

  useEffect(() => {
    executeGetRequest(`/posts/${id}`, res => {
      setApiResults(res)
    })
  }, [id])

  return (apiResults !== null ? <DetailComponent data={apiResults} /> : null)
}

export default FetchForDetailComponent


// useEffect(() => {
//   fetch(`http://142.93.51.96/posts/${id}`)
//     .then(res => res.json())
//     .then(res => setApiResults(res))
//     .catch(err => err)
// }, [])
