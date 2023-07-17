import React from 'react'
import whiteB from "/whiteB.png"

function Footer() {
  return (
    <>

<div className=' bg-black text-white py-16'>
     {/* FOOTER LOGO */}
 <div className='flex px-16'>
<img src={whiteB} alt=""  width={150}/>
    
 </div>

 {/* FOOTER LOGO */}


 {/* FOOTER LINKS */}
 <div className='flex justify-between px-20 py-10 flex-col md:flex-row gap-y-6 md:gap-y-0  '>
<div>
<h1 className=' text-2xl font-semibold'>SERVICES </h1>
<br />
<ul><li>Self-managed Teams</li>
<li>HubSpot Services for Marketing Agencies</li>
<li>HubSpot Portfolio</li>
</ul>
<p>

</p>
<br />

</div>
<div>
<h1 className=' text-2xl font-semibold'>COMPANY</h1>
<br />
<p>Core Values</p>
<p>Social Responsibility</p>
<p>Board of Directors</p>
<p>Blog</p>
<p>History</p>
</div>
<div>
    <h1 className=' text-2xl font-semibold'>LEGAL</h1>
    <br />
    <p>Privacy Policy</p>
    <p>Terms & Conditions</p>
    <p>Cookie Policy</p>
</div>
<div>
    <h1 className=' text-2xl font-semibold'>OFFICES</h1>
</div>

 </div>
  {/* FOOTER LINKS */}
</div>




    </>
  )
}

export default Footer