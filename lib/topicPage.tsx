import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import JsonLd from '@/components/JsonLd';
import SeoLanding3D from '@/components/SeoLanding3D';
import {
  NAP,
  SITE_URL,
  absoluteUrl,
  faqJsonLd,
  whatsappHref,
} from '@/lib/seo';
import { TOPIC_NAV_LINKS, getTopicLanding } from '@/lib/topicLandings';

export function topicMetadata(slug: string): Metadata {
  const topic = getTopicLanding(slug);
  if (!topic) return {};

  return {
    title: topic.metaTitle,
    description: topic.metaDescription,
    keywords: [
      topic.keyword,
      'eskrim kursu',
      '6-14 yaş eskrim',
    ],
    alternates: {
      canonical: `/${topic.slug}`,
      languages: {
        'tr-TR': absoluteUrl(`/${topic.slug}`),
        'x-default': absoluteUrl(`/${topic.slug}`),
      },
    },
    openGraph: {
      title: `${topic.metaTitle} | En Garde Eskrim`,
      description: topic.metaDescription,
      url: `/${topic.slug}`,
      type: 'website',
      locale: 'tr_TR',
    },
  };
}

function topicBreadcrumbJsonLd(slug: string, name: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: NAP.name,
        item: SITE_URL,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Eskrim kulübü',
        item: absoluteUrl('/eskrim-kulubu'),
      },
      {
        '@type': 'ListItem',
        position: 3,
        name,
        item: absoluteUrl(`/${slug}`),
      },
    ],
  };
}

export function TopicPage({ slug }: { slug: string }) {
  const topic = getTopicLanding(slug);
  if (!topic) notFound();

  const path = `/${topic.slug}`;
  const relatedLinks = [
    { href: '/cocuk-eskrim', label: 'Çocuk eskrim' },
    { href: '/eskrim-kulubu', label: 'Eskrim kulübü' },
    ...TOPIC_NAV_LINKS.filter((link) => link.href !== path).map((link) => ({
      href: link.href,
      label: link.label,
    })),
  ];

  return (
    <>
      <JsonLd id={`${topic.slug}-faq`} data={faqJsonLd(topic.faqs)} />
      <JsonLd
        id={`${topic.slug}-breadcrumb`}
        data={topicBreadcrumbJsonLd(topic.slug, topic.metaTitle)}
      />
      <SeoLanding3D
        locale="tr"
        turkishHref={path}
        englishHref={path}
        overline={topic.overline}
        title={topic.title}
        description={topic.description}
        keyword={topic.keyword}
        city={topic.city}
        whatsappHref={whatsappHref(topic.whatsappText)}
        phoneHref="tel:+905333916821"
        points={topic.points}
        faqs={topic.faqs}
        detailTitle={topic.detailTitle}
        detailBody={topic.detailBody}
        relatedTitle="İlgili konular"
        relatedLinks={relatedLinks}
      />
    </>
  );
}
