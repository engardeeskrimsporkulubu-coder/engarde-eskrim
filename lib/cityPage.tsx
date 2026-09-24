import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import CitySeoLanding from '@/components/CitySeoLanding';
import {
  absoluteUrl,
  getCityEn,
  getCityLanding,
  getCityLandingByEnSlug,
  languageAlternates,
} from '@/lib/seo';

export function cityMetadata(slug: string): Metadata {
  const city = getCityLanding(slug);
  const en = getCityEn(slug);
  if (!city || !en) return {};

  const fullTitle = `${city.metaTitle} | En Garde Eskrim`;

  return {
    title: city.metaTitle,
    description: city.metaDescription,
    keywords: [city.keyword, `${city.city.toLocaleLowerCase('tr-TR')} eskrim`, 'eskrim kulübü', '6-14 yaş eskrim'],
    alternates: {
      canonical: `/${city.slug}`,
      languages: languageAlternates(`/${city.slug}`, `/${en.slugEn}`),
    },
    openGraph: {
      title: fullTitle,
      description: city.metaDescription,
      url: `/${city.slug}`,
      type: 'website',
      locale: 'tr_TR',
    },
  };
}

export function cityMetadataEn(slugEn: string): Metadata {
  const pair = getCityLandingByEnSlug(slugEn);
  if (!pair) return {};
  const { tr, en } = pair;

  return {
    title: en.metaTitle,
    description: en.metaDescription,
    keywords: [en.keyword, `${tr.city.toLowerCase()} fencing`, 'kids fencing', 'fencing club'],
    alternates: {
      canonical: `/${en.slugEn}`,
      languages: languageAlternates(`/${tr.slug}`, `/${en.slugEn}`),
    },
    openGraph: {
      title: `${en.metaTitle} | En Garde Eskrim`,
      description: en.metaDescription,
      url: `/${en.slugEn}`,
      type: 'website',
      locale: 'en_US',
    },
  };
}

export function CityPage({ slug }: { slug: string }) {
  if (!getCityLanding(slug) || !getCityEn(slug)) notFound();
  return <CitySeoLanding slug={slug} locale="tr" />;
}

export function CityPageEn({ slugEn }: { slugEn: string }) {
  if (!getCityLandingByEnSlug(slugEn)) notFound();
  return <CitySeoLanding slugEn={slugEn} locale="en" />;
}
