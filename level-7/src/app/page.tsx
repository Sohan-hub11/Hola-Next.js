//Note- SSR, SSG and ISR works only on server component.

'use client'
import React, { useEffect } from 'react'

function Page() {

  //SSR
  // const response = await fetch('http://localhost:3000/api/user', {
  //   cache: 'no-store'
  // })
  // const data = await response.json()
  // console.log(data)

  //SSG
  // const response = await fetch('http://localhost:3000/api/user', {
  //   cache: 'force-cache'
  // })
  // const data = await response.json()
  // console.log(data)

  //ISR
  // const response = await fetch('http://localhost:3000/api/user', {
  //   next:{revalidate:5}
  // })
  // const data = await response.json()
  // console.log(data)


  const handleApi = async () => {
    const response = await fetch('/api/user')
    const data = await response.json()
    console.log(data)
  }
  useEffect(() => {
    handleApi()
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div >

        <h1>Welcome to Level - 7</h1>

        <p>This is a Data Fetching Page</p>


      </div>
    </main>
  )
}

export default Page