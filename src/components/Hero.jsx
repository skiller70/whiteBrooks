import React from 'react'
import whiteB from "/whiteB.mp4"
function Hero() {
    return (
        <div className=' relative aspect-[2/1]  overflow-hidden w-[100%]'>
            <video autoPlay loop muted >
                <div className=' text-2xl z-20 mt-16'>
                    asdhasjdhj
                </div>
                <source src={whiteB} type="video/mp4" />

            </video>
        </div>
    )
}

export default Hero