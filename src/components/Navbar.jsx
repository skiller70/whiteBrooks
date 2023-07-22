import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import whiteB from "/whiteB.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

function Navbar() {
  const [isMobile, setIsMobile] = useState(false)

  return (
    <>
      <div className=' fixed  w-[100%] top-0 justify-between md:justify-start  z-50 h-20 text-white bg-gray-900 flex items-center px-8 md:px-16'>
        <div className='md:flex-1/2 text-2xl cursor-pointer flex md:px-16'>
          <img src={whiteB} width={80} />
        </div>


        <div className='flex-1 md:flex hidden  justify-evenly font-medium'>
          <Link to="/"> Home</Link>
          <Link to="/"> Service</Link>
          <a href='#ourClient'>Client</a>
          <Link to="/blogs"> Blogs</Link>  
          <a href='#contactMe'>Contact</a>
        </div>


        <div className=' flex-1 md:flex hidden  justify-center'>
          <button className=' py-1 px-4 font-medium shadow-md  bg-blue-600 rounded-sm'>Client</button>
        </div>


        <div onClick={() => { setIsMobile(!isMobile) }} className=' md:hidden'>
          <FontAwesomeIcon icon={faBars} size='150px' />
        </div>
      </div>

      <div className={`py-6 ${isMobile?"flex ":"hidden"} bg-white w-full flex-col  fixed  top-20  z-20 `}>
        <div className=' flex flex-col px-16 gap-y-4'>
          <Link to="/"> Home</Link>
          <Link to="/"> Service</Link>
          <Link to="/"> Client</Link>
          <Link to="/"> Blogs</Link>
          <Link to="/">Contact</Link>
        </div>
        <div className=' px-16 py-4'>
          <button className=' py-1 px-4 font-medium text-white shadow-md  bg-blue-600 rounded-sm'>Client</button>
        </div>
      </div>

    </>
  )
}

export default Navbar