// 标签页组件

import { ReactNode, useState } from "react";

export interface TabsProps {
  tabs: {
    label: ReactNode;
    content?: ReactNode;
    weight?: number;
    callback?: () => void;
  }[];
  defaultActiveIndex?: number; // 默认激活的标签索引
  className?: string; // 自定义容器类名
  tabClassName?: string; // 自定义标签类名
  contentClassName?: string; // 自定义内容类名
}

export default function Tabs(props: TabsProps) {
  const { 
    tabs, 
    defaultActiveIndex = 0, 
    className = "", 
    tabClassName = "", 
    contentClassName = "" 
  } = props;
  
  const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);
  const onClick = (index: number) => {
    if (tabs[index].content) {
      setActiveIndex(index);
    }
    tabs[index].callback?.();
  }

  // 确保 tabs 数组不为空
  if (!tabs || tabs.length === 0) {
    return null;
  }

  const totalWeight = tabs.reduce((acc, tab) => acc + (tab.weight || 1), 0);

  return (
    <div className={`w-full ${className}`}>
      {/* 标签头部 */}
      <div className="flex">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => onClick(index)}
            style={{
              flexBasis: `${(tab.weight || 1) / totalWeight * 100}%`,
            }}
            className={`
              px-4 py-2 text-sm font-medium 
              transition-colors duration-200
              text-base-content border-b-2
              ${activeIndex === index 
                ? 'border-primary' 
                : 'border-neutral hover:border-primary'}
              ${tabClassName}
            `}
            aria-selected={activeIndex === index}
            role="tab"
          >
            {tab.label}
          </button>
        ))}
      </div>
      
      {/* 内容区域 */}
      <div className={`pt-4 ${contentClassName}`}>
        {tabs[activeIndex]?.content}
        {/* {
          tabs.map((tab, index) => (
            <div key={index} className={`${activeIndex === index ? 'block' : 'hidden'}`}>
              {tab.content}
            </div>
          ))
        } */}
      </div>
    </div>
  );
}
