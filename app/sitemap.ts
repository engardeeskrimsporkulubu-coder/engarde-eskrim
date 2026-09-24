import type { MetadataRoute } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.engardeeskrim.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = [
    '/',
    '/cocuk-eskrim',
    '/cocuk-spor-kursu',
    '/eskrim-kulubu',
    '/ankara-cocuk-eskrim',
    '/kayseri-cocuk-eskrim',
    '/samsun-cocuk-eskrim',
    '/duzce-cocuk-eskrim',
    '/fencing',
    '/fencing-for-kids',
  ];

  return routes.map((route, index) => ({
    url: `${BASE_URL}${route}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: index === 0 ? 1 : 0.8,
  }));
}
