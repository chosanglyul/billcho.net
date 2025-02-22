import profileData from '@/public/profile.json';
import styles from '@/styles/publication.module.css';
import Publication, { PublicationData } from '@/components/publication';

const publications: PublicationData[] = profileData.publications.reverse();

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.h1}>Publications</h1>

      {publications.map((pub) => ( <Publication pub={ pub } key={ pub.id }/> ))}
    </main>
  );
}