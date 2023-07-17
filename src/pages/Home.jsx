import React, { useEffect, useState } from 'react'
import Hero from '../components/Hero'
import Service from '../components/Service'
import artBg from "/artBg.jpg"
import chArt from "/chArt.png"
import Footer from '../components/Footer'
import Blogs from '../components/Blogs'


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
      }} className={`h-[1410px] w-full  ${scrollP > 1447 ? "bg-local" : "bg-fixed delay-500"}  bg-cover  relative bg-left z-10  `} >
        <h2 className=' absolute mt-16 text-white text-2xl'>
          ssdfsd
        </h2>
        <div className='  absolute bottom-0'>
          <img src={chArt} />
        </div>


      </div>

      <div className=' bg-red-400 w-[100%] h-96'>

      </div>

      {/* <div  style={{ 
      backgroundImage: `url(${artBg})`
    }} className={`h-[500px] w-full  ${scrollP > 800 ?"bg-local":"bg-fixed delay-500"}  bg-cover  relative bg-left z-10  `}>
     
       
      </div> */}
      {/* <div className='  absolute z-10'>
          <image src={chArt} width={500}  height={500}/>
        </div> */}

      <div className=' bg-fixed h-[500px]' style={{
        backgroundImage: `url(${artBg})`
      }}>




      </div>
      <div className=' bg-slate-500  mt-[200px]  h-[500px]'>
        asdasd
      </div>
      <div className=' bg-slate-500  h-[500px]'>
        asdasd
      </div>
      <Blogs />
      <Service />

      <Footer />
    </>
  )
}

export default Home