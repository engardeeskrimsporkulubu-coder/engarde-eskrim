export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://www.engardeeskrim.com';

export const NAP = {
  name: 'En Garde Eskrim',
  legalName: 'Engarde Eskrim Spor Kulübü',
  phone: '+905333916821',
  phoneDisplay: '+90 533 391 68 21',
  phoneHref: 'tel:+905333916821',
  email: 'engardeeskrimsporkulubu@gmail.com',
  city: 'İstanbul',
  country: 'TR',
  whatsapp: 'https://wa.me/905333916821',
  sameAs: [
    'https://www.instagram.com/engardeeskrim/',
    'https://www.facebook.com/profile.php?id=61572166425507',
    'https://x.com/engardeeskrim',
    'https://www.youtube.com/@engardeeskrim',
  ],
} as const;

export const EN_PATHS = ['/fencing', '/fencing-for-kids'] as const;

export type FaqItem = {
  q: string;
  a: string;
};

export type SeoPoint = {
  title: string;
  body: string;
};

export function htmlLangForPath(pathname: string): 'tr' | 'en' {
  return EN_PATHS.some((path) => pathname === path || pathname.startsWith(`${path}/`))
    ? 'en'
    : 'tr';
}

export function absoluteUrl(path: string) {
  if (path === '/') return SITE_URL;
  return `${SITE_URL}${path}`;
}

export function languageAlternates(trPath: string, enPath: string) {
  return {
    'tr-TR': absoluteUrl(trPath),
    'en-US': absoluteUrl(enPath),
    'x-default': absoluteUrl(trPath),
  };
}

export function whatsappHref(text: string) {
  return `${NAP.whatsapp}?text=${encodeURIComponent(text)}`;
}

export function faqJsonLd(items: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };
}

export function siteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['Organization', 'SportsClub'],
        '@id': `${SITE_URL}/#organization`,
        name: NAP.name,
        alternateName: NAP.legalName,
        url: SITE_URL,
        logo: `${SITE_URL}/Engarde-Logo-optimized.webp`,
        image: `${SITE_URL}/EngardeEskrim-optimized.webp`,
        email: NAP.email,
        telephone: NAP.phoneDisplay,
        sameAs: [...NAP.sameAs],
        areaServed: [
          { '@type': 'City', name: 'İstanbul' },
          { '@type': 'City', name: 'Ankara' },
          { '@type': 'City', name: 'Kayseri' },
          { '@type': 'City', name: 'Samsun' },
          { '@type': 'City', name: 'Düzce' },
        ],
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: NAP.phoneDisplay,
          email: NAP.email,
          contactType: 'customer service',
          availableLanguage: ['Turkish', 'English'],
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: NAP.name,
        inLanguage: ['tr-TR', 'en-US'],
        publisher: { '@id': `${SITE_URL}/#organization` },
      },
      {
        '@type': 'SportsActivityLocation',
        '@id': `${SITE_URL}/#location`,
        name: NAP.name,
        sport: 'Fencing',
        url: SITE_URL,
        telephone: NAP.phoneDisplay,
        email: NAP.email,
        image: `${SITE_URL}/EngardeEskrim-optimized.webp`,
        address: {
          '@type': 'PostalAddress',
          addressLocality: NAP.city,
          addressCountry: NAP.country,
        },
        parentOrganization: { '@id': `${SITE_URL}/#organization` },
        audience: {
          '@type': 'PeopleAudience',
          requiredMinAge: 6,
          requiredMaxAge: 14,
        },
      },
    ],
  };
}

export const HOME_FAQS_EN: FaqItem[] = [
  {
    q: 'What ages is fencing for?',
    a: 'En Garde Eskrim programs are for children aged 6–14. Beginner and development groups are split by age and level.',
  },
  {
    q: 'Do you offer a trial class?',
    a: 'Yes. Message us on WhatsApp or call to schedule a trial class.',
  },
  {
    q: 'Which weapons do you teach?',
    a: 'Foil, epee, and sabre fundamentals are introduced in the kids program. The coach suggests the next step by age.',
  },
  {
    q: 'Do we need equipment for the first class?',
    a: 'Basic gear is provided for trial and beginner sessions. Buying personal equipment comes later.',
  },
];

