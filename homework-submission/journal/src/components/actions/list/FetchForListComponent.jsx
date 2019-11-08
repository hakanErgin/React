import React, { useState, useEffect } from 'react'
import ListComponent from './ListComponent'
import { executeGetRequest } from '../../helpers/auth'

const FetchForListComponent = () => {
  const [apiResults, setApiResults] = useState(null)

  useEffect(() => {
    executeGetRequest('/posts', res => {
      setApiResults(res)
    })
  }, [])
  return (apiResults !== null ? <ListComponent data={apiResults} /> : null)
}

export default FetchForListComponent
