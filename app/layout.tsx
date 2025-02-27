import '@/styles/globals.css';

import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import Header from '@/components/header';
import Footer from '@/components/footer';
import profileData from '@/interfaces/profile';

export const metadata: Metadata = {
  title: profileData.name,
  description: `${profileData.name}: ${profileData.about}`,
  icons: { icon: 'favicon.ico', },
};

const inter = Inter({ subsets: ['latin'] });

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

export default RootLayout;