export const HOME_FAQS: FaqItem[] = [
  {
    q: 'Eskrim kaç yaş için uygundur?',
    a: 'En Garde Eskrim’de programlar 6–14 yaş çocuklar içindir. Başlangıç ve gelişim grupları yaşa ve seviyeye göre ayrılır.',
  },
  {
    q: 'Deneme dersi var mı?',
    a: 'Evet. WhatsApp veya telefon ile iletişime geçerek deneme dersi planlayabilirsiniz.',
  },
  {
    q: 'Hangi eskrim dalları çalışılıyor?',
    a: 'Flöre, epe ve kılıç dallarının temel teknikleri çocuk programında tanıtılır. Eğitmen, çocuğun yaşına uygun ilerleme önerir.',
  },
  {
    q: 'İlk derste ekipman gerekir mi?',
    a: 'Deneme ve başlangıç için temel ekipman kulüp tarafından sağlanır. Kendi ekipmanını almak ilerleyen dönemde konuşulur.',
  },
];

export const COCUK_ESKRIM_POINTS: SeoPoint[] = [
  {
    title: '6–14 yaşa özel çocuk eskrim',
    body: 'Dersler yaş grubuna göre kademeli ilerler. Amaç yarışma baskısı değil; güvenli mesafe, denge ve doğru duruş alışkanlığıdır.',
  },
  {
    title: 'Odak, refleks ve özgüven',
    body: 'Kısa tekrarlar ve net kurallar dikkat süresini artırır. Çocuk, rakibi değil kendi hareketini kontrol etmeyi öğrenir.',
  },
  {
    title: 'Aileler için açık süreç',
    body: 'Deneme dersi, grup seviyesi ve iletişim tek kanal üzerinden yürür. WhatsApp veya telefonla kayıt bilgisi alınır.',
  },
];

export const COCUK_ESKRIM_FAQS: FaqItem[] = [
  {
    q: 'Çocuk eskrime hiç başlamadıysa katılabilir mi?',
    a: 'Evet. 6–14 yaş başlangıç grupları sıfır deneyim kabul eder. İlk dersler oyun ritmi ve temel duruş üzerine kurulur.',
  },
  {
    q: 'Çocuk eskrim hangi kas ve becerileri geliştirir?',
    a: 'Koordinasyon, el-göz uyumu, denge ve karar hızı öne çıkar. Aynı anda kural dinleme ve sıra bekleme alışkanlığı da gelişir.',
  },
  {
    q: 'İstanbul’da deneme dersi nasıl planlanır?',
    a: 'WhatsApp’tan yaş ve uygun gün yazmanız yeterlidir. Kontenjan ve grup uygunluğuna göre deneme saati netleşir.',
  },
];

export const COCUK_SPOR_POINTS: SeoPoint[] = [
  {
    title: 'Ekrim temelli çocuk spor kursu',
    body: 'Klasik top sporlarından farklı olarak eskrim, bireysel ilerleme ve kişisel mesafe üzerine kurulur. Kalabalık rekabet yerine kontrollü tempo vardır.',
  },
  {
    title: 'Okul temposuna uyum',
    body: 'Dersler 6–14 yaş dikkat süresine göre kısa bloklara bölünür. Ev ödevi veya turnuva zorunluluğu dayatılmaz.',
  },
  {
    title: 'Güvenli temas kültürü',
    body: 'Silahlı çalışma koruyucu ekipman ve eğitmen gözetiminde yapılır. Çocuk, vurma değil zamanlama ve duruş öğrenir.',
  },
];

export const COCUK_SPOR_FAQS: FaqItem[] = [
  {
    q: 'Çocuk spor kursu olarak eskrim neden tercih edilir?',
    a: 'Takım sırasına bağlı kalmadan ilerler. Çocuk kendi ritminde çalışır; dikkat ve özdenetim ön plandadır.',
  },
  {
    q: 'Kız ve erkek çocuklar aynı grupta mı çalışır?',
    a: 'Yaş ve seviye esas alınır. Gruplar uygun olduğunda birlikte çalışılabilir; ayrım spor dalına göre değil güvenlik ve seviyeye göredir.',
  },
  {
    q: 'Haftada kaç ders önerilir?',
    a: 'Başlangıç için haftada 1–2 ders yeterlidir. Tempo, çocuğun yaşına ve okul programına göre konuşulur.',
  },
];

