import React, { useState, useEffect } from 'react';

// { search } is props.search
const Result = ({ search }) => {
  const [fetchResults, setfetchResults] = useState(null)
  useEffect(() => {
    if (search) {
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${search}&APPID=02e9f92dd9f823a05877c24d7f4180cd&units=metric/`)
        .then(res => res.json())
        .then(
          (result) => {
            setfetchResults(result)
          })
        .catch(function () {
        })
    }
  }, [search])
  console.log(fetchResults)
  return (
    <ul>
      <li><span>Key</span><span>Value</span></li>
    </ul>
  )
}

export default Result;