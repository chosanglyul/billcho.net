'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState, useEffect, useRef } from 'react';

import Dropdown from '@/components/dropdown';
import profileData from '@/interfaces/profile';

const Header: React.FC = () => {
  const pathname = usePathname();
  const buttonRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    setIsActive(false);
  }, [pathname]);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (buttonRef.current?.contains(event.target as Node)) {
        setIsActive(prevState => !prevState);
      } else {
        setIsActive(false);
      }
    };

    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  if (pathname === '/') return null;

  const linkStyle = 'hover:text-gray-600 dark:hover:text-gray-400';

  return (
    <header>
      <div className='max-w-4xl mx-auto p-4'>
        <nav className='max-sm:hidden flex justify-between items-center'>
          <h1 className='text-2xl'><Link href="/">{profileData.name}</Link></h1>
          <div className='flex items-center gap-4'>
            <Link href="/about" className={linkStyle}>About</Link>
            <Link href="/publications" className={linkStyle}>Publications</Link>
          </div>
        </nav>

        <nav className='sm:hidden'>
          <Dropdown
            title={
              <h1 className='text-2xl'><Link href="/">{profileData.name}</Link></h1>
            }
            button={
              <div
                ref={buttonRef}
                className={`transition duration-300 cursor-pointer ${(isActive ? 'rotate-90' : '')} dark:fill-white`}
              >
                <svg width="30" height="20" viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg">
                  <rect y="0" width="30" height="2" rx="1"/>
                  <rect y="9" width="30" height="2" rx="1"/>
                  <rect y="18" width="30" height="2" rx="1"/>
                </svg>
              </div>
            }
            isActive={isActive}
          >
            <div className='flex flex-col gap-3 mt-3'>
              <Link href="/about" className={linkStyle}>About</Link>
              <Link href="/publications" className={linkStyle}>Publications</Link>
            </div>
          </Dropdown>
        </nav>
      </div>
    </header>
  );
};

export default Header;