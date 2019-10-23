import React from 'react'

function listItem(label, value) {
  return <li><span>{label}</span><span>{value}</span></li>
}

const List = ({ fetchResults }) => {
  if (!fetchResults) { return null }
  else if (fetchResults.cod !== 200) { return <p>{`Error: ${fetchResults.message}`}</p> }
  else {
    const {
      main: { humidity, temp, temp_max, temp_min },
      name, weather } = fetchResults
    const { description } = weather[0]

    return (
      <ul>
        {listItem('location', name)}
        {listItem('description', description)}
        {listItem('humidity', `${humidity}%`)}
        {listItem('temperature', `${temp}°C`)}
        {listItem('Max temperature', `${temp_max}°C`)}
        {listItem('Min temperature', `${temp_min}°C`)}
      </ul>
    )
  }
}

export default List
