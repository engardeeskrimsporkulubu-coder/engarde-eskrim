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
    metaTitle: 'Ankara Çocuk Eskrim | 6–14 Yaş | En Garde Eskrim',
    metaDescription:
      'Ankara çocuk eskrim programı ile 6–14 yaş için güvenli, disiplinli eğitim. Deneme dersi ve kayıt için En Garde Eskrim.',
    description:
      'Ankara’da çocuk eskrim arayan aileler için 6–14 yaş programımız odak, denge ve özgüven üzerine kurulur. Deneme dersi ile grubu yerinde görün.',
    detailTitle: 'Ankara’da çocuk eskrim dersi nasıl ilerler?',
    detailBody:
      'Isınma ve oyun ritminden sonra temel duruş, adım ve mesafe çalışılır. Silahlı bölüm eğitmen gözetiminde, koruyucu ekipmanla açılır. Ankara grubunda tempo yaşa göre ayarlanır; çocuk kontrolü yorulmadan öğrenir.',
    whatsappText: 'Merhaba, Ankara çocuk eskrim hakkında bilgi almak istiyorum.',
    points: [
      {
        title: 'Ankara’da 6–14 yaş grupları',
        body: 'Başlangıç grupları sıfır deneyim kabul eder. Amaç yarışma baskısı değil; güvenli mesafe ve doğru duruş alışkanlığıdır.',
      },
      {
        title: 'Odak ve refleks',
        body: 'Kısa tekrarlar dikkat süresini artırır. Çocuk, kendi hareketini kontrol etmeyi öğrenir.',
      },
      {
        title: 'Hızlı iletişim',
        body: 'Ankara deneme ve kayıt WhatsApp veya telefonla planlanır. Şehir ve yaş yazmanız yeterlidir.',
      },
    ],
    faqs: [
      {
        q: 'Ankara çocuk eskrim programına hiç başlamadan katılabilir mi?',
        a: 'Evet. 6–14 yaş başlangıç grupları sıfır deneyim kabul eder. İlk dersler oyun ritmi ve temel duruş üzerine kurulur.',
      },
      {
        q: 'Ankara’da deneme dersi nasıl alınır?',
        a: 'WhatsApp’tan yaş ve uygun gün yazın. Kontenjana göre Ankara grubu için deneme saati netleşir.',
      },
      {
        q: 'Ekipman ilk derste gerekir mi?',
        a: 'Deneme ve başlangıç için temel ekipman kulüp tarafından sağlanır. Kişisel ekipman ilerleyen dönemde konuşulur.',
      },
    ],
  },
  {
    slug: 'kayseri-cocuk-eskrim',
    city: 'Kayseri',
    keyword: 'kayseri çocuk eskrim',
    overline: 'Kayseri çocuk eskrim',
    title: 'Kayseri çocuk eskrim ile disiplinli gelişim',
    metaTitle: 'Kayseri Çocuk Eskrim | 6–14 Yaş | En Garde Eskrim',
    metaDescription:
      'Kayseri çocuk eskrim eğitimi: 6–14 yaş için güvenli antrenman, deneme dersi ve kayıt. En Garde Eskrim.',
    description:
      'Kayseri çocuk eskrim programımız flöre, epe ve kılıç temellerini yaşa uygun tempo ile öğretir. Aileler deneme dersiyle başlayabilir.',
    detailTitle: 'Kayseri’de çocuk eskrim neden tercih edilir?',
    detailBody:
      'Eskrim bireysel ilerler; çocuk kalabalık rekabet yerine kendi mesafesini yönetir. Kayseri programında kısa bloklar, net kurallar ve eğitmen gözetimi öne çıkar.',
    whatsappText: 'Merhaba, Kayseri çocuk eskrim hakkında bilgi almak istiyorum.',
    points: [
      {
        title: 'Kayseri’de seviyeli gruplar',
        body: 'Yaş ve koordinasyona göre gruplanır. Gelişim temposu çocuğa göre artar; zorlama yoktur.',
      },
      {
        title: 'Güvenli silah çalışması',
        body: 'Koruyucu ekipman ve eğitmen gözetimi standarttır. Hedef vurmak değil, zamanlama ve duruştur.',
      },
      {
        title: 'Aileye açık süreç',
        body: 'Kayseri kayıt ve devam bilgisi tek kanaldan yürür. WhatsApp veya telefon yeterlidir.',
      },
    ],
    faqs: [
      {
        q: 'Kayseri çocuk eskrim kaç yaş için?',
        a: 'Program 6–14 yaş içindir. Başlangıç ve gelişim grupları yaşa göre ayrılır.',
      },
      {
        q: 'Kayseri’de haftada kaç ders önerilir?',
        a: 'Başlangıç için haftada 1–2 ders yeterlidir. Tempo okul programına göre konuşulur.',
      },
      {
        q: 'Kız ve erkek çocuklar birlikte mi çalışır?',
        a: 'Yaş ve seviye esas alınır. Uygun gruplarda birlikte çalışılabilir.',
      },
    ],
  },
  {
    slug: 'samsun-cocuk-eskrim',
    city: 'Samsun',
    keyword: 'samsun çocuk eskrim',
    overline: 'Samsun çocuk eskrim',
    title: 'Samsun çocuk eskrim: odak ve özgüven',
    metaTitle: 'Samsun Çocuk Eskrim | 6–14 Yaş | En Garde Eskrim',
    metaDescription:
      'Samsun çocuk eskrim kulübü programı. 6–14 yaş için deneme dersi, güvenli eğitim ve kayıt bilgisi.',
    description:
      'Samsun’da çocuk eskrim arayan veliler için programımız refleks, disiplin ve özgüven kazandırır. Deneme dersi ile tanışın.',
    detailTitle: 'Samsun çocuk eskrim dersinin akışı',
    detailBody:
      'Her ders ısınma, teknik blok ve kısa karşılaşma ritmiyle kapanır. Samsun grubunda çocuk hazır değilse performans temposuna zorlanmaz.',
    whatsappText: 'Merhaba, Samsun çocuk eskrim hakkında bilgi almak istiyorum.',
    points: [
      {
        title: 'Samsun’da başlangıç dostu',
        body: 'Hiç eskrim yapmamış çocuklar kabul edilir. İlk adımlar oyun ve duruş alıştırmasıdır.',
      },
      {
        title: 'Zihinsel ve fiziksel denge',
        body: 'El-göz uyumu, karar hızı ve kural dinleme birlikte gelişir.',
      },
      {
        title: 'Hızlı kayıt hattı',
        body: 'Samsun için yaş ve uygun günü yazın; deneme saati kontenjana göre netleşir.',
      },
    ],
    faqs: [
      {
        q: 'Samsun çocuk eskrim deneme dersi ücretli mi?',
        a: 'Deneme ve kontenjan detayı görüşmede netleştirilir. WhatsApp’tan sorabilirsiniz.',
      },
      {
        q: 'Samsun’da hangi dallar tanıtılır?',
        a: 'Flöre, epe ve kılıç temel teknikleri çocuk programında tanıtılır. Eğitmen yaşına uygun ilerleme önerir.',
      },
      {
        q: 'Veliler dersi izleyebilir mi?',
        a: 'İlk deneme sürecinde veli bilgilendirilir. Düzenli derslerde salon düzenine göre izleme imkânı anlatılır.',
      },
    ],
  },
  {
    slug: 'duzce-cocuk-eskrim',
    city: 'Düzce',
    keyword: 'düzce çocuk eskrim',
    overline: 'Düzce çocuk eskrim',
    title: 'Düzce çocuk eskrim ile güvenli başlangıç',
    metaTitle: 'Düzce Çocuk Eskrim | 6–14 Yaş | En Garde Eskrim',
    metaDescription:
      'Düzce çocuk eskrim eğitimi: 6–14 yaş güvenli program, deneme dersi ve kayıt. En Garde Eskrim.',
    description:
      'Düzce çocuk eskrim programımız küçük yaş gruplarına uygun tempo ile ilerler. Amaç kontrol, mesafe bilinci ve spor alışkanlığıdır.',
    detailTitle: 'Düzce’de çocuk eskrim nasıl başlar?',
    detailBody:
      'İlk derslerde ekipman korkusu yoktur; temel ekipman kulüpte sağlanır. Düzce grubunda kısa tekrarlar ve net kurallar dikkat süresini destekler.',
    whatsappText: 'Merhaba, Düzce çocuk eskrim hakkında bilgi almak istiyorum.',
    points: [
      {
        title: 'Düzce’de 6–14 yaş odaklı',
        body: 'Gruplar yaş bandına göre ayrılır. Okul temposuna uyum için esnek gün konuşulur.',
      },
      {
        title: 'Güvenli temas kültürü',
        body: 'Silahlı çalışma koruyucu ekipman ve eğitmen gözetiminde yapılır.',
      },
      {
        title: 'Aile ile net iletişim',
        body: 'Düzce kayıt hattı telefon ve WhatsApp’tır. Adres detayı görüşmede paylaşılır.',
      },
    ],
    faqs: [
      {
        q: 'Düzce çocuk eskrim hiç spor yapmayan çocuk için uygun mu?',
        a: 'Evet. Başlangıç grupları sıfır deneyim varsayar. Oyun ritmi ve duruş ile açılır.',
      },
      {
        q: 'Düzce’de deneme nasıl planlanır?',
        a: 'WhatsApp’tan yaş yazmanız yeterlidir. Uygun Düzce grubu için saat önerilir.',
      },
      {
        q: 'Yarışma zorunlu mu?',
        a: 'Hayır. Çoğu çocuk gelişim için gelir. Yarışma isteğe bağlıdır.',
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
