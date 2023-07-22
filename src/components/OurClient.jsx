import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-creative";
import "swiper/css";
import webDev from "/webDev.png"
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules"
import CORNELIANI from "/CORNELIANI.png"
import acceptPe from "/acceptPe.png"
import dhanplus from "/dhanplus.png"
import dhanvarsha from "/dhanvarsha.jpeg"

function OurClient() {
    return (
        <div className=' pb-20 '>


            <div id='ourClient' className=' text-center text-3xl   py-16'>Our Clients</div>


            <Swiper
            
                modules={[Autoplay]}
                autoplay={{
                    delay: 2000,
                        

                }}
                        loopedSlides={4}




                breakpoints={
                    {
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 60,
                        },
                    }

                }
            >

                <SwiperSlide >
                    <div className=' px-20 md:px-10 text-center justify-center w-[100%]' >
                        <img src={acceptPe} width={300} />
                    </div>



                </SwiperSlide>

                <SwiperSlide >
                    <div className=' px-20 md:px-10 text-center justify-center w-[100%]' >
                        <img src={dhanvarsha} width={300} />
                    </div>



                </SwiperSlide>

                <SwiperSlide >
                    <div className=' px-20 md:px-10 text-center justify-center w-[100%]' >
                        <img src={dhanplus} width={300} />
                    </div>



                </SwiperSlide>


                <SwiperSlide >
                    <div className=' px-20 md:px-10 text-center justify-center w-[100%]' >
                        <img src={CORNELIANI} width={300} />
                    </div>



                </SwiperSlide>





            </Swiper>




        </div>
    )
}

export default OurClient