import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from "react-router-dom"
import Home from "../src/pages/Home"
import growFaster from "/growFaster.jpg"
import BlogPost from "../src/pages/BlogPost"

function Parent() {
    return (
        <div>
              <Navbar />
<div className='mt-20'>
<Routes>
<Route path='/' Component={Home}/>
<Route path='/blogs' Component={BlogPost}/>


          
         
            </Routes>
</div>

        </div>

    )
}

export default Parent