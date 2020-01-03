const FetchForListComponent = ({ title, body }) => {

  let url = 'https://jsonplaceholder.typicode.com/posts'

  fetch(url, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify({ title, body })
  })
    .then(res => res.json())
    .then(response => {
      console.log(response[0].body, response[0].title, response[0].id)
    })

  return (null)
}

export default FetchForListComponent
