import React from 'react'

const page = async ({params}) => {
  
  const slug = await params;
  console.log(slug);

  return (
    <div>
      <h1>Hola from Profile1 - (catch-all)</h1>
      <p>This is the profile1 page.</p>
      
    </div>
  )
}

export default page
