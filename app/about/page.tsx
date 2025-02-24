import Link from 'next/link';
import Image from 'next/image';

import { AiOutlineUser } from 'react-icons/ai';
import { SiGooglescholar } from 'react-icons/si';
import { IoLocationSharp, IoMailSharp } from 'react-icons/io5';
import { FaGithub, FaLinkedin, FaTwitter, FaFileDownload, FaGraduationCap } from 'react-icons/fa';

import profileData from '@/public/profile.json';

interface Education {
  degree: string;
  school: string;
  duration: string;
  gpa: string;
};

const name: string = profileData.name;
const email: string = profileData.email;
const education: Education[] = profileData.education.reverse();

export default function Home() {
  return (
    <main className='max-w-4xl mx-auto px-4 py-24'>
      <h1 className='text-3xl font-bold mb-6'>About</h1>

      <div className='flex flex-col items-center space-y-6 w-full'>
      <div className='flex items-center space-x-6 w-full'>
        <div className='flex flex-col space-y-4 w-full'>
          <div className='flex flex-col items-start space-y-1 w-full mr-6'>
            <p className='flex items-center space-x-2'>
              <AiOutlineUser className='text-gray-700' />
              <span>{name}</span>
              <span className='block text-gray-500 text-sm'>Bill Cho</span>
            </p>
            <p className='flex items-center space-x-2'>
              <IoLocationSharp className='text-gray-700' />
              <span>Seoul, South Korea</span>
            </p>
            <p className='flex items-center space-x-2'>
              <IoMailSharp className='text-gray-700' />
              <a href={`mailto:${email}`} className='text-blue-500 hover:underline'>{email}</a>
            </p>

            {education.map((edu, index) => (
              <div key={index} className='flex items-center space-x-2 w-full'>
                <FaGraduationCap className='text-gray-700' />
                <div className='w-1/2 text-left'>
                  <p className='flex items-center font-semibold'>{edu.degree}</p>
                  <p className='text-gray-500 text-sm'>{edu.duration}</p>
                </div>
                <div className='w-1/2 text-right'>
                  <p>{edu.school}</p>
                  <p className='text-gray-500 text-sm'>{edu.gpa}</p>
                </div>
              </div>
            ))}
          </div>

          <div className='flex space-x-4 mt-3 text-2xl'>
            <Link href='https://github.com/chosanglyul' target='_blank' rel='noopener noreferrer'>
              <FaGithub className='text-gray-700 hover:text-black' />
            </Link>
            <Link href='https://www.linkedin.com/in/sanglyul-cho-69b553246' target='_blank' rel='noopener noreferrer'>
              <FaLinkedin className='text-blue-500 hover:text-blue-700' />
            </Link>
            <Link href='https://x.com/_billcho' target='_blank' rel='noopener noreferrer'>
              <FaTwitter className='text-blue-400 hover:text-blue-600' />
            </Link>
            <Link href='https://scholar.google.com/citations?user=hwR7WVoAAAAJ' target='_blank' rel='noopener noreferrer'>
              <SiGooglescholar className='text-gray-700 hover:text-black' />
            </Link>
            <Link href='/cv.pdf' target='_blank' rel='noopener noreferrer'>
              <FaFileDownload className='text-red-500 hover:text-red-700' />
            </Link>
          </div>
        </div>

        <Image src='/chosanglyul.jpg' alt='Profile' className='w-36 h-48 rounded-md' width={144} height={192} />
      </div>
      <div>
        My primary interest lies in machine learning (ML) and the acceleration of large-scale deep learning (DL) models. I have a diverse background in ML, systems, competitive programming, and web development. Having observed the escalating growth and complexity of DL models, I've developed an interest in tackling the challenges of efficient training and serving these models. To deepen my understanding and explore these interests further, I am double majoring in math.
      </div>
      </div>

      <hr className='my-4 border-black' />
      <h2>Publications</h2>

      <hr className='my-4 border-black' />
      <h2>Work Experience</h2>

      <hr className='my-4 border-black' />
      <h2>Honors and Awards</h2>

      <hr className='my-4 border-black' />
      <h2>Languages</h2>

    </main>
  );
}
