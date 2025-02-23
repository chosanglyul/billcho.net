import profileData from '@/public/profile.json';
import Publication from '@/components/publication';
import { PublicationData } from '@/interfaces/types';
import styles from '@/styles/publication.module.css';

const publications: PublicationData[] = profileData.publications.reverse();

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.h1}>Publications</h1>

      {publications.map((pub) => ( <Publication pub={ pub } key={ pub.id }/> ))}
    </main>
  );
}