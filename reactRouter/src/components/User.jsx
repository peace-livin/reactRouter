import React from 'react'

function User() {
    const {usrid}=useParams()
  return (
    <div>
      <h1>User: {useParams().userid}</h1>
    </div>
  )
}

export default User