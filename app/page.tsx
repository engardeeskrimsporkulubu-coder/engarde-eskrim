import type { Metadata } from 'next';
import { preload } from 'react-dom';
import HomeExperience from '@/components/HomeExperience';
import HomeSeoArticle from '@/components/HomeSeoArticle';
import JsonLd from '@/components/JsonLd';
import {
  absoluteUrl,
  faqJsonLd,
  HOME_FAQS,
  istanbulLocationJsonLd,
} from '@/lib/seo';

export const metadata: Metadata = {
  title: {
    absolute: 'En Garde Eskrim | İstanbul’da 6–14 Yaş Çocuk Eskrim Kulübü',
  },
  description:
    'İstanbul’da 6–14 yaş çocuklar için eskrim eğitimi. Flöre, epe ve kılıç temel teknikleri; deneme dersi ve kayıt için En Garde Eskrim.',
  alternates: {
    canonical: '/',
    languages: {
      'tr-TR': absoluteUrl('/'),
      'x-default': absoluteUrl('/'),
    },
  },
  openGraph: {
    title: 'En Garde Eskrim | 6–14 Yaş Çocuk Eskrim Kulübü',
    description:
      'İstanbul’da çocuklar için eskrim eğitimi. Deneme dersi ve kayıt bilgisi alın.',
    url: '/',
    locale: 'tr_TR',
  },
};

export default function HomePage() {
  preload('/fencing_scrub_poster.webp', { as: 'image' });
  return (
    <>
      <JsonLd id="home-faq-schema" data={faqJsonLd(HOME_FAQS)} />
      <JsonLd id="home-location-schema" data={istanbulLocationJsonLd()} />
      <HomeExperience />
      <HomeSeoArticle />
    </>
  );
}
