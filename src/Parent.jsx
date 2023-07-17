import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from "react-router-dom"
import Home from "../src/pages/Home"
import growFaster from "/growFaster.jpg"

function Parent() {
    return (
        <div>

            <Navbar />
            <Home/>


        </div>

    )
}

export default Parent