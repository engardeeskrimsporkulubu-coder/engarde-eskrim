import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Engarde Eskrim - Modern Eskrim Eğitimi',
    short_name: 'Engarde Eskrim',
    description: 'Profesyonel eskrim eğitimi, modern teknikler ve geleneksel değerlerin buluştuğu eskrim merkezi.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0a0a',
    theme_color: '#1e40af',
    icons: [
      {
        src: '/EngardeEskrim.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  };
}

