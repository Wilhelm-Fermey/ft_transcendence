import React from 'react'
import Navbar from './navbar'

function Home() {
  return (
    <div className="">
        <Navbar />

      <div className="flex">

          <div className='w-screen h-screen'>
           <div className="w-3/4 h-screen text-center text-white bg-[#1e1e4e]">

            <h1>  Hello World </h1>

           </div>
          </div>

          <div className='right-0 fixed h-screen w-1/4 bg-gray-400'>ICI LA BARRE</div> 

      </div>

    </div>
  )
}

export default Home