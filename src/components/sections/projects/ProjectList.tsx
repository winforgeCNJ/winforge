import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";
import SwiperCore from "swiper";
import { useState, useRef, useEffect } from "react";
import { Projects } from "../../../consts/projects.ts";

const ProjectList = () => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperCore | null>(null);
  const [swiperWrapper, setSwiperWrapper] = useState<HTMLElement | null>(null);
  const [centeredSlide, setCenteredSlide] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const element = document.querySelector(".swiper-wrapper") as HTMLElement;
    setSwiperWrapper(element);
    swiperWrapper?.classList.add(
      "flex",
      "items-center",
      "transition-all",
      "duration-500",
    );

    const slideInCenter = document.querySelector(
      ".swiper-slide-active",
    ) as HTMLElement;
    setCenteredSlide(slideInCenter);
    centeredSlide?.classList.add("z-50");
  });

  const centerSlide = (id: number) => {
    console.log(swiperInstance?.realIndex);

    swiperInstance?.slideToLoop(id, 1000, true);
  };

  return (
    <Swiper
      onSwiper={(swiper: SwiperCore) => {
        setSwiperInstance(swiper);
      }}
      loop={true}
      simulateTouch={false}
      centeredSlides={true}
      slidesPerGroup={1}
      slidesPerView={1}
      watchSlidesProgress={true}
      speed={1000}
      breakpoints={{
        640: {
          slidesPerView: 3,
        },
        1300: {
          slidesPerView: 5,
        },
      }}
      className="flex h-[80vh] w-full items-center" /*relative mt-10 flex items-center  justify-center transition-all duration-500*/
    >
      <div className="swiper-wrapper">
        {Projects.map((item) => (
          <SwiperSlide
            key={item.id}
            style={{ display: "flex" }}
            className="h-full items-center"
          >
            {({ isActive, isPrev, isNext }) => (
              <div
                className={`flex w-full flex-col items-center justify-center transition-all duration-1000 ${isActive || isPrev || isNext ? "" : "opacity-60 blur-[2px]"} ${isPrev ? "mr-12 blur-[0.7px]" : ""} ${isNext ? "ml-12 blur-[0.7px]" : ""}`}
                key={item.id}
              >
                <img
                  src={item.image}
                  style={{ width: item.width }}
                  className={`transition-all duration-1000 ${isActive && (item.name === "Alpha Handel Group" || item.name === "JCB Desarrollos") ? "mb-20 scale-x-[1.7] scale-y-[2]" : isActive ? "mb-20 scale-[2] cursor-pointer" : "mb-4"} ${isPrev ? "mb-10 scale-[1.4] cursor-pointer" : ""} ${isNext ? "mb-10 scale-[1.4] cursor-pointer" : ""} `}
                  onClick={
                    isActive || isNext || isPrev
                      ? () => centerSlide(item.id)
                      : undefined
                  }
                />
                <p
                  className={`text-center text-white transition-all duration-1000 ${isActive ? "w-[200px] text-2xl" : ""} ${isPrev ? "w-36 text-xl" : ""} ${isNext ? "w-36 text-xl" : ""} ${isActive || isPrev || isNext ? "" : "w-44"}`}
                >
                  {item.name}
                </p>
              </div>
            )}
          </SwiperSlide>
        ))}
      </div>
    </Swiper>
  );
};

export default ProjectList;

{
  /*
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
      */
}
