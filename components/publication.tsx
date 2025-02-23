'use client';

import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';

import profileData from '@/public/profile.json';
import styles from '@/styles/publication.module.css';
import { LinkData, LinkTypeComponents, PublicationData } from '@/interfaces/types';

const name: string = profileData.name;

const AuthorList: React.FC<{ authors: string[] }> = ({ authors }) => {
  return authors.map(author => (
    author === name ? <strong>{author}</strong> : <>{author}</>
  )).reduce((prev, curr) =>
    <>{prev}, {curr}</>
  );
};

const ExternalLink: React.FC<{ link: LinkData }> = ({ link }) => {
  return (
    <Link href={link.href} className={styles.link} target='_blank' rel='noopener noreferrer'>
      <div className={styles.linkContainer}>
        {LinkTypeComponents[link.type]}
        <span className={`${link.type === 'Other' ? '' : 'desktop-only'} ${styles.linkName}`}>{link.name}</span>
      </div>
    </Link>
  )
};

const Publication: React.FC<{ pub: PublicationData }> = ({ pub }) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const toggleExpanded = () => { setExpanded(prev => !prev); };

  // TODO collapse/expand animation

  return (
    <div className={styles.container}>
      <h2 className={styles.h2}>{pub.title}</h2>
      <p className={styles.authors}><AuthorList authors={pub.authors} /></p>
      <p className={styles.journal}>{pub.journal}, {pub.year}</p>
      {pub.highlight && (<p className={styles.highlight}>{pub.highlight}</p>)}

      <div className='flex gap-2'>
        {pub.links?.map((link, index) => ( <ExternalLink key={index} link={new LinkData(link)} /> ))}

        <button
          onClick={ toggleExpanded }
          className={`desktop-only ${styles.button} ${expanded ? styles.reverse : ''}`}
          title={expanded ? 'Collapse' : 'Expand'}
          aria-label={expanded ? 'Collapse publication' : 'Expand publication'}
        >
          <svg width='30' height='20' xmlns='http://www.w3.org/2000/svg'>
            <polyline points='5,5 15,15 25,5' />
          </svg>
        </button>
      </div>

      {expanded && (
        <div className='desktop-only'>
          <h3 className={styles.h3}>Abstract:</h3>
          <p className={styles.abstract}>{pub.abstract}</p>
          <div className={styles.figureContainer}>
            {pub.figures?.map((figure, index) => (
              <div key={index} className={styles.figure}>
                <Image src={figure} alt={`Figure ${index + 1}`} fill className={styles.image} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Publication;