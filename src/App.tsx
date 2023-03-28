import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Chat from './components/chat';
import Firstpage from "./components/firstpage"
import Home from './components/home';

function App() {
  return (
    <div>
      <Routes>

       <Route path='/' element={<Firstpage />}> </Route> 
       <Route path='/home' element={<Home />}> </Route> 
       <Route path='/chat' element={<Chat />}> </Route> 

      </Routes>
    </div>
  )
}
export default App;