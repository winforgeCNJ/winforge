import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import 'swiper/css/bundle';
import { useState, useRef } from "react";

const ProjectList = () => {

  return (
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".card-button-next",
          prevEl: ".card-button-prev",
        }}
        centeredSlides={true}
        slideActiveClass="scale-110"
        loop={true}
        slidesPerView={3}
        className="relative mt-10 flex w-full items-start justify-center transition-all duration-500"
      >
        {[...Array(10)].map((item, index) => (
          <SwiperSlide key={index} style={{ width: '' }} className="flex overflow-hidden rounded-2xl">
            <div className="">
              <img
                src={"/assets/projects/Cong. Educ. Hum..webp"}
                className=""
                alt="placeholder image"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

  );
}

export default ProjectList

  
{/*
      <div
        className="flex w-[85vw] rounded-2xl items-center jus"
      >
        {[...Array(5)].map((item, index) => (
          <div className="overflow-hidden rounded-2xl hover:cursor-pointer"
            onClick={() => handleClick}
          >
            <img
              key={index}
              src={"../../../../public/assets/projects/Cong. Educ. Hum..webp"}
              className="h-full"
              alt="placeholder image"
            />
          </div>
        ))}
      </div>
      */}