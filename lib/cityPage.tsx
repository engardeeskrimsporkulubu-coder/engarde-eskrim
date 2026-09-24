import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import CitySeoLanding from '@/components/CitySeoLanding';
import { absoluteUrl, getCityLanding } from '@/lib/seo';

export function cityMetadata(slug: string): Metadata {
  const city = getCityLanding(slug);
  if (!city) return {};

  const fullTitle = `${city.metaTitle} | En Garde Eskrim`;

  return {
    title: city.metaTitle,
    description: city.metaDescription,
    keywords: [city.keyword, `${city.city.toLocaleLowerCase('tr-TR')} eskrim`, 'eskrim kulübü', '6-14 yaş eskrim'],
    alternates: {
      canonical: `/${city.slug}`,
      languages: {
        'tr-TR': absoluteUrl(`/${city.slug}`),
        'x-default': absoluteUrl(`/${city.slug}`),
      },
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

export function CityPage({ slug }: { slug: string }) {
  if (!getCityLanding(slug)) notFound();
  return <CitySeoLanding slug={slug} />;
}
