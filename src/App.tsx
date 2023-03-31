import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Chat from './components/Chat/chat';
import Firstpage from "./components/firstpage"
import Friends from './components/friends';
import Game from './components/game';
import Home from './components/home';

function App() {
  return (
    <div>
      <Routes>

       <Route path='/' element={<Firstpage />}> </Route> 
       <Route path='/home' element={<Home />}> </Route> 
       <Route path='/chat' element={<Chat />}> </Route> 
       <Route path='/friends' element={<Friends />}> </Route> 
       <Route path='/game' element={<Game />}> </Route> 

      </Routes>
    </div>
  )
}
export default App;