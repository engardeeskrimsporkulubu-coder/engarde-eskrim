import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import SeoLanding3D from '@/components/SeoLanding3D';
import {
  FENCING_KIDS_FAQS,
  FENCING_KIDS_POINTS,
  faqJsonLd,
  languageAlternates,
  whatsappHref,
} from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Fencing for Kids (Ages 6–14) | Istanbul',
  description:
    'Fencing for kids in Istanbul. Safe, structured classes for ages 6–14 focused on confidence, focus, and discipline.',
  keywords: ['fencing for kids', 'kids fencing class', 'children fencing club', 'istanbul fencing'],
  alternates: {
    canonical: '/fencing-for-kids',
    languages: languageAlternates('/cocuk-eskrim', '/fencing-for-kids'),
  },
  openGraph: {
    title: 'Fencing for Kids (Ages 6–14) | En Garde Istanbul',
    description: 'Kids fencing classes with a trial session and parent-friendly program details.',
    url: '/fencing-for-kids',
    type: 'website',
    locale: 'en_US',
  },
};

export default function FencingForKidsPage() {
  return (
    <>
      <JsonLd id="fencing-kids-faq" data={faqJsonLd(FENCING_KIDS_FAQS)} />
      <SeoLanding3D
        locale="en"
        turkishHref="/cocuk-eskrim"
        englishHref="/fencing-for-kids"
        overline="Kids fencing program"
        title="Fencing for kids ages 6–14 in Istanbul"
        description="Our kids fencing program helps children improve focus, discipline, and confidence through safe, progressive classes."
        keyword="fencing for kids"
        city="Istanbul"
        whatsappHref={whatsappHref('Hello, I want information about fencing for kids (ages 6-14).')}
        phoneHref="tel:+905333916821"
        points={FENCING_KIDS_POINTS}
        faqs={FENCING_KIDS_FAQS}
        detailTitle="What a first kids class looks like"
        detailBody="The session starts with movement games, then stance and distance. If the group is ready, a short supervised weapon drill follows with protective gear. Parents get a clear next step after the trial: stay in beginners or wait a cycle."
      />
    </>
  );
}
