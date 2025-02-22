import "@/styles/globals.css";
import type { Metadata } from 'next';
import { headers } from 'next/headers';

import Header from '@/components/header';
import Footer from '@/components/footer';
import profileData from '@/public/profile.json';

interface LayoutProps {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: profileData.name,
  description: "Homepage of SangLyul Cho",
  icons: { icon: 'favicon.ico', },
};

const RootLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

export default RootLayout;