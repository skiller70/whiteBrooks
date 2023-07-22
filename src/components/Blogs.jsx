import React from 'react'
import featured from "/featured.jpg"
import demon from "/demon.jpg"
import hubspot from "/hubspot.jpg"
import blogP from "/blogP.png"
import digitalT from "/digitalT.png"
import { Link } from 'react-router-dom'

function Blogs() {
    return (
        <div className=' p-16'>
            <h1 className=' text-3xl  text-center'> Our Latest Blog Post</h1>
            <br />
            <br />
            <br />
                
            <div className=' grid grid-cols-1 gap-6 md:grid-cols-3'>
                {/* GRID COLUMN */}
                <Link to="/blogs">
                <div className=' flex flex-col '>
                <img src={blogP} alt="" />
                <br />
                <h1 className=' text-2xl font-medium'>Embracing the Future of Mobile Applications</h1>
                <br />
                
                </div>
                </Link>
                {/* GRID COLUMN */}
                {/* GRID COLUMN */}
                <Link to="/blogs">
                <div className=' flex flex-col '>
                <img src={digitalT} alt="" />
                <br />
                <h1 className=' text-2xl font-medium'>Digital Transformation: Unlocking the Power of Technology</h1>
                <br />
                
                </div>
                </Link >
                {/* GRID COLUMN */}
                {/* GRID COLUMN */}
                <Link to="/blogs">
                <div className=' flex flex-col '>
                <img src={hubspot} alt="" />
                <br />
                <h1 className=' text-2xl font-medium'>HubSpot and Slack integration Communication Magic</h1>
                <br />
                <p className=' '>Ever feel like managing your business communication is like juggling flaming torches.</p>
                </div>
                </Link>
                {/* GRID COLUMN */}
            </div>


        </div>
    )
}

export default Blogs