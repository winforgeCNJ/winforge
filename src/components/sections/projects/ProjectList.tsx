import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
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
      modules={[Pagination]}
      pagination={{}}
      onSwiper={(swiper: SwiperCore) => {
        setSwiperInstance(swiper);
      }}
      loop={true}
      simulateTouch={true}
      centeredSlides={true}
      slidesPerGroup={1}
      slidesPerView={1}
      watchSlidesProgress={true}
      speed={1000}
      breakpoints={{
        768: {
          slidesPerView: 3,
          simulateTouch: false,
        },
        1280: {
          slidesPerView: 5,
          simulateTouch: false,
        },
      }}
      className="flex h-[60vh] w-full items-center lg:w-[90%] xl:w-[95%]" /*relative mt-10 flex items-center  justify-center transition-all duration-500*/
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
                className={`flex w-full flex-col items-center justify-center transition-all duration-1000 ${isActive || isPrev || isNext ? "" : "opacity-80 blur-[1.5px]"} ${isPrev ? "blur-[0.8px] xl:mr-12" : ""} ${isNext ? "blur-[0.8px] xl:ml-8" : ""}`}
                key={item.id}
              >
                <img
                  src={item.image}
                  style={{ width: item.width }}
                  className={`transition-all duration-1000 ${isActive && (item.name === "Alpha Handel Group" || item.name === "JCB Desarrollos") ? "mb-20 scale-x-[1.7] scale-y-[2]" : isActive ? "mb-16 scale-[2] cursor-pointer" : "mb-5"} ${isPrev ? "scale-[1.4] cursor-pointer" : ""} ${isNext ? "scale-[1.4] cursor-pointer" : ""} `}
                  onClick={
                    isActive || isNext || isPrev
                      ? () => centerSlide(item.id)
                      : undefined
                  }
                />
                <p
                  className={`text-center text-white transition-all duration-1000 ${isActive ? "w-[190px] text-2xl" : ""} ${isPrev ? "mt-6 w-[170px] text-xl" : ""} ${isNext ? "mt-6 w-[170px] text-xl" : ""} ${isActive || isPrev || isNext ? "" : "w-[136px]"}`}
                >
                  {item.name}
                </p>
              </div>
            )}
          </SwiperSlide>
        ))}
      </div>
      <style>{`
        .swiper-pagination-bullet {
            background-color: white;
            padding: 6px 6px;
            border: 3px solid black;
            box-shadow: 0px 1px 5px #444;
          }
          .swiper-pagination-bullet-active {
            background-color: #52af99;
          }
        @media (min-width: 768px) {
          .swiper-pagination-bullet {
            background-color: white;
            padding: 6.7px 6.7px;
            border: 3px solid black;
            box-shadow: 0px 1px 5px #444;
          }
          .swiper-pagination-bullet-active {
            background-color: #52af99;
          }
        }
      `}</style>
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
