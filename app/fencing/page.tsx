import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import SeoLanding3D from '@/components/SeoLanding3D';
import {
  FENCING_FAQS,
  FENCING_POINTS,
  faqJsonLd,
  languageAlternates,
  whatsappHref,
} from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Fencing Club in Istanbul',
  description:
    'Fencing club in Istanbul for children aged 6–14. Foil, epee, and sabre fundamentals with a trial class for families.',
  keywords: ['fencing club', 'istanbul fencing', 'fencing classes', 'eskrim kulübü'],
  alternates: {
    canonical: '/fencing',
    languages: languageAlternates('/eskrim-kulubu', '/fencing'),
  },
  openGraph: {
    title: 'Fencing Club in Istanbul',
    description: 'Istanbul fencing club for ages 6–14 with trial class and parent-friendly enrollment.',
    url: '/fencing',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fencing Club in Istanbul',
    description: 'Kids and development fencing at En Garde Eskrim. Book a trial class.',
  },
};

export default function FencingClubPage() {
  return (
    <>
      <JsonLd id="fencing-faq" data={faqJsonLd(FENCING_FAQS)} />
      <SeoLanding3D
        locale="en"
        turkishHref="/eskrim-kulubu"
        englishHref="/fencing"
        overline="Fencing club"
        title="A fencing club in Istanbul for ages 6–14"
        description="En Garde Eskrim is a fencing club in Istanbul for children aged 6–14. This page covers how the club works: trial class, group placement, and contact."
        keyword="fencing club"
        city="Istanbul"
        whatsappHref={whatsappHref('Hello, I want information about the fencing club in Istanbul.')}
        phoneHref="tel:+905333916821"
        points={FENCING_POINTS}
        faqs={FENCING_FAQS}
        detailTitle="What makes this the club page?"
        detailBody="This page explains membership flow: trial class, beginner or development group, and optional competition talk later. Weapon choice stays secondary to safe distance and coaching. For the kids-specific landing, see Fencing for Kids."
      />
    </>
  );
}
