import React from 'react'
import Navbar from '../navbar'
import SideBar from '../sidebar'
import {useState} from 'react'
import ButtonNewChannel from './ButtonNewChannel'
import ButtonUser from './ButtonUser'
import ChatRoom from './ChatRoom'

function Chat() {
  return (
    <div>
        <Navbar />
        <div className=" realtive ">
            <ButtonNewChannel />

            <div className=' absolute h-screen left-1 top-32 border rounded-xl shadow-lg '>
              <ButtonUser />
              <ChatRoom />
            </div>
        </div>
        <SideBar />
    </div>
  )
}

export default Chat