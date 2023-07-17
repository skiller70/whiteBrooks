import React from 'react'
import { Link } from 'react-router-dom'
import whiteB from "/whiteB.png"

function Navbar() {
  return (
    <>
            <div className=' sticky top-0  z-50 h-20 text-white bg-gray-900 flex items-center px-16'>
                  <div className='flex-1/2 text-2xl cursor-pointer flex px-16'>
                  <img src={whiteB} width={80}/>
                  </div>  
              

                <div className='flex-1 flex  justify-evenly font-medium'>
                       <Link to="/"> Home</Link> 
                       <Link to="/"> Service</Link>
                       <Link to="/"> Client</Link>
                       <Link to="/"> Blogs</Link> 
                       <Link to="/">Contact</Link>          
                </div>

            
            <div className=' flex-1 flex  justify-center'>
                <button  className=' py-1 px-4 font-medium shadow-md  bg-blue-600 rounded-sm'>Client</button>
            </div>

            </div>


    </>
  )
}

export default Navbar