'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import profileData from '@/public/profile.json';

const Header: React.FC = () => {
  if (usePathname() === '/') { return null; }

  const name = profileData.name;

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="flex justify-between items-center max-w-4xl mx-auto p-4">
        <h1 className="text-2xl font-bold">
          <Link href="/">{name}</Link>
        </h1>
        <nav className="space-x-4">
          <Link href="/about" className="hover:text-gray-600">About</Link>
          <Link href="/publications" className="hover:text-gray-600">Publications</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;