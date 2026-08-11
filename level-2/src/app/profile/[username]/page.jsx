import React from 'react'

const page = async ({params}) => {

  const {username} = await params;
  return (
    <main>
      <h1>Dynamic Profile: {username}</h1> 
      <p>This is the Dynamic profile page for {username}.</p>
    </main>
  )
}

export default page
