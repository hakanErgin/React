import React, { useState, useEffect } from 'react'
import ListComponent from './ListComponent'
import { executeGetRequest } from './helpers/auth'

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

  // import ErrorComponent from './ErrorComponent'
  // const [errResults, setErrResults] = useState(false)
  // if (errResults !== false) return <ErrorComponent error={errResults} />

  // const validate = (item) => {
  //   if ((typeof item.title === 'string') && (typeof item.content === 'string') && (item.tite !== null)) { return item }
  // }

  // useEffect(() => {
  //   fetch(`http://142.93.51.96/posts/`)
  //     .then(res => res.json())
  //     .then(res => res.filter(item => validate(item)))
  //     .then(res => setApiResults(res))
  //     .then(res => setErrResults((res.error)))
  //     .catch(err => setErrResults(JSON.stringify(err)))
  // }, [])

