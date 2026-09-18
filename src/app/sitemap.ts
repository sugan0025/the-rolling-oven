import { MetadataRoute } from 'next';

const CATEGORY_SLUGS = [
  'cupcakes',
  'cookies',
  'muffins',
  'donuts',
  'chocolava',
  'tiramisu',
  'croissants',
];

const LEGAL_PAGES = [
  'privacy-policy',
  'terms-and-conditions',
  'refund-policy',
  'shipping-policy',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://the-rolling-oven.vercel.app';
  const now = new Date();

  // 1. Core category pages — high commercial priority
  const categoryPages: MetadataRoute.Sitemap = CATEGORY_SLUGS.map((slug) => ({
    url: `${baseUrl}/category/${slug}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // 2. Legal / compliance pages — low crawl priority to avoid wasting crawl budget
  const legalPages: MetadataRoute.Sitemap = LEGAL_PAGES.map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified: now,
    changeFrequency: 'yearly',
    priority: 0.3,
  }));

  return [
    // Homepage — top priority
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    // Contact & Ordering page — high local intent
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    ...categoryPages,
    ...legalPages,
  ];
}
