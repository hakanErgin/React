import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'

const DetailComponent = () => {
  const { id } = useParams()
  const [apiResults, setApiResults] = useState(null)

  useEffect(() => {
    fetch(`http://142.93.51.96/posts/${id}`)
      .then(res => res.json())
      .then(res => setApiResults(res))
      .catch(err => err)
  }, [])

  if (!apiResults) return null

  function item(title, content) {
    return (
      <div><h1>{title}</h1><p>{content}</p></div>
    )
  }

  return (
    <div>
      {item(apiResults[0].title, apiResults[0].content)}
    </div>
  )
}

export default DetailComponent
