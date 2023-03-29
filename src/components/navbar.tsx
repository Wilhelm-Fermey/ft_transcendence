import React from 'react'
import {Link} from "react-router-dom"

function Navbar() {
  return (
    <div className="sticky top-0 z-50 w-screen p-12 bg-[#1e1e4e] text-white font-mono " >
        <Link to="/home" className="pong_sidebar">Pong</Link>

        <Link to="/home" className="sidebar">Play</Link>
        <Link to="/chat" className="sidebar">Chat</Link>
        <Link to="/friends" className="sidebar">Friends</Link>
    </div>
  )
}

export default Navbar