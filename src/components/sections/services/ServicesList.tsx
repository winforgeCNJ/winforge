import ServiceCard from "./service-card";
import { services } from "../../../consts/services";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import IconArrowX from "@/components/icons/icon-arrow-x";
import { useState, useRef } from "react";

function ServiceList() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const swiperRef = useRef<any>(null);
  const [count, setCount] = useState<number>(0);

  const handleSlideChange = () => {
    if (swiperRef.current) {
      setActiveIndex(swiperRef.current.realIndex);
    }
    if (count < 3) setCount(count + 1)
  };

  return (
    <>
      <Swiper
        id="service-list"
        className="relative mt-10 flex h-[90vh] w-full items-start justify-center transition-all duration-500"
        loop={true}
        speed={1000}
        slidesPerView={3}
        simulateTouch={false}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        centeredSlides={true}
        spaceBetween={50}
        onSlideChange={handleSlideChange}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {services.map((service, index) => (
          <SwiperSlide
            className={`z-0 flex h-[20rem] items-center justify-center pt-20 ${activeIndex === index ? "z-20" : ""} ${(activeIndex < 3 ? activeIndex + 1 : 0) === index ? "z-10" : ""}`}
          >
            {({ isActive, isNext, isPrev }) => (
              <ServiceCard
                key={service.title}
                service={service}
                className={`${isActive ? "-translate-x-16 scale-125" : ""} ${isNext ? "-translate-x-48" : ""} ${isPrev ? "translate-x-10" : ""} ${(count < 3) && (activeIndex < 2 ? activeIndex + 2 : activeIndex - 2) === index ? "-translate-x-40" : ""}`}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      <button className="absolute left-4 top-1/2 z-50 -translate-y-1/2 rounded-full border-4 border-solid border-black bg-white p-[0.04rem] transition-colors hover:bg-primary lg:border-[6px] lg:p-[0.4rem]">
        <IconArrowX right={false} className="swiper-button-prev" />
      </button>
      <button className="absolute right-4 top-1/2 z-50 -translate-y-1/2 rounded-full border-4 border-solid border-black bg-white p-[0.04rem] transition-colors hover:bg-primary lg:border-[6px] lg:p-[0.4rem]">
        <IconArrowX right className="swiper-button-next" />
      </button>
    </>
  );
}

export default ServiceList;

{
  /*${isActive ? "" : "scale-75"} ${isNext ? "-ml-20" : ""} ${isPrev ? "-mr-20" : ""}*/
}
