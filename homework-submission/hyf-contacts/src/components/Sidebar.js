import React from 'react'

const Sidebar = (result) => {

  const arr = result.results
  console.log(arr)

  const newArr = []
  for (var key in arr) {
    newArr.push(arr[key])
  }

  console.log(newArr)
  
  function listItem(key, fname, lname) {
    return <li key={key}><span>{fname}</span><span>{lname}</span></li>
  }

  return (
    <div>
      <ul>
        {newArr.map(x=> listItem(x.id, x.firstName, x.lastName))}
      </ul>
    </div>
  )
}

export default Sidebar
