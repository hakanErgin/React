import React, { useState } from 'react'
import FetchForCreateComponent from './FetchForCreateComponent'

const CreateComponent = () => {
  const [postTitle, setPostTitle] = useState('')
  const [postContent, setPostContent] = useState('')
  const [postForm, setPostForm] = useState(false);

  const handleInputTitle = (e) => {
    setPostTitle(e.target.value)
    e.preventDefault()
  }

  const handleInputContent = (e) => {
    setPostContent(e.target.value)
    e.preventDefault()
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    validate(postTitle, postContent, setPostForm)
  }

  function validate(title, content, func) {
    if (title === '' || content === '') {
      throw console.error('nope')
    }
    else func(true)
  }

  return (
    <div>
      <h1>Create post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <br />
          <input type="text" name="title" onChange={handleInputTitle} value={postTitle} />
        </div>
        <br />
        <div>
          <label>Body</label>
          <br />
          <textarea name="content" onChange={handleInputContent} value={postContent} />
        </div>
        <br />
        <button type="submit" value="submit">Submit</button>
      </form>
      {postForm ? (
        <FetchForCreateComponent setPostForm={setPostForm} title={postTitle} content={postContent} />
      ) : null}
    </div>
  )
}

export default CreateComponent