export const KULUP_POINTS: SeoPoint[] = [
  {
    title: 'Eskrim kulübü disiplini',
    body: 'En Garde Eskrim, 6–14 yaş için kulüp ritmi sunar: ısınma, teknik, kısa maç temposu ve kapanış aynı derste toplanır.',
  },
  {
    title: 'Birden fazla şehirde aktif',
    body: 'İstanbul merkezli kulübümüz Ankara, Kayseri, Samsun ve Düzce’de de çocuk programı yürütür. Kayıt şehre göre netleşir.',
  },
  {
    title: 'Başlangıçtan performansa',
    body: 'Çocuk önce güvenli duruşu öğrenir. Gelişim grubunda tempo artar. Performans yolu yalnızca hazır olanlara önerilir.',
  },
];

export const KULUP_FAQS: FaqItem[] = [
  {
    q: 'Eskrim kulübüne kayıt için ne gerekir?',
    a: 'Çocuğun yaşı, daha önce spor yapıp yapmadığı ve yaşadığı şehir yeterlidir. Deneme dersinden sonra grup önerilir.',
  },
  {
    q: 'Hangi şehirlerde eskrim kulübü programınız var?',
    a: 'İstanbul, Ankara, Kayseri, Samsun ve Düzce. WhatsApp’tan şehrinizi yazmanız yeterli; size uygun günleri iletiriz.',
  },
  {
    q: 'Kulüp yalnızca yarışma için mi?',
    a: 'Hayır. Çoğu çocuk gelişim ve spor alışkanlığı için gelir. Yarışma yolu ayrıca ve isteğe bağlı konuşulur.',
  },
];

export type CityLanding = {
  slug: string;
  city: string;
  keyword: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  overline: string;
  description: string;
  detailTitle: string;
  detailBody: string;
  points: SeoPoint[];
  faqs: FaqItem[];
  whatsappText: string;
};

