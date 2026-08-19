import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://the-rolling-oven.vercel.app',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    // Add additional URLs here if you create multiple pages (e.g. /menu, /about)
  ];
}
