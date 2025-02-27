'use client';

import React, { JSX, useState, useEffect, useRef } from 'react';

const Dropdown: React.FC<{
  title: JSX.Element,
  button: JSX.Element,
  isActive: boolean,
  children: React.ReactNode,
}> = ({ title, button, isActive, children }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<'auto' | number>(0);

  useEffect(() => {
    if (isActive) {
      setHeight(contentRef.current?.scrollHeight || 0);
      const timer = setTimeout(() => { setHeight('auto'); }, 300);
      return () => clearTimeout(timer);
    } else {
      if (height === 'auto') {
        setHeight(contentRef.current?.scrollHeight || 0);
        setTimeout(() => { setHeight(0); }, 10);
      } else {
        setHeight(0);
      }
    }
  }, [isActive, height]);

  return (
    <div className='flex flex-col w-full relative'>
      <div className='flex justify-between items-center'>
        {title}
        {button}
      </div>

      <div ref={contentRef} className='overflow-hidden'
        style={{
          height: height,
          opacity: height === 0 ? 0 : 1,
          overflow: height === 'auto' ? 'visible' : 'hidden',
          transition: 'height 300ms ease-in-out, opacity 300ms ease-in-out',
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Dropdown;