export const CITY_LANDINGS: CityLanding[] = [
  {
    slug: 'ankara-cocuk-eskrim',
    city: 'Ankara',
    keyword: 'ankara çocuk eskrim',
    overline: 'Ankara çocuk eskrim',
    title: 'Ankara çocuk eskrim: 6–14 yaş güvenli program',
    metaTitle: 'Ankara Çocuk Eskrim | 6–14 Yaş',
    metaDescription:
      'Ankara’da 6–14 yaş çocuk eskrim eğitimi. Odak, denge ve özgüven; deneme dersi ve kayıt için En Garde Eskrim.',
    description:
      'Başkent’te çocuk eskrim arayan aileler için programımız okul temposuna uyumlu, küçük gruplarla ilerler. İlk hedef: güvenli mesafe, net duruş ve derste kalma alışkanlığı.',
    detailTitle: 'Ankara programında bir ders nasıl akar?',
    detailBody:
      'Ankara gruplarında ders üç blokta ilerler: kısa ısınma oyunları, temel adım–mesafe çalışması, ardından koruyucu ekipmanla eğitmen eşliğinde silahlı tekrar. Kalabalık maç baskısı yoktur; çocuk hazır olmadan tempo yükseltilmez. Kayıt ve deneme günü WhatsApp veya telefonla, çocuğun yaşına göre netleşir.',
    whatsappText: 'Merhaba, Ankara çocuk eskrim hakkında bilgi almak istiyorum.',
    points: [
      {
        title: 'Ankara’da okul uyumlu gruplar',
        body: '6–14 yaş bandı seviye ve dikkat süresine göre ayrılır. Haftalık tempo, okul ve etüt programına göre konuşulur.',
      },
      {
        title: 'Başkent temposunda sakin ilerleme',
        body: 'Amaç puan değil kontrol. Kısa tekrarlar refleks ve özgüveni büyütür; çocuk kendi hareketini yönetmeyi öğrenir.',
      },
      {
        title: 'Deneme ile tanıma',
        body: 'Ankara’da ilk adım deneme dersidir. Yaş yazmanız yeterli; kontenjana göre uygun gün önerilir.',
      },
    ],
    faqs: [
      {
        q: 'Ankara çocuk eskrim hiç başlamamış çocuk için uygun mu?',
        a: 'Evet. Başlangıç grupları sıfır deneyim kabul eder. İlk dersler oyun ritmi, duruş ve güvenli mesafe üzerinedir.',
      },
      {
        q: 'Ankara’da hangi yaşlar kabul ediliyor?',
        a: 'Program 6–14 yaş içindir. Yaş ve koordinasyona göre başlangıç veya gelişim grubu önerilir.',
      },
      {
        q: 'Ankara deneme dersi nasıl planlanır?',
        a: 'WhatsApp’tan yaş ve uygun günleri yazın. Ankara kontenjanına göre deneme saati netleşir.',
      },
      {
        q: 'İlk derste maske ve silah gerekir mi?',
        a: 'Hayır. Deneme ve başlangıç için temel ekipman kulüp tarafından sağlanır.',
      },
    ],
  },
  {
    slug: 'kayseri-cocuk-eskrim',
    city: 'Kayseri',
    keyword: 'kayseri çocuk eskrim',
    overline: 'Kayseri çocuk eskrim',
    title: 'Kayseri çocuk eskrim ile disiplinli gelişim',
    metaTitle: 'Kayseri Çocuk Eskrim | 6–14 Yaş',
    metaDescription:
      'Kayseri’de çocuk eskrim: 6–14 yaş güvenli antrenman, flöre–epe–kılıç temelleri, deneme dersi ve kayıt.',
    description:
      'Kayseri’de bireysel ilerleyen bir spor arayan aileler için eskrim; sıra bekleme, kural dinleme ve el–göz uyumunu aynı derste çalıştırır. Deneme dersiyle tempo yerinde görülür.',
    detailTitle: 'Kayseri’de çocuklar eskrimi nasıl öğrenir?',
    detailBody:
      'Kayseri programında önce ayak çalışması ve mesafe bilinci oturtulur. Silahlı bölüm yalnızca koruyucu ekipman ve eğitmen gözetiminde açılır. Flöre, epe ve kılıç temelleri yaşa göre tanıtılır; yarışma yolu isteğe bağlıdır. Devam ve kayıt bilgisi tek kanalda (WhatsApp / telefon) yürür.',
    whatsappText: 'Merhaba, Kayseri çocuk eskrim hakkında bilgi almak istiyorum.',
    points: [
      {
        title: 'Kayseri’de seviyeli yol haritası',
        body: 'Başlangıç → gelişim → isteğe bağlı performans. Çocuk hazır değilse üst gruba zorlanmaz.',
      },
      {
        title: 'Takım baskısı olmadan spor',
        body: 'Eskrim bireyseldir. Çekingen veya hareketli çocuklarda tempo kişiye göre ayarlanabilir.',
      },
      {
        title: 'Yerel kayıt hattı',
        body: 'Kayseri için yaş ve gün tercihini yazmanız yeterli. Salon ve saat görüşmede netleşir.',
      },
    ],
    faqs: [
      {
        q: 'Kayseri çocuk eskrim kaç yaş için?',
        a: '6–14 yaş. Gruplar yaş ve seviyeye göre ayrılır.',
      },
      {
        q: 'Kayseri’de haftada kaç ders önerilir?',
        a: 'Başlangıç için genellikle haftada 1–2 ders yeterlidir. Okul programına göre ayarlanır.',
      },
      {
        q: 'Kayseri’de kız ve erkek aynı grupta mı?',
        a: 'Esas olan yaş ve seviyedir. Uygun gruplarda birlikte çalışılabilir.',
      },
      {
        q: 'Turnuvaya girmek zorunlu mu?',
        a: 'Zorunlu değil. Çoğu çocuk gelişim ve spor alışkanlığı için gelir.',
      },
    ],
  },
  {
    slug: 'samsun-cocuk-eskrim',
    city: 'Samsun',
    keyword: 'samsun çocuk eskrim',
    overline: 'Samsun çocuk eskrim',
    title: 'Samsun çocuk eskrim: odak ve özgüven',
    metaTitle: 'Samsun Çocuk Eskrim | 6–14 Yaş',
    metaDescription:
      'Samsun’da 6–14 yaş çocuk eskrim programı. Refleks, disiplin ve özgüven; deneme dersi ile başlayın.',
    description:
      'Samsun’da çocuklar için eskrim; ekran temposundan uzak, ölçülü bir fiziksel–zihinsel çalışma sunar. Kısa bloklar, net kurallar ve güvenli silah kültürüyle ilerler.',
    detailTitle: 'Samsun ders ritmi nasıl kurulur?',
    detailBody:
      'Her Samsun dersi ısınma, teknik ve kısa karşılaşma ritmiyle kapanır. Çocuk yorulmadan “bekle–oku–hareket et” döngüsünü tekrarlar. Performans temposu yalnızca hazır olanlara açılır. Deneme için yaş yazmanız yeterli; kontenjana göre gün önerilir.',
    whatsappText: 'Merhaba, Samsun çocuk eskrim hakkında bilgi almak istiyorum.',
    points: [
      {
        title: 'Samsun’da sıfırdan başlangıç',
        body: 'Hiç eskrim yapmamış çocuklar kabul edilir. İlk haftalar oyun ve duruş alıştırmasıyla açılır.',
      },
      {
        title: 'Odak + refleks birlikte',
        body: 'El–göz uyumu, karar hızı ve sıra bekleme aynı derste gelişir; agresyon değil kontrol öğretilir.',
      },
      {
        title: 'Karadeniz hattında kolay iletişim',
        body: 'Samsun kayıt ve deneme WhatsApp veya telefonla yürür. Adres detayı görüşmede paylaşılır.',
      },
    ],
    faqs: [
      {
        q: 'Samsun çocuk eskrim deneme detayı nasıl öğrenilir?',
        a: 'WhatsApp’tan yaş yazın. Kontenjan, gün ve deneme süreci görüşmede netleştirilir.',
      },
      {
        q: 'Samsun’da hangi silah dalları var?',
        a: 'Flöre, epe ve kılıç temelleri tanıtılır. Eğitmen yaşa uygun sonraki adımı önerir.',
      },
      {
        q: 'Veliler Samsun derslerini izleyebilir mi?',
        a: 'İlk denemede veli bilgilendirilir. Düzenli derslerde salon düzenine göre izleme imkânı anlatılır.',
      },
      {
        q: 'Samsun programı yarışma odaklı mı?',
        a: 'Hayır. Öncelik gelişim ve güvenli alışkanlıktır. Yarışma isteğe bağlıdır.',
      },
    ],
  },
  {
    slug: 'duzce-cocuk-eskrim',
    city: 'Düzce',
    keyword: 'düzce çocuk eskrim',
    overline: 'Düzce çocuk eskrim',
    title: 'Düzce çocuk eskrim ile güvenli başlangıç',
    metaTitle: 'Düzce Çocuk Eskrim | 6–14 Yaş',
    metaDescription:
      'Düzce’de çocuk eskrim eğitimi: 6–14 yaş, güvenli tempo, deneme dersi ve kayıt. En Garde Eskrim.',
    description:
      'Düzce’de daha sakin, kontrollü bir çocuk sporu arayan aileler için eskrim; mesafe bilinci ve özdenetim kazandırır. Küçük yaş gruplarına uygun kısa bloklarla ilerler.',
    detailTitle: 'Düzce’de ilk dersler nasıl geçer?',
    detailBody:
      'Düzce başlangıcında ekipman korkusu yoktur; maske ve silah deneme için kulüpte bulunur. Dersler kısa tekrarlarla kurulur: duruş, adım, sonra gözetimli silah çalışması. Okul ve yol temposuna göre gün konuşulur; WhatsApp veya telefon yeterli ilk adımdır.',
    whatsappText: 'Merhaba, Düzce çocuk eskrim hakkında bilgi almak istiyorum.',
    points: [
      {
        title: 'Düzce ölçeğinde yakın takip',
        body: 'Gruplar yaş bandına göre tutulur. Eğitmen temposu çocuğun dikkat süresine göre ayarlar.',
      },
      {
        title: 'Güvenli silah kültürü',
        body: 'Temas skorlanan bir dokunuştur; kontrolsüz vuruş yoktur. Koruyucu ekipman standarttır.',
      },
      {
        title: 'Kolay ulaşım ve kayıt',
        body: 'Düzce için yaş yazmanız yeter. Salon konumu ve saat görüşmede netleşir.',
      },
    ],
    faqs: [
      {
        q: 'Düzce çocuk eskrim spor yapmayan çocuk için uygun mu?',
        a: 'Evet. Başlangıç grupları sıfır deneyim varsayar; oyun ritmiyle açılır.',
      },
      {
        q: 'Düzce deneme nasıl ayarlanır?',
        a: 'WhatsApp’tan yaş yazın. Uygun Düzce grubu için saat önerilir.',
      },
      {
        q: 'Düzce’de ekipman almak zorunda mıyız?',
        a: 'İlk dönemde değil. Deneme ve başlangıç ekipmanı kulüp tarafından sağlanır.',
      },
      {
        q: 'Yarışma zorunlu mu?',
        a: 'Zorunlu değil. Gelişim odaklı devam yeterlidir; yarışma ayrıca konuşulur.',
      },
    ],
  },
];

