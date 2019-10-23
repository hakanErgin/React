import React, { useState, useEffect } from 'react'
import Sidebar from './Sidebar'

const FetchData = () => {
  const [results, setResults] = useState(null)

  useEffect(() => {
    fetch(`https://api.myjson.com/bins/ofhd0`)
      .then(res => res.json())
      .then(res => setResults(res))
      .catch(function (err) {
        console.log(err)
      })
  }, [])
  return (
    <div>
      <Sidebar results={results} />
    </div>
  )
}

export default FetchData;
