'use client';

import Link from 'next/link';
import Image from 'next/image';
import React, { useState, JSX } from 'react';
import { FaGithub, FaFilePdf, FaExternalLinkAlt } from 'react-icons/fa';

import Dropdown from '@/components/dropdown';
import styles from '@/styles/publication.module.css';
import profileData, { LinkType, LinkData, PublicationData } from '@/interfaces/profile';

const LinkTypeComponents: Record<LinkType, JSX.Element> = {
  GitHub: <FaGithub className='text-black-500 dark:text-white-500' />,
  Paper: <FaFilePdf className='text-red-500' />,
  Other: <FaExternalLinkAlt className='text-blue-500' />,
};

const AuthorList: React.FC<{ authors: readonly string[] }> = ({ authors }) => {
  return authors.map((author, index) => (
    author === profileData.name ? <strong key={index}>{author}</strong> : <>{author}</>
  )).reduce((prev, curr) =>
    <>{prev}, {curr}</>
  );
};

const ExternalLink: React.FC<{ link: LinkData }> = ({ link }) => {
  return (
    <Link href={link.href} className={styles.link} target='_blank' rel='noopener noreferrer'>
      <div className={styles.linkContainer}>
        {LinkTypeComponents[link.type]}
        <span className={`${link.type === 'Other' ? '' : 'max-sm:hidden'} ${styles.linkName}`}>{link.name}</span>
      </div>
    </Link>
  )
};

const Publication: React.FC<{ pub: PublicationData }> = ({ pub }) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const toggleExpanded = () => { setExpanded(prev => !prev); };

  return (
    <div className={styles.container}>
      <h2>{pub.title}</h2>
      <p className='text-gray-600 dark:text-gray-400'><AuthorList authors={pub.authors} /></p>
      <p className='text-gray-600 dark:text-gray-400'>{pub.journal}, {pub.year}</p>
      {pub.highlight && (<p className='text-rose-500 font-semibold'>{pub.highlight}</p>)}

      <Dropdown
        title={
          <div className='flex gap-2'>
            {pub.links?.map((link, index) => ( <ExternalLink key={index} link={link} /> ))}
          </div>
        }
        button={
          <button
            onClick={ toggleExpanded }
            className={`max-sm:hidden ${styles.button} hover:scale-105 ${expanded ? 'rotate-180' : ''}`}
            title={expanded ? 'Collapse' : 'Expand'}
            aria-label={expanded ? 'Collapse publication' : 'Expand publication'}
          >
            <svg width='30' height='20' xmlns='http://www.w3.org/2000/svg'>
              <polyline points='5,5 15,15 25,5' />
            </svg>
          </button>
        }
        isActive={expanded}
      >
        <div className='max-sm:hidden'>
          <h3 className='mt-4'>Abstract:</h3>
          <p className='text-sm text-gray-600 dark:text-gray-400'>{pub.abstract}</p>
          <div className='grid grid-cols-2 gap-x-4'>
            {pub.figures?.map((figure, index) => (
              <div key={index} className={styles.figure}>
                <Image src={figure} alt={`Figure ${index + 1}`} fill className='object-contain' />
              </div>
            ))}
          </div>
        </div>
      </Dropdown>
    </div>
  );
};

export default Publication;