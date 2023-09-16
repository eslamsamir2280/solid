import React from 'react'
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const Products = () => {
  return (
    <section className="row_products" id='Products'>
        <div className="container">
             <div className="main_title">
                <h3>Products</h3>
                <div className='shape'></div>
            </div>
          <div className='conatiner_flex'>
              <div className="left">
                <h3>Fire rated doors</h3>
                <p>France Metal offers a complete range of standard hollow metal doors in face sheet gauges ranging from 18 to 14 (1.25 mm to 2 mm).
France Metal has variety of core choices including honeycomb, polyurethane foam and temperature rise cores.</p>
              </div>
              <div className="right">
                 <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://live.staticflickr.com/65535/53190657741_8a98b4621e_o.png" loading='lazy' alt='#'/></SwiperSlide>
        <SwiperSlide><img src="https://live.staticflickr.com/65535/53190458884_7f26e660c5_o.jpg" loading='lazy' alt='#'/></SwiperSlide>
      </Swiper>
              </div>
          </div>
          <div className='conatiner_flex'>
              <div className="left">
                <h3>safety doors</h3>
                <p>Prestige is the heart of Dierre’s best doors.
Every detail is produced and researched, an advantage that allows us flexibility, but also rigor in the care we pay to every detail.
The combination of each safety feature offers a truly advanced line
Architectural size :  103 x 217 cm
Shutter size :  92x210 cm
</p>
              </div>
              <div className="right">
                 <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://live.staticflickr.com/65535/53190458794_6a3b6be388_o.jpg" loading='lazy' alt='#'/></SwiperSlide>
        <SwiperSlide><img src="https://live.staticflickr.com/65535/53190458784_4e0413dc18_o.jpg" loading='lazy' alt='#'/></SwiperSlide>
        <SwiperSlide><img src="https://live.staticflickr.com/65535/53190197782_ca08c1561c_o.jpg" loading='lazy' alt='#'/></SwiperSlide>
      </Swiper>
              </div>
          </div>
          <div className='conatiner_flex'>
              <div className="left">
                <h3>X-RAY Doors</h3>
                <p>Achieve effective radiation protection with the France Metal full line of high quality lead lined doors and frames. These openings accomplish the important task of reliably containing radiation in sensitive areas.</p>
              </div>
              <div className="right">
                 <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://live.staticflickr.com/65535/53190849260_4d8809313b_o.jpg" loading='lazy' alt='#'/></SwiperSlide>
        <SwiperSlide><img src="https://live.staticflickr.com/65535/53191021138_e0a3525023_o.jpg" loading='lazy' alt='#'/></SwiperSlide>
      </Swiper>
              </div>
          </div>
          <div className='conatiner_flex'>
              <div className="left">
                <h3>Stainless steel Doors</h3>
                <p>Stainless-Tech by France Metal gives architects and designers a sleek aesthetic option to satisfy today’s style preferences. The complete, high-quality stainless steel door and frame system is ideal for commercial, institutional, and high style environments.</p>
              </div>
              <div className="right">
                 <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://live.staticflickr.com/65535/53190458804_63ebceb2f4_o.jpg" loading='lazy' alt='#'/></SwiperSlide>
        <SwiperSlide><img src="https://live.staticflickr.com/65535/53190849515_a4af66b58c_o.png" loading='lazy' alt='#'/></SwiperSlide>
      </Swiper>
              </div>
          </div>
          <div className='conatiner_flex'>
              <div className="left">
                <h3>Acoustical Doors</h3>
                <p>Using the latest technology in light weight sound absorbing techniques, France Metal has developed acoustical assemblies to be the noise solution for any facility.</p>
              </div>
              <div className="right">
                 <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://live.staticflickr.com/65535/53191021083_604ea2ed51_o.jpg" loading='lazy' alt='#'/></SwiperSlide>
        <SwiperSlide><img src="/images/b_43-db-ei-120-acoustic-door-sebino-chisure-540697-relcde2415c.webp" loading='lazy' alt='#'/></SwiperSlide>
      </Swiper>
              </div>
          </div>
          <div className='conatiner_flex'>
              <div className="left">
                <h3>Armor Shield™</h3>
                <p>Level 1 through Level 3 bullet resisting door and frame (UL 752).
The Armor-Shield System provides cost-efficient readily available protection against assault and vandalism at vulnerable door openings</p>
              </div>
              <div className="right">
                 <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://live.staticflickr.com/65535/53190849305_afe97f1738_o.jpg" loading='lazy' alt='#'/></SwiperSlide>
      </Swiper>
              </div>
          </div>
        </div>
    </section>
  )
}

export default Products