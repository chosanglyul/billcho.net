import profileRawData from '@/public/profile.json';

export interface EducationData {
  readonly degree: string;
  readonly school: string;
  readonly duration: string;
  readonly gpa: string;
};

export interface LinkRawData {
  readonly type: string;
  readonly href: string;
};

export interface PublicationRawData {
  readonly title: string;
  readonly authors: readonly string[];
  readonly journal: string;
  readonly year: number;
  readonly highlight?: string;
  readonly links?: readonly LinkRawData[];
  readonly abstract: string;
  readonly figures?: readonly string[];
  readonly works?: readonly string[];
};

export type LinkType = 'GitHub' | 'Paper' | 'Other';

export interface LinkData {
  readonly type: LinkType;
  readonly href: string;
  readonly name: string;
};

export interface PublicationData {
  readonly title: string;
  readonly authors: readonly string[];
  readonly journal: string;
  readonly year: number;
  readonly highlight?: string;
  readonly links?: readonly LinkData[];
  readonly abstract: string;
  readonly figures?: readonly string[];
  readonly works?: readonly string[];
};

export function createLinkData(data: LinkRawData): LinkData {
  return {
    name: data.type,
    href: data.href,
    type: (data.type === 'GitHub' || data.type === 'Paper') ? data.type : 'Other'
  };
}

export function createPublicationData(data: PublicationRawData): PublicationData {
  return {
    title: data.title,
    authors: data.authors,
    journal: data.journal,
    year: data.year,
    highlight: data.highlight,
    links: data.links?.map(link => createLinkData(link)),
    abstract: data.abstract,
    figures: data.figures,
    works: data.works
  };
}

export interface WorkData {
  readonly title: string;
  readonly position: string;
  readonly period: string;
  readonly link?: string;
  readonly works?: readonly string[];
};

export interface AwardData {
  readonly name: string;
  readonly place: string;
  readonly year: string;
  readonly link?: string;
  readonly info?: string;
};

export interface LanguageData {
  readonly language: string;
  readonly proficiency: string;
};

export interface ProfileRawData {
  readonly name: string;
  readonly email: string;
  readonly about: string;
  readonly abstract: string;
  readonly educations: readonly EducationData[];
  readonly publications: readonly PublicationRawData[];
  readonly works: readonly WorkData[];
  readonly awards: readonly AwardData[];
  readonly languages: readonly LanguageData[];
};

export class ProfileData {
  readonly name: string;
  readonly email: string;
  readonly about: string;
  readonly abstract: string;
  readonly educations: readonly EducationData[];
  readonly publications: readonly PublicationData[];
  readonly works: readonly WorkData[];
  readonly awards: readonly AwardData[];
  readonly languages: readonly LanguageData[];

  constructor(data: ProfileRawData) {
    this.name = data.name;
    this.email = data.email;
    this.about = data.about;
    this.abstract = data.abstract;
    this.educations = [...data.educations].reverse();
    this.publications = [...data.publications].reverse().map(pub => createPublicationData(pub));
    this.works = [...data.works].reverse();
    this.awards = data.awards;
    this.languages = data.languages;
  }
};

const profileData = new ProfileData(profileRawData as ProfileRawData);

export default profileData;