export const CITY_NAV_LINKS = [
  {
    href: '/cocuk-eskrim',
    city: 'İstanbul',
    label: 'İstanbul çocuk eskrim',
    labelEn: 'Istanbul kids fencing',
  },
  ...CITY_LANDINGS.map((c) => ({
    href: `/${c.slug}`,
    city: c.city,
    label: `${c.city} çocuk eskrim`,
    labelEn: `${c.city} kids fencing`,
  })),
];

export function cityLocationJsonLd(city: string, path: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SportsActivityLocation',
    '@id': `${absoluteUrl(path)}#location`,
    name: `${NAP.name} — ${city}`,
    sport: 'Fencing',
    url: absoluteUrl(path),
    telephone: NAP.phoneDisplay,
    email: NAP.email,
    image: `${SITE_URL}/EngardeEskrim-optimized.webp`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: city,
      addressCountry: NAP.country,
    },
    parentOrganization: { '@id': `${SITE_URL}/#organization` },
    audience: {
      '@type': 'PeopleAudience',
      requiredMinAge: 6,
      requiredMaxAge: 14,
    },
  };
}

export function cityBreadcrumbJsonLd(city: string, path: string) {
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
        name: `${city} çocuk eskrim`,
        item: absoluteUrl(path),
      },
    ],
  };
}

