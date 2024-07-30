import { IconBezier } from '@/components/icons/icon-bezier';
import { IconEarth } from '@/components/icons/icon-earth';
import { IconFilm } from '@/components/icons/icon-film';
import { IconWeb } from '@/components/icons/icon-web';
import { Tabs } from '@/components/ui/tabs';
import ServiceCard from './service-card';
import React from 'react';

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
    <div className="mb-[36rem] lg:mb-0  h-full px-0 lg:px-20 2xl:px-28 [perspective:1000px] relative flex flex-col lg:flex-row mx-auto w-full  ">
      <Tabs tabs={tabs} />
    </div>
  );
}
