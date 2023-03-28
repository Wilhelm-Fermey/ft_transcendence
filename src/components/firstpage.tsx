import React from 'react'
import {Link} from 'react-router-dom'


function Firstpage() {
  return (
    <div className=" h-screen w-auto flex items-center justify-center bg-[#1e1e4e]">

      <span className="hello">

        <div className="m-6 text-center font-bold ">
          <p className="text-[#f84aab] font-Dance text-6xl drop-shadow-2xl " >Welcome to</p>
          <p className="text-[#09d9f0] font-Bungee text-8xl">PONG</p>
        </div>
       
        <div className="m-6 text-center text-white font-mono border-double border-4 rounded-xl border-[#f4fa22]" >
          <Link to="/home">Login as a 42 student</Link>
        </div>

      </span>

    </div>
  )
}

export default Firstpage