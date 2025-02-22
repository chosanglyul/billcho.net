import "./globals.css";
import type { Metadata } from 'next';
import { GetServerSideProps } from 'next';
import profileData from '@/public/profile.json';
import Header from '@/components/header';
import Footer from '@/components/footer'; 

interface LayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: profileData.name,
  description: profileData.description,
  icons: {
    icon: profileData.favicon,
  },
};

interface Props {
  isHomepage: boolean;
};

const getServerSideProps: GetServerSideProps = async (context) => {
  const { req } = context;
  const currentUrl = req.url;
  const isHomepage = currentUrl === '/';

  return {
    props: {
      isHomepage,
    },
  };
};

const RootLayout: React.FC<LayoutProps & Props> = ({ children, isHomepage }) => {
  return (
    <html lang="en">
      <body>
        {!isHomepage && <Header/>}
        {children}
        <Footer/>
      </body>
    </html>
  );
}

export default RootLayout;