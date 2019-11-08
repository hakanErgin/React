import { useEffect } from 'react'

const FetchForCreateComponent = ({ title, content, setPostForm }) => {

  let url = 'http://142.93.51.96/posts'
  useEffect(() => {
    fetch(url, {
      headers: {
        'Authorization': `Bearer:${localStorage.getItem('token')}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify({ title, content })
    })
      .then(res => res.json())
      .then(response => {
        console.log(response[0].content, response[0].title, response[0].id)
      })
      .then(res => setPostForm(false))
  }, [title, content, url, setPostForm])

  return (null)
}

export default FetchForCreateComponent
