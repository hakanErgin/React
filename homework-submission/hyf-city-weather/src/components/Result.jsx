import React, { useState, useEffect } from 'react'
import List from './List'

// { search } is props.search
const Result = ({ search }) => {
  const [fetchResults, setfetchResults] = useState(null)
  useEffect(() => {
    if (search) {
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${search}&APPID=02e9f92dd9f823a05877c24d7f4180cd&units=metric/`)
        .then(res => res.json())
        .then(res => setfetchResults(res))
        .catch(function (err) {
          console.log(err)
        })
    }
  }, [search])

  return (
    <ul>
      <List fetchResults={fetchResults} />
    </ul>
  )
}

export default Result
