import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import  OrderImage  from "../image/OrderImage.png";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "../CSS/swiper.css"

const  Carousel = () => {
  return (
    <Swiper className="mySwiper"
    loop={true}
    slidesPerView={1}
    autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
    pagination={{
       clickable: true,
     }}
      navigation={true}
      modules={[Autoplay,Pagination, Navigation]}
    >
      <SwiperSlide className="SlideForm"> 
        <a href="#ordermedicine" className=" page-scroll">
        <img src={OrderImage} className="img-responsive" alt="" />
        </a>
        
      </SwiperSlide>
      <SwiperSlide className="SlideForm">Slide 2</SwiperSlide>
      <SwiperSlide className="SlideForm">Slide 3</SwiperSlide>
      <SwiperSlide className="SlideForm">Slide 4</SwiperSlide>
      <SwiperSlide className="SlideForm">Slide 5</SwiperSlide>
      <SwiperSlide className="SlideForm">Slide 6</SwiperSlide>
    </Swiper>
  );
}

export default Carousel;
