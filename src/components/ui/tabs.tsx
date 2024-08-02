import React, { useState } from 'react';
import { cn } from '@/lib/cn';

type Tab = {
  // title: string | React.ReactNode | any;
  value: string;
  content?: string | React.ReactNode | any;
};

export const Tabs = ({
  tabs,
  contentClassName,
}: {
  tabs: Tab[];
  contentClassName?: string;
}) => {
  return (
    
    <div className="relative w-full h-full ">
      {tabs.map((tab, idx) => (
        <div
          key={tab.value}
          style={{
            scale: 1 - idx * 0.1,
            zIndex: -idx,
            opacity: idx < 3 ? 1 - idx * 0.1 : 0,
          }}
          className={cn('w-full h-full absolute top-0 left-0 mt-20 lg:mt-0')}
        >
          {tab.content}
        </div>
      ))}
    </div>
  );
};
