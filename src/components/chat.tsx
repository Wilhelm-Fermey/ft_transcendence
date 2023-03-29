import React from 'react'
import Navbar from './navbar'
import SideBar from './sidebar'

function Chat() {
  return (
    <div>
        <Navbar />
        <SideBar />
            
        
        <div className="text-center m-12 p-12 ">
            Here is the chat page 
        </div>
    </div>
  )
}

export default Chat