import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import '@/styles/globals.css';
import CustomCursor from '@/components/CustomCursor';
import JsonLd from '@/components/JsonLd';
import SmoothScroll from '@/components/SmoothScroll';
import { siteJsonLd } from '@/lib/seo';

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-space',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://engardeeskrim.com'),
  icons: { icon: '/favicon.svg', shortcut: '/favicon.svg', apple: '/EngardeEskrim.png' },
  title: {
    default: 'En Garde Eskrim | İstanbul’da 6–14 Yaş Çocuk Eskrim Eğitimi',
    template: '%s | En Garde Eskrim',
  },
  description:
    '6–14 yaş çocuklar için eskrim eğitimi. Refleks, disiplin ve özgüven odaklı güvenli kulüp programları.',
  keywords: [
    'çocuk eskrim',
    'eskrim kulübü',
    '6-14 yaş spor',
    'çocuk spor kursu',
    'fencing for kids',
    'eskrim eğitimi',
    'İstanbul eskrim',
  ],
  openGraph: {
    title: 'En Garde Eskrim Kulübü',
    description: '6–14 yaş çocuklar için eskrim eğitimi ve deneme dersi bilgileri.',
    type: 'website',
    locale: 'tr_TR',
    url: 'https://engardeeskrim.com',
    siteName: 'En Garde Eskrim',
    images: [
      {
        url: '/EngardeEskrim-optimized.webp',
        width: 1200,
        height: 630,
        alt: 'En Garde Eskrim',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'En Garde Eskrim Kulübü',
    description: '6–14 yaş çocuklar için eskrim eğitimi ve kayıt bilgileri.',
    images: ['/EngardeEskrim-optimized.webp'],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: '-rAIPZbYjtGbO-MRsh_mczgBzsoBcIBwuuG0iVufQ0Q',
    yandex: '7815bbe04d4134c1',
  },
  manifest: '/manifest.webmanifest',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="tr"
      className={`${inter.variable} ${spaceGrotesk.variable}`}
      style={{ fontFamily: 'var(--font-inter, Inter, sans-serif)' }}
    >
      <body>
        <JsonLd id="site-schema" data={siteJsonLd()} />
        <CustomCursor />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
