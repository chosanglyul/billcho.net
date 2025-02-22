'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import React, { useState, useEffect, useRef } from 'react';

import styles from '@/styles/header.module.css';
import profileData from '@/public/profile.json';

const name = profileData.name;

const Header: React.FC = () => {
  const pathname = usePathname();
  const [isActive, setIsActive] = useState(false);

  const buttonRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

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
      /* else if (!dropdownRef.current?.contains(event.target as Node)) {
        setIsActive(false);
      }*/
    };

    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  if (pathname === '/') { return null; }

  return (
    <header className={styles.header}>
      <div className={styles.div}>
        <h1 className={styles.h1}><Link href="/">{name}</Link></h1>
        <div className='desktop-only'>
          <nav className={`${styles.nav}`}>
            <Link href="/about" className={styles.link}>About</Link>
            <Link href="/publications" className={styles.link}>Publications</Link>
          </nav>
        </div>
        <div className='mobile-only'>
          <nav className={`${styles.nav}`}>
            <div
              ref={buttonRef}
              className={`${(isActive ? styles.dropdownButtonActive : styles.dropdownButton)}`}
            >
              <Image src="/hamburger.svg" alt="Menu" className={styles.image} width="40" height="30" />
            </div>
            <div
              ref={dropdownRef}
              className={`${(isActive ? styles.dropdownContentActive : styles.dropdownContent)}`}
            >
              <Link href="/about" className={styles.link}>About</Link>
              <Link href="/publications" className={styles.link}>Publications</Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;