export function getCityLanding(slug: string) {
  return CITY_LANDINGS.find((c) => c.slug === slug);
}

export const FENCING_POINTS: SeoPoint[] = [
  {
    title: 'Fencing club in Istanbul',
    body: 'En Garde Eskrim is a fencing club for children aged 6–14. Classes introduce foil, epee, and sabre through safe, supervised drills.',
  },
  {
    title: 'Technique before speed',
    body: 'Beginners learn distance, posture, and timing before competitive pace. The club path is development first, tournaments optional.',
  },
  {
    title: 'Trial class for families',
    body: 'Parents can book a trial session by WhatsApp or phone. We confirm age group and available class times before the first visit.',
  },
];

export const FENCING_FAQS: FaqItem[] = [
  {
    q: 'Is this an English-friendly fencing club?',
    a: 'Yes. Families can write in English on WhatsApp. On-floor coaching is primarily Turkish, with simple cues for visiting families.',
  },
  {
    q: 'Which weapons do you teach?',
    a: 'Children are introduced to foil, epee, and sabre fundamentals. The coach recommends the next step by age and coordination.',
  },
  {
    q: 'How do I join the club?',
    a: 'Send the child’s age and preferred days. We schedule a trial class, then place them in a beginner or development group.',
  },
];

export const FENCING_KIDS_POINTS: SeoPoint[] = [
  {
    title: 'Fencing for kids aged 6–14',
    body: 'Classes are built for children’s attention span: short drills, clear rules, and protective gear from the first weapon session.',
  },
  {
    title: 'Focus, coordination, confidence',
    body: 'Kids learn to wait their turn, read a simple action, and recover stance. The goal is control, not aggression.',
  },
  {
    title: 'Parent-ready trial session',
    body: 'A trial class shows the environment before enrollment. Message us with age and school schedule to pick a slot.',
  },
];

export const FENCING_KIDS_FAQS: FaqItem[] = [
  {
    q: 'Can a child start with zero sports background?',
    a: 'Yes. The 6–14 beginner groups assume no prior fencing. First sessions focus on footwork games and safe distance.',
  },
  {
    q: 'Is fencing safe for children?',
    a: 'Weapon work is supervised and uses protective equipment. Contact is scored as a touch, not as uncontrolled hitting.',
  },
  {
    q: 'How do I book a kids trial class in Istanbul?',
    a: 'Write on WhatsApp with the child’s age. We reply with the next suitable beginner slot.',
  },
];
