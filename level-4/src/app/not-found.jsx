import React from 'react'

function notFound() {
  return (  
    <div className="flex min-h-screen flex-col items-center justify-between p-24 bg-red-900">
      <h1>Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
    </div>
  )
}

export default notFound
