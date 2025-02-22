import "./globals.css";
import type { Metadata } from 'next';
import profileData from '@/public/profile.json';
import Header from '@/components/header';
import Footer from '@/components/footer';

interface LayoutProps {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: profileData.name,
  description: profileData.description,
  icons: {
    icon: profileData.favicon,
  },
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