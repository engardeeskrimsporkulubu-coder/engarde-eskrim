import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import SeoLanding3D from '@/components/SeoLanding3D';
import {
  absoluteUrl,
  COCUK_SPOR_FAQS,
  COCUK_SPOR_POINTS,
  faqJsonLd,
  whatsappHref,
} from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Çocuk Spor Kursu (6–14 Yaş) | Eskrim Programı',
  description:
    'Çocuk spor kursu arayan aileler için eskrim temelli eğitim. 6–14 yaş için güvenli ve seviyeye uygun antrenman, İstanbul.',
  keywords: ['çocuk spor kursu', '6-14 yaş spor', 'çocuklar için eskrim', 'spor kursu İstanbul'],
  alternates: {
    canonical: '/cocuk-spor-kursu',
    languages: {
      'tr-TR': absoluteUrl('/cocuk-spor-kursu'),
      'x-default': absoluteUrl('/cocuk-spor-kursu'),
    },
  },
  openGraph: {
    title: 'Çocuk Spor Kursu (6–14 Yaş) | Eskrim Programı',
    description: 'Çocuk spor kursu ihtiyacı için eskrim odaklı deneme dersi ve kayıt bilgileri.',
    url: '/cocuk-spor-kursu',
    type: 'website',
    locale: 'tr_TR',
  },
};

export default function CocukSporKursuPage() {
  return (
    <>
      <JsonLd id="cocuk-spor-faq" data={faqJsonLd(COCUK_SPOR_FAQS)} />
      <SeoLanding3D
        locale="tr"
        overline="Çocuk spor kursu"
        title="6–14 yaş çocuk spor kursu: Eskrim"
        description="Çocuklar için spor kursu seçiminde eskrim; koordinasyon, dikkat ve özgüven kazandırır. Deneme dersi ile programı yerinde görün."
        keyword="çocuk spor kursu"
        city="İstanbul"
        whatsappHref={whatsappHref('Merhaba, çocuk spor kursu (eskrim) hakkında bilgi almak istiyorum.')}
        phoneHref="tel:+905333916821"
        points={COCUK_SPOR_POINTS}
        faqs={COCUK_SPOR_FAQS}
        detailTitle="Bu kurs takım sporundan nasıl ayrılır?"
        detailBody="Eskrim bireysel ilerler. Çocuk, kalabalık hücum yerine kendi mesafesini yönetir. Bu yüzden çekingen veya hareketli çocuklarda tempo kişiye göre ayarlanabilir; sıralama ve bekleme de dersin parçasıdır."
      />
    </>
  );
}
