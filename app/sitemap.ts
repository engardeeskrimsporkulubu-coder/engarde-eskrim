import type { MetadataRoute } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.engardeeskrim.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date('2026-10-03T12:00:00+03:00');
  const routes = [
    '/',
    '/cocuk-eskrim',
    '/cocuk-spor-kursu',
    '/eskrim-kulubu',
    '/eskrim-kac-yasinda-baslar',
    '/eskrim-kursu-fiyatlari',
    '/eskrim-cocuklara-faydalari',
    '/hafta-sonu-cocuk-eskrim',
    '/cocuk-eskrim-malzemeleri',
    '/ankara-cocuk-eskrim',
    '/kayseri-cocuk-eskrim',
    '/samsun-cocuk-eskrim',
    '/duzce-cocuk-eskrim',
    '/ankara-kids-fencing',
    '/kayseri-kids-fencing',
    '/samsun-kids-fencing',
    '/duzce-kids-fencing',
    '/fencing',
    '/fencing-for-kids',
  ];

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority:
      route === '/'
        ? 1
        : route === '/cocuk-eskrim'
          ? 0.9
          : route.startsWith('/fencing') || route.endsWith('-kids-fencing')
            ? 0.6
            : 0.8,
  }));
}
