import { Tabs } from "@/components/ui/tabs2";
import ServiceCard from "./service-card";
import React from "react";

const Title = ({ title, icon }: { title: string; icon: React.ReactNode }) => (
  <div className="flex items-center gap-x-2 whitespace-nowrap">
    {icon}
    {title}
  </div>
);

const tabs = [
  {
    value: "design-and-strategy",
    content: (
      <ServiceCard
        service={{ title: "Desarrollo de Identidada visual y Comunicativa." }}
      />
    ),
  },
  {
    value: "development-web",
    content: <ServiceCard service={{ title: "Desarrollo Web" }} />,
  },
  {
    value: "playground",
    content: <ServiceCard service={{ title: "Gestión Multimedia" }} />,
  },
  {
    value: "content",
    content: (
      <ServiceCard service={{ title: "Producción de contenido audiovisual" }} />
    ),
  },
];

export function TabsDemo() {
  return (
    <div className="relative mx-auto mb-[36rem] flex h-full w-full flex-col px-0 [perspective:1000px] lg:mb-0 lg:flex-row lg:px-20 2xl:px-28">
      <Tabs tabs={tabs} />
    </div>
  );
}
