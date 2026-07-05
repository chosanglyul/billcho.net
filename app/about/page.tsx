import Link from 'next/link';
import Image from 'next/image';

import { AiOutlineUser } from 'react-icons/ai';
import { SiGooglescholar } from 'react-icons/si';
import { IoLocationSharp, IoMailSharp } from 'react-icons/io5';
import { FaGithub, FaLinkedin, FaTwitter, FaFileDownload, FaGraduationCap, FaExternalLinkAlt } from 'react-icons/fa';

import profileData from '@/interfaces/profile';
import profileImage from '@/public/chosanglyul.jpg';
import { AuthorList, ExternalLink } from '@/components/publication';

export default function Home() {
  return (
    <main>
      <h1>About</h1>

      <div className='flex flex-col gap-6'>
        <Image src={profileImage} alt='Profile' className='sm:hidden w-36 h-48 rounded-md' />

        <div className='flex items-center justify-between gap-6'>
          <div className='flex flex-col gap-1 w-full'>
            <p className='flex items-center gap-2'>
              <AiOutlineUser className='text-gray-700 dark:text-gray-300' />
              <span>{profileData.name}</span>
              <span className='text-gray-600 dark:text-gray-400 text-sm'>Bill Cho</span>
            </p>
            <p className='flex items-center gap-2'>
              <IoLocationSharp className='text-gray-700 dark:text-gray-300' />
              <span>Seoul, South Korea</span>
            </p>
            <p className='flex items-center gap-2 flex-wrap'>
              <IoMailSharp className='text-gray-700 dark:text-gray-300' />
              <span className='flex flex-wrap items-center gap-1'>
                {profileData.emails.map((email, index) => (
                  <span key={email} className='flex items-center gap-1'>
                    {index > 0 && <span className='text-gray-600 dark:text-gray-400'>/</span>}
                    <Link href={`mailto:${email}`} className='text-blue-500 hover:underline'>{email}</Link>
                  </span>
                ))}
              </span>
            </p>

            <div className='flex flex-col gap-4 mt-2'>
              {profileData.educations.map((edu, index) => (
                <div key={index} className='flex items-start gap-2 w-full'>
                  <FaGraduationCap className='mt-1 text-gray-700 dark:text-gray-300' />
                  <div className='flex flex-col w-full'>
                    <div className='flex max-sm:flex-col sm:justify-between'>
                      <p className='text-left font-semibold'>{edu.degree}</p>
                      <p className='sm:text-right max-sm:text-left'>{edu.school}</p>
                    </div>
                    <div className='flex max-sm:flex-col sm:justify-between'>
                      <p className='text-left text-gray-600 dark:text-gray-400 text-sm'>{edu.duration}</p>
                      <p className='sm:text-right max-sm:text-left text-gray-600 dark:text-gray-400 text-sm'>{edu.gpa}</p>
                    </div>
                    {edu.notes?.map((note, idx) => (
                      <p key={idx} className='text-gray-600 dark:text-gray-400 text-sm'>{note}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

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

          <Image src={profileImage} alt='Profile' className='max-sm:hidden w-36 h-48 rounded-md' />
        </div>
        <div>{profileData.abstract}</div>
      </div>

      <hr />

      <h2>Publications</h2>

      <div className='flex flex-col gap-4'>
        {profileData.publications.map((pub, index) => (
          <div key={index} className='flex flex-col gap-1'>
            <h3>{pub.title}</h3>
            <p className='text-gray-600 dark:text-gray-400 text-sm'><AuthorList authors={pub.authors} /></p>
            <p className='text-gray-600 dark:text-gray-400 text-sm'>{pub.journal}, {pub.year}</p>
            {pub.highlight && (<p className='text-rose-500 font-semibold'>{pub.highlight}</p>)}

            <div className='flex gap-2 text-sm my-1'>
              {pub.links?.map((link, index) => ( <ExternalLink key={index} link={link} /> ))}
            </div>
          </div>
        ))}
      </div>

      <hr />

      <h2>Work and Research Experience</h2>

      <div className='flex flex-col gap-4'>
        {profileData.works.map((work, index) => (
          <div key={index} className='flex flex-col gap-1'>
            <div className='flex flex-col gap-1 w-full'>
              <div className='flex max-sm:flex-col sm:items-center sm:justify-between max-sm:gap-1'>
                <div className='flex gap-1 items-center'>
                  <h3>{work.title}</h3>
                  {work.link && <a href={work.link} target='_blank' rel='noopener noreferrer'><FaExternalLinkAlt className='text-blue-500' /></a>}
                </div>
                <p className='sm:text-right max-sm:text-left text-gray-600 dark:text-gray-400 text-sm'>{work.period}</p>
              </div>
              <div className='flex max-sm:flex-col sm:justify-between'>
                <p className='text-gray-600 dark:text-gray-400 text-sm'>{work.position}</p>
                {work.location && <p className='sm:text-right max-sm:text-left text-gray-600 dark:text-gray-400 text-sm'>{work.location}</p>}
              </div>
            </div>

            <ul className='list-disc list-inside'>
              {work.works?.map((item, idx) => (<li key={idx}>{item}</li>))}
            </ul>
          </div>
        ))}
      </div>

      <hr />

      <h2>Honors and Awards</h2>

      <div className='flex flex-col gap-4'>
        {profileData.awards.map((award, index) => (
          <div key={index} className='flex max-sm:flex-col sm:items-center sm:justify-between max-sm:gap-1'>
            <div className='flex flex-col gap-1'>
              <div className='flex gap-1 items-center'>
                <h3>{award.name}</h3>
                {award.link ? <a href={award.link} target='_blank' rel='noopener noreferrer'><FaExternalLinkAlt className='text-blue-500' /></a> : <></>}
              </div>
              <p>{award.place}</p>
            </div>
            {award.period ? <span className='text-gray-600 dark:text-gray-400 text-sm'>{award.period}</span> : <></>}
          </div>
        ))}
      </div>

      <hr />

{/*
      <h2>Languages</h2>

      <ul className='list-disc list-inside'>
        {profileData.languages.map((language, idx) => (
          <li key={idx}>{`${language.language} [${language.proficiency}]`}</li>
        ))}
      </ul>
*/}

    </main>
  );
}
