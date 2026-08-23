import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import SeoLanding3D from '@/components/SeoLanding3D';
import {
  COCUK_ESKRIM_FAQS,
  COCUK_ESKRIM_POINTS,
  faqJsonLd,
  languageAlternates,
  whatsappHref,
} from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Çocuk Eskrim Eğitimi 6–14 Yaş | İstanbul',
  description:
    'Çocuk eskrim eğitimi ile 6–14 yaş grubu için güvenli, disiplinli ve eğlenceli spor. İstanbul’da deneme dersi ve kayıt bilgisi alın.',
  keywords: ['çocuk eskrim', 'eskrim eğitimi', '6-14 yaş eskrim', 'eskrim kursu'],
  alternates: {
    canonical: '/cocuk-eskrim',
    languages: languageAlternates('/cocuk-eskrim', '/fencing-for-kids'),
  },
  openGraph: {
    title: 'Çocuk Eskrim Eğitimi 6–14 Yaş | En Garde Eskrim',
    description: '6–14 yaş çocuklar için eskrim kulübü ve deneme dersi bilgileri.',
    url: '/cocuk-eskrim',
    type: 'website',
    locale: 'tr_TR',
  },
};

export default function CocukEskrimPage() {
  return (
    <>
      <JsonLd id="cocuk-eskrim-faq" data={faqJsonLd(COCUK_ESKRIM_FAQS)} />
      <SeoLanding3D
        locale="tr"
        overline="Çocuk eskrim programı"
        title="Çocuk eskrim ile güvenli ve güçlü gelişim"
        description="Çocuk eskrim programımız odaklanma, refleks, denge ve özgüven gelişimini destekler. 6–14 yaş için seviyeli grup dersleri sunar."
        keyword="çocuk eskrim"
        city="İstanbul"
        whatsappHref={whatsappHref('Merhaba, çocuk eskrim eğitimi hakkında bilgi almak istiyorum.')}
        phoneHref="tel:+905333916821"
        points={COCUK_ESKRIM_POINTS}
        faqs={COCUK_ESKRIM_FAQS}
        detailTitle="Çocuk eskrim dersi nasıl ilerler?"
        detailBody="Isınma ve oyun ritminden sonra temel duruş, adım ve mesafe çalışılır. Silahlı bölüm eğitmen gözetiminde, koruyucu ekipmanla açılır. Ders, kısa tekrarlarla biter; çocuk yorulmadan kontrolü öğrenir."
      />
    </>
  );
}
