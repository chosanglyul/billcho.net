import Link from 'next/link';
import Image from 'next/image';

import { AiOutlineUser } from 'react-icons/ai';
import { SiGooglescholar } from 'react-icons/si';
import { IoLocationSharp, IoMailSharp } from 'react-icons/io5';
import { FaGithub, FaLinkedin, FaTwitter, FaFileDownload, FaGraduationCap } from 'react-icons/fa';

import profileData from '@/public/profile.json';
import Publication from '@/components/publication';
import { PublicationData } from '@/interfaces/types';

interface Education {
  degree: string;
  school: string;
  duration: string;
  gpa: string;
};

interface Work {
  title: string;
  position: string;
  period: string;
  link?: string;
  works?: string[];
};

interface Award {
  name: string;
  place: string;
  year: string;
  link?: string;
  info?: string;
};

interface Language {
  language: string;
  proficiency: string;
};

const name: string = profileData.name;
const email: string = profileData.email;

const awards: Award[] = profileData.awards;
const works: Work[] = profileData.works.reverse();
const languages: Language[] = profileData.languages;
const educations: Education[] = profileData.education.reverse();
const publications: PublicationData[] = profileData.publications.reverse();

export default function Home() {
  return (
    <main>
      <h1>About</h1>

      <div className='flex flex-col gap-6'>
        <Image src='/chosanglyul.jpg' alt='Profile' className='sm:hidden w-36 h-48 rounded-md' width={144} height={192} />

        <div className='flex items-center justify-between gap-6'>
          <div className='flex flex-col gap-1 w-full'>
            <p className='flex items-center gap-2'>
              <AiOutlineUser className='text-gray-700 dark:text-gray-300' />
              <span>{name}</span>
              <span className='text-gray-600 dark:text-gray-400 text-sm'>Bill Cho</span>
            </p>
            <p className='flex items-center gap-2'>
              <IoLocationSharp className='text-gray-700 dark:text-gray-300' />
              <span>Seoul, South Korea</span>
            </p>
            <p className='flex items-center gap-2'>
              <IoMailSharp className='text-gray-700 dark:text-gray-300' />
              <a href={`mailto:${email}`} className='text-blue-500 hover:underline'>{email}</a>
            </p>
  
            {educations.map((edu, index) => (
              <div key={index} className='flex items-center gap-2 w-full'>
                <FaGraduationCap className='text-gray-700 dark:text-gray-300' />
                <div className='flex max-sm:flex-col justify-between sm:items-center sm:gap-2 w-full'>
                  <div className='flex items-center gap-2'>
                    <div className='text-left'>
                      <p className='font-semibold'>{edu.degree}</p>
                      <p className='text-gray-600 dark:text-gray-400 text-sm'>{edu.duration}</p>
                    </div>
                  </div>
                  <div className='sm:text-right max-sm:text-left'>
                    <p>{edu.school}</p>
                    <p className='text-gray-600 dark:text-gray-400 text-sm'>{edu.gpa}</p>
                  </div>
                </div>
              </div>
            ))}

            <div className='flex items-center gap-4 mt-2 text-2xl'>
              <Link href='https://github.com/chosanglyul' target='_blank' rel='noopener noreferrer'>
                <FaGithub className='text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white' />
              </Link>
              <Link href='https://www.linkedin.com/in/sanglyul-cho-69b553246' target='_blank' rel='noopener noreferrer'>
                <FaLinkedin className='text-blue-500 hover:text-blue-700' />
              </Link>
              <Link href='https://x.com/_billcho' target='_blank' rel='noopener noreferrer'>
                <FaTwitter className='text-blue-400 hover:text-blue-600' />
              </Link>
              <Link href='https://scholar.google.com/citations?user=hwR7WVoAAAAJ' target='_blank' rel='noopener noreferrer'>
                <SiGooglescholar className='text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white' />
              </Link>
              <Link href='/cv.pdf' target='_blank' rel='noopener noreferrer'>
                <FaFileDownload className='text-red-500 hover:text-red-700' />
              </Link>
            </div>
          </div>

          <Image src='/chosanglyul.jpg' alt='Profile' className='max-sm:hidden w-36 h-48 rounded-md' width={144} height={192} />
        </div>
        <div>
          My primary interest lies in machine learning (ML) and the acceleration of large-scale deep learning (DL) models. I have a diverse background in ML, systems, competitive programming, and web development. Having observed the escalating growth and complexity of DL models, I've developed an interest in tackling the challenges of efficient training and serving these models. To deepen my understanding and explore these interests further, I am double majoring in math.
        </div>
      </div>

      <hr />

      <h2>Publications</h2>

      <div className='flex flex-col gap-4'>
        {publications.map((pub, index) => ( <Publication pub={ pub } key={ index }/> ))}
      </div>

      <hr />

      <h2>Work Experience</h2>

      <div className='flex flex-col gap-4'>
        {works.map((work, index) => (
          <div key={index} className='flex flex-col gap-2'>
            <div className='flex max-sm:flex-col gap-2 sm:items-center'>
              <h3>{work.link ? 
                <a href={work.link} target='_blank' rel='noopener noreferrer' className='hover:underline'>{work.title}</a> :
                <>{work.title}</>
              }</h3>
              <p className='text-gray-600 dark:text-gray-400 text-sm'>{work.period}</p>
            </div>
            <p className='text-gray-600 dark:text-gray-400 text-sm'>{work.position}</p>

            <ul className='list-disc list-inside'>
              {work.works?.map((item, idx) => (<li key={idx}>{item}</li>))}
            </ul>
          </div>
        ))}
      </div>

      <hr />

      <h2>Honors and Awards</h2>

      <div className='flex flex-col gap-4'>
        {awards.map((award, index) => (
          <div key={index} className='flex flex-col gap-2'>
            <div className='flex max-sm:flex-col gap-2 sm:items-center'>
              <h3>{award.link ? 
                <a href={award.link} target='_blank' rel='noopener noreferrer' className='hover:underline'>{award.name}</a> :
                <>{award.name}</>
              }</h3>
              <p className='text-gray-600 dark:text-gray-400 text-sm'>{award.year}</p>
            </div>
            <p>{award.place}{award.info ? `, ${award.info}` : ''}</p>
          </div>
        ))}
      </div>

      <hr />

      <h2>Languages</h2>

      <ul className='list-disc list-inside'>
        {languages.map((language, idx) => (
          <li key={idx}>{`${language.language} [${language.proficiency}]`}</li>
        ))}
      </ul>

    </main>
  );
}