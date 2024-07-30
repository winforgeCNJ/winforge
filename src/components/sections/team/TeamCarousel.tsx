import IconArrowX from "@/components/icons/icon-arrow-x.astro";
import TeamCard from "./team-card.astro";
import { team } from "@/consts/team";
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import React, { useState, useEffect } from "react";

const TeamCarousel = () => {
  const [count, setCount] = useState(1);

  // const handlePrevClick = () => {
  //   setCount((prevCount) =>
  //     prevCount === 0 ? team.length - 1 : prevCount - 1
  //   );
  // };

  // const handleNextClick = () => {
  //   setCount((prevCount) =>
  //     prevCount === team.length - 1 ? 0 : prevCount + 1
  //   );
  // };

  // useEffect(() => {
  //   const prevButton = document.querySelector(
  //     ".custom-prev-button"
  //   ) as HTMLButtonElement;
  //   const nextButton = document.querySelector(
  //     ".custom-next-button"
  //   ) as HTMLButtonElement;
  //   prevButton.addEventListener("click", handlePrevClick);
  //   nextButton.addEventListener("click", handleNextClick);

  //   return () => {
  //     prevButton.removeEventListener("click", handlePrevClick);
  //     nextButton.removeEventListener("click", handleNextClick);
  //   };
  // }, []);

  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="bg-white z-50"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>

    // <section className="relative w-full max-lg:hidden flex items-center justify-center">
    //   <Swiper
    //     // modules={[Navigation]}
    //     // slidesPerView={1}
    //     // slidesPerGroup={1}
    //     // spaceBetween={0}
    //     // loop={false}
    //     // navigation={{
    //     //   nextEl: ".custom-next-button",
    //     //   prevEl: ".custom-prev-button",
    //     // }}
    //     // className="swiper-2 w-[50rem] mx-auto lg:mx-0 items-center justify-center"
    //   >
    //     {team.map((card) => (
    //       <SwiperSlide
    //         key={card.id}
    //         className="flex items-center justify-center"
    //       >
    //         <TeamCard card={card} count={count} />
    //       </SwiperSlide>
    //     ))}
    //   </Swiper>

    //   <button className="custom-prev-button hover:bg-primary lg:p-[0.4rem] lg:border-solid lg:border-[6px] bg-white rounded-full p-[0.04rem] border-solid border-4 border-black z-10 absolute top-1/2 -translate-y-1/2 left-4 lg:-left-8 transition-colors ">
    //     <IconArrowX />
    //   </button>
    //   <button className="custom-next-button hover:bg-primary lg:p-[0.4rem] lg:border-solid lg:border-[6px] bg-white rounded-full p-[0.04rem] border-solid border-4 border-black z-10 absolute top-1/2 -translate-y-1/2 right-4 lg:-right-8 transition-colors ">
    //     <IconArrowX right />
    //   </button>
    // </section>
  );
};

export default TeamCarousel;
