import Link from 'next/link';

import profileData from '@/public/profile.json';

const Footer: React.FC = () => {
  const name = profileData.name;
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <span>© {currentYear} {name}. All Rights Reserved.</span>

      <span className='desktop-only'>
        {' '} Powered by {' '}
        <Link href='https://nextjs.org'
              className='hover:text-gray-100 dark:hover:text-gray-800'
              target='_blank' rel='noopener noreferrer'
        >Next.js</Link>
      </span>
     </footer>
  );
};

export default Footer;