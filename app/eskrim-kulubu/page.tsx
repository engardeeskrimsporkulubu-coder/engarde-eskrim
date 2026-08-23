import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import SeoLanding3D from '@/components/SeoLanding3D';
import {
  KULUP_FAQS,
  KULUP_POINTS,
  faqJsonLd,
  languageAlternates,
  whatsappHref,
} from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Eskrim Kulübü İstanbul | 6–14 Yaş Çocuklar İçin',
  description:
    'Eskrim kulübü arayan veliler için 6–14 yaş çocuk programları. Deneme dersi, grup seviyeleri ve kayıt için En Garde Eskrim.',
  keywords: ['eskrim kulübü', 'İstanbul eskrim', 'çocuk spor kulübü', 'eskrim dersi'],
  alternates: {
    canonical: '/eskrim-kulubu',
    languages: languageAlternates('/eskrim-kulubu', '/fencing'),
  },
  openGraph: {
    title: 'Eskrim Kulübü İstanbul | 6–14 Yaş Çocuklar İçin',
    description: 'İstanbul’da çocuklar için eskrim kulübü ve deneme dersi bilgileri.',
    url: '/eskrim-kulubu',
    type: 'website',
    locale: 'tr_TR',
  },
};

export default function EskrimKulubuPage() {
  return (
    <>
      <JsonLd id="eskrim-kulubu-faq" data={faqJsonLd(KULUP_FAQS)} />
      <SeoLanding3D
        locale="tr"
        overline="Eskrim kulübü"
        title="İstanbul’da çocuklar için eskrim kulübü"
        description="Kulübümüzde başlangıç, gelişim ve performans gruplarıyla çocuklar hem spor disiplini hem zihinsel dayanıklılık kazanır."
        keyword="eskrim kulübü"
        city="İstanbul"
        whatsappHref={whatsappHref('Merhaba, eskrim kulübü kayıtları hakkında bilgi alabilir miyim?')}
        phoneHref="tel:+905333916821"
        points={KULUP_POINTS}
        faqs={KULUP_FAQS}
        detailTitle="Kulüp ritmi nasıl işler?"
        detailBody="Her ders ısınma, teknik blok ve kısa karşılaşma ritmiyle kapanır. Çocuk hazır değilse performans grubuna zorlanmaz. Aile ile iletişim telefon ve WhatsApp üzerinden yürür; salon adresi görüşmede netleşir."
      />
    </>
  );
}
