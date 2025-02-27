import type { MetadataRoute } from 'next';

const modified: Date = new Date();
const base: string = 'https://billcho.net';
const sites: string[] = ['', '/about', '/publications'];

export default function sitemap(): MetadataRoute.Sitemap {
  return sites.map(site => {
    return {
      url: base + site,
      lastModified: modified,
    }
  });
}