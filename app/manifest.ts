import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Engarde Eskrim - Modern Eskrim Eğitimi',
    short_name: 'Engarde Eskrim',
    description: '6-14 yaş çocuklar için eskrim eğitimi ve kulüp programları.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0a0a',
    theme_color: '#1e40af',
    icons: [
      {
        src: '/Engarde-Logo-optimized.webp',
        sizes: 'any',
        type: 'image/webp',
      },
    ],
  };
}
