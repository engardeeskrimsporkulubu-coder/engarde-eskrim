import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import SeoLanding3D from '@/components/SeoLanding3D';
import {
  CITY_NAV_LINKS,
  KULUP_FAQS,
  KULUP_POINTS,
  faqJsonLd,
  languageAlternates,
  whatsappHref,
} from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Eskrim Kulübü | 6–14 Yaş Çocuklar',
  description:
    'Eskrim kulübü arayan aileler için 6–14 yaş programı. İstanbul, Ankara, Kayseri, Samsun ve Düzce. Deneme dersi ve kayıt: En Garde Eskrim.',
  keywords: [
    'eskrim kulübü',
    'eskrim kulubu',
    'çocuk eskrim kulübü',
    'İstanbul eskrim kulübü',
  ],
  alternates: {
    canonical: '/eskrim-kulubu',
    languages: languageAlternates('/eskrim-kulubu', '/fencing'),
  },
  openGraph: {
    title: 'Eskrim Kulübü | 6–14 Yaş | En Garde Eskrim',
    description:
      'Eskrim kulübü programı: 6–14 yaş. İstanbul ve diğer şehirlerde deneme dersi.',
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
        turkishHref="/eskrim-kulubu"
        englishHref="/fencing"
        overline="Eskrim kulübü"
        title="Eskrim kulübü: 6–14 yaş için disiplinli eğitim"
        description="En Garde Eskrim kulübünde çocuklar başlangıç, gelişim ve performans gruplarıyla hem spor disiplini hem zihinsel dayanıklılık kazanır. İstanbul, Ankara, Kayseri, Samsun ve Düzce’de aktifiz."
        keyword="eskrim kulübü"
        city="Türkiye"
        whatsappHref={whatsappHref('Merhaba, eskrim kulübü kayıtları hakkında bilgi alabilir miyim?')}
        phoneHref="tel:+905333916821"
        points={KULUP_POINTS}
        faqs={KULUP_FAQS}
        detailTitle="Eskrim kulübü ritmi nasıl işler?"
        detailBody="Her ders ısınma, teknik blok ve kısa karşılaşma ritmiyle kapanır. Çocuk hazır değilse performans grubuna zorlanmaz. Kayıt şehre göre planlanır; iletişim telefon ve WhatsApp üzerinden yürür."
        relatedTitle="Şehir programları"
        relatedLinks={CITY_NAV_LINKS}
      />
    </>
  );
}
