import React from 'react'
import { BiChevronLeftCircle } from "react-icons/bi"
import {useState} from 'react'

function SideBar() {

    const [open, setOpen] = useState(false);

  return (
    <div className={` border-4 border-stone-300 shadow-inner shadow-gray-300 right-0 fixed h-screen ${ open ? "w-80" : "w-12" } duration-300 bg-slate-50 rounded-lg`} >

        <BiChevronLeftCircle className= {`text-white text-4xl bg-[#1e1e4e] 
        rounded-full absolute -left-5 top-9 border-2 cursor-pointer 
        ${open && "rotate-180"} duration-700`}  onClick={() => setOpen(!open)} />

        <div className=" items-center justify-center flex ">
            <img src='/profile.png' width='120px' className="text-center p-2 rounded-full " />
        </div>

        <p className={` ${!open && "scale-0"} bg-white shadow rounded-lg shadow-gray-300 font-Dance text-3xl p-2 m-2 text-center font-bold `} >Name</p>

        <div className={`${!open && "scale-0"} bg-white m-2 p-2 font-mono shadow rounded-lg shadow-gray-300 `} >
            <p>Matchs played : </p>
            <p>Victories     : </p>
            <p>Victorie rate : </p>
        </div>

        <div className={`${!open && "scale-0"} m-8 text-center `} >
            <p className="font-bold font underline" >Match history</p>
        </div>


    </div>

  )
}

export default SideBar