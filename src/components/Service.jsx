import React from 'react'
import growFaster from "/growFaster.jpg"
import servicer2 from "/servicer2.jpg"
function Service() {
  return (
    <div className='my-20 relative'>

      <h1 className=' text-4xl   text-blue-950   font-semibold px-20'>Service</h1>
      <br />
      <br />
      <div className=' flex   px-20'>
        <div className=' flex '>
          <img src={growFaster} alt="" width={500} />

        </div>
        <div className=' flex-1  flex flex-col  justify-center px-16 '>
          <h1 className='text-3xl text-blue-950'> Self-managed Teams for Startups</h1>
          <br />
          <p className=' font-medium text-blue-950'>Hire a team of Developers, Designers, Quality Assurance Specialists, DevOps Engineers, and other experts you may need to work hand-by-hand on your digital product.</p>
          <br />
          <p className='text-blue-500 '>View Managed Teams →</p>
        </div>



      </div>

      <div className=' flex   px-20'>

        <div className=' flex-1  flex flex-col  justify-center px-16 '>
          <h1 className='text-3xl text-blue-950'> HubSpot Services for Marketing Agencies</h1>
          <br />
          <p className=' font-medium text-blue-950'>HubSpot services include Marketing Hub, Sales Hub, Service Hub, CMS Hub, Operations Hub, and Onboarding.</p>
          <br />
          <p className=' text-blue-500  font-medium'>View Managed Teams →</p>
        </div>
        <div className=' flex '>
          <img src={servicer2} alt="" width={500} />

        </div>


      </div>


    </div>
  )
}

export default Service