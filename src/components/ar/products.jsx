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
                <h3>المنتجات</h3>
                <div className='shape'></div>
            </div>
          <div className='conatiner_flex'>
              <div className="left">
                <h3>الابواب المقاومة للحريق</h3>
                <p>نقدم مجموعة كاملة من الأبواب المعدنية المقاومة للحريق بالعديد من المقاسات القياسية مع مجموعة متنوعة من الحشو الداخلي مثل (الصوف الصخري - البوريثان)</p>
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
        <SwiperSlide><img src="https://live.staticflickr.com/65535/53190657741_8a98b4621e_o.png" alt='#'/></SwiperSlide>
        <SwiperSlide><img src="https://live.staticflickr.com/65535/53190458884_7f26e660c5_o.jpg" alt='#'/></SwiperSlide>
      </Swiper>
              </div>
          </div>
          <div className='conatiner_flex'>
              <div className="left">
                <h3>الأبواب المصفحه</h3>
                <p>الفخامة هي اساس افضل أبواب Dierre's. إن إنتاج كل التفاصيل والبحث فيها هي ميزة تتيح لنا المرونة، ولكن أيضًا الدقة في العناية التي نضعها في كل التفاصيل. إن الجمع بين كل ميزة أمان يوفر خطًا متقدمًا حقًا. الحجم المعماري 
103 x 217 cm
حجم الغالق 
92 x 210 cm
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
        <SwiperSlide><img src="https://live.staticflickr.com/65535/53190458794_6a3b6be388_o.jpg" alt='#'/></SwiperSlide>
        <SwiperSlide><img src="https://live.staticflickr.com/65535/53190458784_4e0413dc18_o.jpg" alt='#'/></SwiperSlide>
        <SwiperSlide><img src="https://live.staticflickr.com/65535/53190197782_ca08c1561c_o.jpg" alt='#'/></SwiperSlide>
      </Swiper>
              </div>
          </div>
          <div className='conatiner_flex'>
              <div className="left">
                <h3>X-ray أبواب الأشعة
</h3>
                <p>تقدم فرانس ميتال مجموعة كاملة من الأبواب المبطنة بمادة الرصاص عالية الجودة والتي تمتص الإشعاع بشكل موثوق في المباني الحساسة مثل المستشفيات والأمكنة
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
        <SwiperSlide><img src="https://live.staticflickr.com/65535/53190849260_4d8809313b_o.jpg" alt='#'/></SwiperSlide>
        <SwiperSlide><img src="https://live.staticflickr.com/65535/53191021138_e0a3525023_o.jpg" alt='#'/></SwiperSlide>
      </Swiper>
              </div>
          </div>
          <div className='conatiner_flex'>
              <div className="left">
                <h3>أبواب استانليس تيل</h3>
                <p>أبواب استانليس تيل مصنوعة بتقنية الفولاذ المقاوم للصدأ ليكون اختياراً مثالياً وانيقاً للعديد من المباني التجارية والمؤسسات عالية الطراز</p>
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
        <SwiperSlide><img src="https://live.staticflickr.com/65535/53190458804_63ebceb2f4_o.jpg" alt='#'/></SwiperSlide>
        <SwiperSlide><img src="https://live.staticflickr.com/65535/53190849515_a4af66b58c_o.png" alt='#'/></SwiperSlide>
      </Swiper>
              </div>
          </div>
          <div className='conatiner_flex'>
              <div className="left">
                <h3>أبواب عازلة الصوت</h3>
                <p>تستخدم فرانس ميتال أحدث التقنيات في امتصاص الأصوات لتكون الحل الأمثل للضوضاء في أي مبنى خاصة الفنادق والمكاتب</p>
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
        <SwiperSlide><img src="https://live.staticflickr.com/65535/53191021083_604ea2ed51_o.jpg" alt='#'/></SwiperSlide>
        <SwiperSlide><img src="/images/b_43-db-ei-120-acoustic-door-sebino-chisure-540697-relcde2415c.webp" alt='#'/></SwiperSlide>
      </Swiper>
              </div>
          </div>
          <div className='conatiner_flex'>
              <div className="left">
                <h3>الابواب المقاومة للرصاص</h3>
                <p>الباب والاطار مقاومان للرصاص من المسوى 1 إلى المستوى 3 حيث يوفر نظام حماية فعالة ضد الاعتداء والتخريب ومجموعة واسعة من الأسلحة النارية مصنوع من الفولاذ عيار 12</p>
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
        <SwiperSlide><img src="https://live.staticflickr.com/65535/53190849305_afe97f1738_o.jpg" alt='#'/></SwiperSlide>
      </Swiper>
              </div>
          </div>
        </div>
    </section>
  )
}

export default Products