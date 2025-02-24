import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://billcho.net',
      lastModified: new Date(),
    },
    {
      url: 'https://billcho.net/about',
      lastModified: new Date(),
    },
    {
      url: 'https://billcho.net/publications',
      lastModified: new Date(),
    },
  ]
}