import Link from 'next/link';
import styles from '@/styles/main.module.css';
import profileData from '@/public/profile.json';

const name: string = profileData.name;
const about: string = profileData.about;
const abstract: string = "My primary interest lies in machine learning (ML) and the acceleration of large-scale deep learning (DL) models. I have a diverse background in ML, systems, competitive programming, and web development. Having observed the escalating growth and complexity of DL models, I've developed an interest in tackling the challenges of efficient training and serving these models. To deepen my understanding and explore these interests further, I am double majoring in math.";

const Main: React.FC = () => {
  const arrowTitleStyle = `${styles.arrowTitleText}`;

  return (
    <main className='flex flex-col justify-center items-center w-full h-screen max-w-full p-0'>
      <div className={`absolute h-1/4 w-[5px] bg-black ${styles.bar}`}></div>
      <div className={`absolute top-1/4 right-1/2 h-[5px] bg-black ${styles.lRect}`}>
        <p className={arrowTitleStyle}>Machine Learning</p>
      </div>
      <div className={`absolute top-1/4 left-1/2 h-[5px] bg-black ${styles.rRect}`}>
        <p className={arrowTitleStyle}>Computer Systems</p>
      </div>

      <div className={styles.textContainer}>
        <h1 className='text-4xl'>{name}</h1>
        <p className={styles.about}>{about}</p>
        <p className={`max-sm:hidden ${styles.abstract}`}>{abstract}</p>
        <div className='flex justify-center gap-4 mt-4'>
          <Link href="/about">
            <button className={styles.button}>
              About
              <span className="ml-2">&#8594;</span>
            </button>
          </Link>
          <Link href="/publications">
            <button className={styles.button}>
              Publications
              <span className="ml-2">&#8594;</span>
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Main;