import React from 'react'
import Image from 'next/image'

function page() {
  return (
    <div className='flex min-h-screen flex-col items-center p-24'>
      This is About Page.

      <Image src={"/react.png"} alt='vercel' width={200} height={200}/>      
    </div>
  )
}

 
export default page
