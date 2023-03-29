import React from 'react'
import Navbar from './navbar'
import SideBar from './sidebar'

function Friends() {
  return (

    <div className="  bg-[#1e1e4e]">

          <Navbar />
          <SideBar />

        <span className="bg-[#1e1e4e] h-screen w-screen items-center justify-center flex ">
            <div className="bg-white h-3/4 w-3/4 rounded-xl ">
                
                <p className=" text-lg font-mono p-6 ml-4 "> Search you friends here: </p> 

                <form action="" className=" pl-8 relative w-max">
                <input type="search" 
                className="peer cursor-pointer relative z-10 h-12 w-12 rounded-full border bg-transparent pl-12 outline-none focus:w-full focus:cursor-text focus:border-black focus:pl-16 focus:pr-4" />
                <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-black px-3.5 peer-focus:border-black peer-focus:stroke-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                </form>


            </div>
        </span>

    </div>
      
  )
}

export default Friends