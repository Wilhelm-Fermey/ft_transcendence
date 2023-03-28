import React from 'react'
import {Link} from 'react-router-dom'


function Firstpage() {
  return (
    <div className=" h-screen w-auto flex items-center justify-center">

      <span className="hello">

        <div className="m-6 text-center font-bold text-4xl font-pop ">
          <p className="text-[#f84aab] font-fast ">Welcome to</p>
          <p className="text-[#09d9f0] ">PONG</p>
        </div>
       
        <div className="m-6 text-center">
          <Link to="/home"> Click here ! </Link>
        </div>

      </span>

    </div>
  )
}

export default Firstpage