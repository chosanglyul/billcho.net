import Link from 'next/link';

import profileData from '@/interfaces/profile';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <span>© {currentYear} {profileData.name}. All Rights Reserved.</span>

      <span className='max-sm:hidden'>
        {' '} Powered by {' '}
        <Link
          href='https://nextjs.org'
          className='hover:text-gray-100 dark:hover:text-gray-800'
          target='_blank' rel='noopener noreferrer'
        >Next.js</Link>
      </span>
     </footer>
  );
};

export default Footer;