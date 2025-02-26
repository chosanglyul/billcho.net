import Link from 'next/link';
import styles from '@/styles/main.module.css';
import profileData from '@/public/profile.json';

const name: string = profileData.name;
const about: string = profileData.about;
const abstract: string = "My primary interest lies in machine learning (ML) and the acceleration of large-scale deep learning (DL) models. I have a diverse background in ML, systems, competitive programming, and web development. Having observed the escalating growth and complexity of DL models, I've developed an interest in tackling the challenges of efficient training and serving these models. To deepen my understanding and explore these interests further, I am double majoring in math.";

const LinkButton: React.FC<{ href: string, title: string }> = ({ href, title }) => {
  return (
    <Link href={href}>
      <button className='
        flex items-center px-6 py-3
        font-semibold bg-black dark:bg-white text-white dark:text-black
        border-0 rounded-full cursor-pointer transition-all duration-300
        hover:bg-gray-800 dark:hover:bg-gray-200 hover:scale-105
        focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50
        active:bg-gray-700 dark:active:bg-gray-300 active:scale-95
      '>{title}<span className='ml-2'>&#8594;</span></button>
    </Link>
  )
};

const Main: React.FC = () => {
  return (
    <main className='flex flex-col justify-center items-center w-full h-screen max-w-full p-0'>
      <div className={`absolute h-1/4 w-[5px] bg-black dark:bg-white ${styles.bar}`}></div>
      <div className={`absolute top-1/4 right-1/2 h-[5px] bg-black dark:bg-white ${styles.lRect}`}>
        <p className={`absolute bottom-0 left-1/2 text-2xl max-sm:text-base font-semibold text-center opacity-0 mb-4 ${styles.title} dark:text-white`}>Machine Learning</p>
      </div>
      <div className={`absolute top-1/4  left-1/2 h-[5px] bg-black dark:bg-white ${styles.rRect}`}>
        <p className={`absolute bottom-0 left-1/2 text-2xl max-sm:text-base font-semibold text-center opacity-0 mb-4 ${styles.title} dark:text-white`}>Computer Systems</p>
      </div>

      <div className={`flex flex-col justify-center items-center text-center max-w-4xl w-full p-5 opacity-0 absolute top-8 bottom-8 gap-3 ${styles.container}`}>
        <h1 className='text-4xl'>{name}</h1>
        <p className='font-semibold'>{about}</p>
        <p className='max-sm:hidden text-gray-600 dark:text-gray-400'>{abstract}</p>
        <div className='flex justify-center gap-4 mt-2'>
          <LinkButton href='/about' title='About' />
          <LinkButton href='/publications' title='Publications' />
        </div>
      </div>
    </main>
  );
};

export default Main;