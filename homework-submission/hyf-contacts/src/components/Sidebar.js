import React from 'react'

const Sidebar = (result) => {

  let arr = result.results
  console.log(arr)

  let newArr = [];
  for (var key in arr) {
    newArr.push(arr[key])
  }

  return (
    <div>
      <ul>
        {console.log(newArr[1]), console.log(newArr[2])}
      </ul>
    </div>
  )
}

export default Sidebar
