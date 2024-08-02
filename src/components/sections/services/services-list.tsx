import React, { useRef, useState } from 'react'; 
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Tabs } from '@/components/ui/tabs';
import ServiceCard from './service-card';


const Title = ({ title, icon }: { title: string; icon: React.ReactNode }) => (
  <div className="flex items-center gap-x-2 whitespace-nowrap">
    {icon}
    {title}
  </div>
);

const tabs = [
  {
    // title: <Title title="Diseño y Estrategia" icon={<IconBezier />} />,
    value: 'design-and-strategy',
    content: (
      <ServiceCard
        service={{ title: 'Desarrollo de Identidada visual y Comunicativa.' }}
      />
    ),
  },
  {
    // title: <Title title="Desarrollo Web" icon={<IconWeb />} />,
    value: 'development-web',
    content: <ServiceCard service={{ title: 'Desarrollo Web' }} />,
  },
  {
    // title: <Title title="Gestión Multimedia" icon={<IconEarth />} />,
    value: 'playground',
    content: <ServiceCard service={{ title: 'Gestión Multimedia' }} />,
  },
  {
    // title: <Title title="Producción de Contenido" icon={<IconFilm />} />,
    value: 'content',
    content: (
      <ServiceCard service={{ title: 'Producción de contenido audiovisual' }} />
    ),
  },
];

export function TabsDemo() {
  return (
    <Swiper navigation={true} modules={[Navigation]} className="h-full w-full absolute">
      <SwiperSlide className="mb-[36rem] px-0 lg:px-20 2xl:px-28 relative flex flex-col mx-auto">
        <Tabs tabs={tabs} />
      </SwiperSlide>
    </Swiper>
  );
}
