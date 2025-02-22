import Link from 'next/link';
import profileData from '@/public/profile.json';

const Footer: React.FC = () => {
  const name = profileData.name;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-black">
      <div className="flex justify-center items-center py-1 space-x-1 text-sm text-white">
        <span>© {currentYear} {name}. All Rights Reserved. Powered by</span>
        <Link href="https://nextjs.org" className="hover:text-gray-300 ml-1">Next.js</Link>
      </div>
    </footer>
  );
};

export default Footer;