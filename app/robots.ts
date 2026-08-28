import type { MetadataRoute } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.engardeeskrim.com';

const bots = [
  '*',
  'Googlebot',
  'Google-Extended',
  'GPTBot',
  'ChatGPT-User',
  'ClaudeBot',
  'PerplexityBot',
  'Applebot-Extended',
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: bots.map((userAgent) => ({
      userAgent,
      allow: '/',
    })),
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
