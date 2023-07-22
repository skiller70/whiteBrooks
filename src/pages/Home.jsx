import React, { useEffect, useState } from 'react'
import Hero from '../components/Hero'
import Service from '../components/Service'
import artBg from "/artBg.jpg"
import chArt from "/chArt.png"
import Footer from '../components/Footer'
import Blogs from '../components/Blogs'
import cloudG from "/cloudG.png"
import ggwp from "/ggwp.jpg"
import itService from "/itService.jpg"
import cloud from "/cloud.png"
import circle from "/circle.png"
import digitalLogo from "/digitalLogo.gif"
import Contact from '../components/Contact'
import OurClient from '../components/OurClient'


function Home() {
  const [scrollP, setScrollP] = useState(0)
  const handleScroll = () => {
    const scrollPosition = window.scrollY; // => scroll position
    setScrollP(scrollPosition)
  };
  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  console.log(scrollP)
  return (
    <>
      {/* <Hero />
      <Service /> */}
      <div style={{
        backgroundImage: `url(${artBg})`
      }} className={`h-[1100px] w-full  ${scrollP > 1447 ? "bg-local" : "bg-fixed delay-500"}  bg-cover  relative bg-left z-10  `} >


        {/* <h2 className=' absolute mt-16 text-white text-2xl'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque dolorum, fuga voluptatibus ipsam alias cum rem reiciendis magnam eligendi ex inventore eos quos illum hic suscipit maiores! Dicta, vero inventore.
        </h2> */}
        <img src={circle} alt="" width={200} className='mix-blend-color-dodge  animate-spin-slow  top-[43%] right-20 absolute ' />
        <img src={circle} alt="" width={200} className='mix-blend-color-dodge  animate-spin-slow top-[40%]  absolute left-32' />
        {/* <div className=' absolute bottom-0  flex justify-center w-[100%]  delay-700'>
          <img src={digitalLogo}  width={700} />
        </div> */}


      </div>

      <div className='    relative '>
        <img src={cloud} alt="" className=' z-20  absolute  w-[100%]' />
      </div>


      {/* <div  style={{ 
      backgroundImage: `url(${artBg})`
    }} className={`h-[500px] w-full  ${scrollP > 800 ?"bg-local":"bg-fixed delay-500"}  bg-cover  relative bg-left z-10  `}>
     
       
      </div> */}
      {/* <div className='  absolute z-10'>
          <image src={chArt} width={500}  height={500}/>
        </div> */}

      <div className={` w-[100%]   h-[170vh] ${scrollP > 1800 ? " bg-cover bg-local" : "bg-fixed  bg-cover bg-left"} bg-transparent  bg-cover   `} style={{
        backgroundImage: `url(${itService})`
      }}>

      </div>

      <div className=' '>
        <OurClient />
      </div>
      <Blogs />
      <Service />
      <Contact />
      <Footer />
    </>
  )
}

export default Home