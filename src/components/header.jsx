import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";

// import required modules
import { Pagination, Navigation, Keyboard, Autoplay } from "swiper";
import image01 from '../../public/images/Untitled-1.png';
import image02 from '../../public/images/Untitled-1.png';

export default function App() {
  return (
    <div className=" w-full md:pl-[20%] p-5 relative">
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          dynamicBullets: true,
        }}
        loop={true}
        autoplay={{
          delay: 5000
        }}
        navigation={true}
        modules={[Keyboard, Navigation, Autoplay, Pagination]}
        className="mySwiper relative"
      >
        <SwiperSlide>
          <p className="text-[62px] font-bold text-white left-[5%] absolute top-[20%] text-stroke">стання пропозицiя:</p>
          <img src={image01} alt="..." />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image02} alt="..." />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image02} alt="..." />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image02} alt="..." />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image02} alt="..." />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image02} alt="..." />
        </SwiperSlide>

      </Swiper>
    </div>
  );
}
