import profileData from '@/interfaces/profile';
import Publication from '@/components/publication';

export default function Home() {
  return (
    <main>
      <h1>Publications</h1>

      {profileData.publications.map((pub, index) => ( <Publication pub={ pub } key={ index }/> ))}
    </main>
  );
}