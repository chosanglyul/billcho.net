import Link from 'next/link';

import styles from '@/styles/footer.module.css';
import profileData from '@/public/profile.json';

const Footer: React.FC = () => {
  const name = profileData.name;
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.div}>
        <span>© {currentYear} {name}. All Rights Reserved. Powered by</span>
        <Link href="https://nextjs.org" className={styles.link}>Next.js</Link>
      </div>
     </footer>
  );
};

export default Footer;