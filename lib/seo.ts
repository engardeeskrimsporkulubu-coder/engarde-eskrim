export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://engardeeskrim.com';

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
    'https://www.instagram.com/engarde.eskrim',
    'https://www.facebook.com/engarde.eskrim',
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
        areaServed: {
          '@type': 'City',
          name: NAP.city,
        },
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
    title: 'İstanbul’da çocuk eskrim kulübü',
    body: 'En Garde Eskrim, 6–14 yaş için kulüp disiplini sunar: ısınma, teknik, kısa maç ritmi ve kapanış aynı derste toplanır.',
  },
  {
    title: 'Başlangıç, gelişim, performans',
    body: 'Çocuk önce güvenli duruşu öğrenir. Gelişim grubunda tempo artar. Performans grubu yalnızca hazır olanlara önerilir.',
  },
  {
    title: 'Aile ile düzenli iletişim',
    body: 'Kayıt, deneme ve devam bilgisi telefon veya WhatsApp üzerinden yürür. Adres detayı görüşmede netleştirilir.',
  },
];

export const KULUP_FAQS: FaqItem[] = [
  {
    q: 'Kulübe kayıt için ne gerekir?',
    a: 'Çocuğun yaşı, daha önce spor yapıp yapmadığı ve uygun günler yeterlidir. Deneme dersinden sonra grup önerilir.',
  },
  {
    q: 'Kulüp yalnızca yarışma için mi?',
    a: 'Hayır. Çoğu çocuk gelişim ve spor alışkanlığı için gelir. Yarışma yolu ayrıca ve isteğe bağlı konuşulur.',
  },
  {
    q: 'Veliler dersleri izleyebilir mi?',
    a: 'İlk deneme ve oryantasyon sürecinde veli bilgilendirilir. Düzenli derslerde salon düzenine göre izleme imkânı anlatılır.',
  },
];

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
