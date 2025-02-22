import Link from 'next/link';
import styles from '@/styles/main.module.css';
import profileData from '@/public/profile.json';

const name: string = profileData.name;
const about: string = "Co-designing efficient deep learning algorithm and software.";
const abstract: string = "My primary interest lies in machine learning (ML) and the acceleration of large-scale deep learning (DL) models. I have a diverse background in ML, systems, competitive programming, and web development. Having observed the escalating growth and complexity of DL models, I've developed an interest in tackling the challenges of efficient training and serving these models. To deepen my understanding and explore these interests further, I am double majoring in math.";

const Main: React.FC = () => {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.bar}></div>
        <div className={`${styles.arrow} ${styles.lRect}`}>
          <p className={styles.arrowTitleText}>Machine Learning</p>
        </div>
        <div className={`${styles.arrow} ${styles.rRect}`}>
          <p className={styles.arrowTitleText}>Computer Systems</p>
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{name}</h1>
          <p className={styles.about}>{about}</p>
          <p className={`desktop-only ${styles.abstract}`}>{abstract}</p>
          <div className={styles.buttonContainer}>
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
      </div>
    </main>
  );
};

export default Main;