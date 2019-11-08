import React from 'react'

const ErrorComponent = ({ error }) => {
  return (
    <div>
      <p>{'something went wrong'}</p>
      <p>{error}</p>
    </div>
  )
}

export default ErrorComponent
