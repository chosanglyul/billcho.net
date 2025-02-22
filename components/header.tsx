'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import styles from '@/styles/header.module.css';
import profileData from '@/public/profile.json';

const name = profileData.name;

const Header: React.FC = () => {
  if (usePathname() === '/') { return null; }

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.title}><Link href="/">{name}</Link></h1>
        <nav className={styles.nav}>
          <Link href="/about" className={styles.link}>About</Link>
          <Link href="/publications" className={styles.link}>Publications</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;