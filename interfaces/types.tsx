import { JSX } from 'react';
import { FaGithub, FaFilePdf, FaExternalLinkAlt } from 'react-icons/fa';

type LinkType = 'GitHub' | 'Paper' | 'Other';

export const LinkTypeComponents: Record<LinkType, JSX.Element> = {
  GitHub: <FaGithub className='text-black-500 dark:text-white-500' />,
  Paper: <FaFilePdf className='text-red-500' />,
  Other: <FaExternalLinkAlt className='text-blue-500' />,
};

type LinkRawData = {
  type: string;
  href: string;
};

export class LinkData {
  type: LinkType;
  href: string;
  name: string;

  constructor(data: LinkRawData) {
    this.name = data.type;
    this.href = data.href;
    if (data.type === 'GitHub' || data.type === 'Paper') {
      this.type = data.type as LinkType;
    } else {
      this.type = 'Other';
    }
  }
};

export type PublicationData = {
  id: string;
  title: string;
  authors: string[];
  journal: string;
  year: number;
  highlight?: string;
  links?: LinkRawData[];
  abstract: string;
  figures?: string[];
  works?: string[];
};