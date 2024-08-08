import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

type Tab = {
  title: string | React.ReactNode | any;
  icon: React.ReactNode;
  titleOnly: string;
  value: string;
  content?: string | React.ReactNode | any;
};

export const Tabs = ({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
}: {
  tabs: Tab[];
  containerClassName?: string;
  activeTabClassName?: string;
  tabClassName?: string;
  contentClassName?: string;
}) => {
  const [active, setActive] = useState<Tab>(propTabs[0]);
  const [tabs, setTabs] = useState<Tab[]>(propTabs);

  const moveSelectedTabToTop = (idx: number) => {
    const newTabs = [...propTabs];
    const selectedTab = newTabs.splice(idx, 1);
    newTabs.unshift(selectedTab[0]);
    setTabs(newTabs);
    setActive(newTabs[0]);
  };

  const [hovering, setHovering] = useState(false);

  return (
    <>
      <div
        className={cn(
          "no-visible-scrollbar mobile:gap-x-6 relative flex flex-row items-start justify-start gap-x-3 overflow-auto max-min-1130:min-w-[40%] max-lg:justify-center sm:overflow-visible lg:mt-8 lg:max-w-[95%] lg:flex-col lg:gap-y-6 lg:max-min-1130:-ml-6 min-1130:w-[70%] xl:mt-12 xl:scale-105 2xl:scale-110",
          containerClassName,
        )}
      >
        {propTabs.map((tab, idx) => (
          <button
            key={tab.title}
            onClick={() => {
              moveSelectedTabToTop(idx);
            }}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className={cn(
              "relative rounded-full px-4 py-2 text-lg font-medium hover:bg-primary/25 max-lg:mb-3",
              tabClassName,
            )}
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {active.value === tab.value && (
              <motion.div
                layoutId="clickedbutton"
                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                className={cn(
                  "absolute inset-0 rounded-full bg-primary shadow-lg shadow-primary/20",
                  activeTabClassName,
                )}
              />
            )}

            <span
              className={`${
                active.value === tab.value ? "text-white" : "text-gray-300"
              } relative flex items-center transition-colors hover:text-white max-lg:hidden`}
            >
              {tab.title}
            </span>
            <span
              className={`${
                active.value === tab.value ? "text-white" : "text-gray-300"
              } mobile:scale-105 relative flex items-center transition-colors hover:text-white lg:hidden`}
            >
              {tab.icon}
            </span>
          </button>
        ))}
      </div>
      <div className="mt-3 flex items-center justify-center text-xl font-medium lg:hidden">
        <span
          className={`relative rounded-full bg-primary px-10 py-3 text-white transition-colors`}
        >
          {active.titleOnly}
        </span>
      </div>
      <FadeInDiv
        tabs={tabs}
        active={active}
        key={active.value}
        hovering={hovering}
        className={cn("mt-20 lg:-mt-16", contentClassName)}
      />
    </>
  );
};

export const FadeInDiv = ({
  className,
  tabs,
  hovering,
}: {
  className?: string;
  key?: string;
  tabs: Tab[];
  active: Tab;
  hovering?: boolean;
}) => {
  const isActive = (tab: Tab) => {
    return tab.value === tabs[0].value;
  };
  return (
    <div className="relative h-full w-full md:max-lg:flex md:max-lg:justify-center xl:scale-110 2xl:scale-125">
      {tabs.map((tab, idx) => (
        <motion.div
          key={tab.value}
          layoutId={tab.value}
          style={{
            scale: 1 - idx * 0.1,
            top: idx * -25,
            zIndex: -idx,
            opacity: idx < 3 ? 1 - idx * 0.1 : 0,
          }}
          animate={{
            y: isActive(tab) ? [0, 40, 0] : 0,
          }}
          className={cn(
            "absolute md:max-lg:left-10 left-0 top-0 h-full w-full md:max-lg:w-[90%]",
            className,
          )}
        >
          {tab.content}
        </motion.div>
      ))}
    </div>
  );
};
