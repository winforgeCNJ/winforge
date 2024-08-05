import React, { useState } from "react";
import { cn } from "@/lib/cn";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

type Tab = {
  // title: string | React.ReactNode | any;
  value: string;
  content?: string | React.ReactNode | any;
};

export const Tabs = ({ tabs }: { tabs: Tab[] }) => {
  return (
    <Swiper
      className="relative z-0 h-full w-full"
      modules={[Navigation]}
      navigation
      slidesPerView={3}
      simulateTouch={false}
      loop={true}
      centeredSlides={true}
      speed={1000}
    >
      {tabs.map((tab, idx) => (
        <SwiperSlide
          key={tab.value}
          className={`relative -z-10 -ml-4 mt-20 lg:mt-0`}
        >
          {({ isActive, isPrev, isNext }) => (
            <div
              className={`flex min-w-[25rem] justify-center ${isActive ? "z-10 scale-100" : "scale-75"} ${isPrev ? "ml-10" : ""} ${isNext ? "-ml-10" : ""}`}
            >
              {tab.content}
            </div>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

/*  style={{
            scale: 1 - idx * 0.1,
            zIndex: -idx,
            opacity: idx < 3 ? 1 - idx * 0.1 : 0,
          }}
  */

{
  /*
           <Swiper>
            <SwiperSlide>
              {({ isActive }) => (
                <div>Current slide is {isActive ? 'active' : 'not active'}</div>
              )}
            </SwiperSlide>
          </Swiper>

          This is how the isActive is passed in the swiper documentation,

          How should i pass it in my code:

          {tabs.map((tab, idx) => (
                  <SwiperSlide
                    key={tab.value}
                    className={`lg:mt-0" left-0 top-0 mt-20 scale-50 ${isActive ? 'scale-100' : ""}`}
                  >
                    {tab.content}
                  </SwiperSlide>
            ))}
      
            */
}
