import profileData from '@/public/profile.json';
import Publication from '@/components/publication';
import { PublicationData } from '@/interfaces/types';

const publications: PublicationData[] = profileData.publications.reverse();

export default function Home() {
  return (
    <main>
      <h1>Publications</h1>

      {publications.map((pub, index) => ( <Publication pub={ pub } key={ index }/> ))}
    </main>
  );
}