import React from 'react'
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const Main = () => {
  return (
    <section className="row_main" id='home'>
        <div className="container">
            <div className="left"   data-aos="fade-right"
     data-aos-duration="2000">
                <h1>Solid for agencies </h1>
                <h4>Our company is a leading manufacturer of secure armored doors, fire-resistant doors,<br /> X-ray doors, soundproof doors, and bulletproof doors. We are committed to providing high-quality and innovative products to our customers.</h4>
            </div>
            <div className="right" data-aos="fade-left"
     data-aos-duration="2000">
          <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://live.staticflickr.com/65535/53190458794_6a3b6be388_o.jpg" alt='#'/></SwiperSlide>
        <SwiperSlide><img src="https://live.staticflickr.com/65535/53190458859_b11ea35f6b_o.png" alt='#'/></SwiperSlide>
        <SwiperSlide><img src="https://live.staticflickr.com/65535/53190657741_8a98b4621e_o.png" alt='#'/></SwiperSlide>
      </Swiper>
            </div>
          <a href="#about" class="go-down">
      <div className='down'>
          <i class="uil uil-angle-double-down"></i>
      </div>
        </a>
        </div>
    </section>
  )
}

export default Main