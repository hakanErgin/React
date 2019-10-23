import React, { useState, useEffect } from 'react'
import Sidebar from './Sidebar'
import '../App.css'

const App = () => {
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

export default App
