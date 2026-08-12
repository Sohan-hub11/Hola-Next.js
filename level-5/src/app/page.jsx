'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

function page() {
  const router = useRouter();

  const goToAbout = () => {
    router.push("/about")
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="max-w-5xl items-center font-mono text-sm">

        <h1>Welcome to the Level-5</h1>

        <p>This is a Navigation & Image Optimization part</p>



        <button onClick={goToAbout}>About</button>
      </div>
    </main>
  )
}

export default page
