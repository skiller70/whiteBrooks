import React from 'react'
import growFaster from "/growFaster.jpg"
import servicer2 from "/servicer2.jpg"
import digital from "/digital.png"
import ecommerce from "/ecommerce.png"
import webDev from "/webDev.png"
import uiUx from "/uiUx.png"
import appDev from "/appDev.png"
function Service() {
  return (
    <div className='my-20 relative'>

      <h1 className=' text-4xl   text-blue-950   font-semibold px-8 md:px-20'>Service</h1>
      <br />
      <br />
      <div className=' flex  md:flex-row flex-col gap-y-6   px-8 md:px-20'>
        <div className=' flex '>
          <img src={ecommerce} alt="" width={500} />

        </div>
        <div className=' flex-1  flex flex-col justify-center md:px-16 '>
          <h1 className='text-3xl text-blue-950'> Ecommerce</h1>
          <br />
          <p className=' font-medium text-blue-950'>Is your online business struggling to reach its full potential?
            At White & Brooks, we specialize in boosting online businesses like yours through expert e-commerce services. Our team of professionals will work with you to enhance your online presence, optimize your sales channels, and maximize your revenue.
            With our comprehensive e-commerce services, you can take your online business to new heights. We offer a range of solutions including website design and development, SEO optimization, social media marketing, and more. Let us help you unlock the full potential of your online business.</p>
          <br />
          <p className='text-blue-500 '>View Managed Team s →</p>
        </div>



      </div>

      <div className=' flex  md:flex-row flex-col  my-5  mx-8 md:px-20'>

        <div className=' flex-1  flex flex-col  justify-center md:px-16 '>
          <h1 className='text-3xl text-blue-950'> App development</h1>
          <br />
          <p className=' font-medium text-blue-950'>Are you ready to bring your ideas to life and take your business to the next level?
          <br />
          <br />
            White & Brooks specializes in app development services that can transform your vision into a fully functional and user-friendly application. With our expertise, we can help you reach a wider audience and drive success for your business.
            Imagine having an app that not only showcases your brand but also enhances the user experience, increases customer engagement, and boosts your bottom line. With our app development services, you can turn this dream into reality.</p>
          <br />
          <p className=' text-blue-500 my-6 md:my-0  font-medium'>View Managed Teams →</p>
        </div>
        <div className=' flex '>
          <img src={appDev} alt="" width={500} />

        </div>


      </div>


      <div className=' flex  md:flex-row flex-col gap-y-6   px-8 md:px-20'>
        <div className=' flex '>
          <img src={webDev} alt="" width={500} />

        </div>
        <div className=' flex-1  flex flex-col justify-center md:px-16 '>
          <h1 className='text-3xl text-blue-950'> Web development</h1>
          <br />
          <p className=' font-medium text-blue-950'>Is your online presence lacking and in need of a boost?
            White & Brooks specializes in expert web development services that can elevate your business's digital footprint. Our team of experts will work with you to create a visually stunning and functional website that not only drives traffic but also boosts conversion rates.
            With our professional web development services, you can enhance your brand's online presence and take it to new heights. We cater to your unique goals and requirements, ensuring that your website reflects your brand identity and effectively communicates with your target audience.</p>
          <br />
          <p className='text-blue-500 '>View Managed Teams →</p>
        </div>



      </div>



      <div className=' flex  md:flex-row flex-col  my-16  mx-8 md:px-20'>

        <div className=' flex-1  flex flex-col  justify-center md:px-16 '>
          <h1 className='text-3xl text-blue-950'>Digital transformation services</h1>
          <br />
          <p className=' font-medium text-blue-950'>Is your business struggling to keep up with the digital age?
            White & Brooks specializes in digital transformation services, helping medium and large enterprises develop and execute a tailored strategy for successful digital adoption. We work closely with our clients to identify improvement opportunities in their current business processes and implement effective solutions.
            With our expertise, your business can stay competitive in today's fast-paced digital landscape. Our services range from strategic planning to action-oriented implementation, ensuring a seamless transition into the digital realm. Experience increased efficiency, improved customer engagement, and enhanced profitability through our comprehensive digital transformation services.
            Contact us today to discuss how we can help propel your business forward in the digital age.</p>
          <br />
          <p className=' text-blue-500 my-6 md:my-0  font-medium'>View Managed Teams →</p>
        </div>
        <div className=' flex '>
          <img src={digital} alt="" width={500} />

        </div>


      </div>



      <div className=' flex  md:flex-row flex-col gap-y-6   px-8 md:px-20'>
        <div className=' flex '>
          <img src={uiUx} alt="" width={500} />

        </div>
        <div className=' flex-1  flex flex-col justify-center md:px-16 '>
          <h1 className='text-3xl text-blue-950'> UI/UX design </h1>
          <br />
          <p className=' font-medium text-blue-950'>White & Brooks specializes in transforming your app ideas into high-quality prototypes and wireframes that meet the standards of modern business. Our team of experienced designers will work closely with you to understand your vision and create a user interface that is visually appealing, intuitive, and optimized for user experience.
            With our expertise in UI/UX design, we can help you bring your app ideas to life and ensure they meet the highest industry standards. Whether you are a start-up or an established business, our designs will help you stand out from the competition and attract more users to your app.</p>
          <br />
          <p className='text-blue-500 '>View Managed Teams →</p>
        </div>



      </div>


    </div>
  )
}

export default Service