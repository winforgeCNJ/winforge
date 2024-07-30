import React from 'react'

type Tab = {
  value: string;
  content?: string | React.ReactNode | any;
}

export const Tabs = ({ tabs: propTabs } : { tabs: Tab[];}) => {
  return (
    <FadeInDiv
        tabs={tabs}
        className={'mt-20 lg:mt-0'}
      />
  )
}

export const FadeInDiv = ({
  className,
  tabs,
}: {
  className?: string;
  key?: string;
  tabs: Tab[];
}) => {
  const isActive = (tab: Tab) => {
    return tab.value === tabs[0].value;
  };
  return (
    <div className="relative w-full h-full ">
      {tabs.map((tab) => (
          {tab.content}
      ))}
    </div>
  );
};

