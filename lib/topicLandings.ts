import type { FaqItem, SeoPoint } from '@/lib/seo';

export type TopicLanding = {
  slug: string;
  keyword: string;
  city: string;
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

export const TOPIC_LANDINGS: TopicLanding[] = [
  {
    slug: 'eskrim-kac-yasinda-baslar',
    keyword: 'eskrim sporu kaç yaşında başlanır',
    city: 'Türkiye',
    overline: 'Başlangıç yaşı',
    title: 'Eskrim sporu kaç yaşında başlanır?',
    metaTitle: 'Eskrim Sporu Kaç Yaşında Başlanır',
    metaDescription:
      'Eskrim sporu kaç yaşında başlanır? En Garde Eskrim’de program 6–14 yaş içindir. Güvenli başlangıç, deneme dersi ve yaş grubu bilgisi.',
    description:
      'Eskrim sporu kaç yaşında başlanır sorusunun net cevabı kulüp programına göre değişir. En Garde Eskrim’de çocuklar 6 yaşından itibaren, 14 yaşına kadar yaş ve seviyeye uygun gruplarda başlar.',
    detailTitle: 'Neden 6 yaş eşiği?',
    detailBody:
      'Altı yaş civarında çocuklar kısa kuralı dinleyebilir, sırasını bekleyebilir ve temel dengeyi tutabilir. Eskrimde ilk iş vuruş değil duruş ve mesafedir; bu yüzden daha küçük yaşta silahlı tempo önerilmez. En Garde grupları 6–14 bandında kademeli ilerler: oyun ritmi, adım, sonra eğitmen gözetiminde koruyucu ekipman. Üst yaşta koordinasyon farklıdır; bu yüzden 12–14 yaş ayrı gelişim temposuna alınabilir. Deneme dersinde eğitmen, çocuğun yaşına uygun grubu yerinde görür.',
    whatsappText: 'Merhaba, eskrim sporu kaç yaşında başlanır diye sormak istiyorum. Çocuğumun yaşı:',
    points: [
      {
        title: 'En Garde’de başlangıç: 6 yaş',
        body: 'Program 6–14 yaş çocuklar içindir. Sıfır deneyim kabul edilir; ilk dersler oyun ve güvenli mesafe üzerine kurulur.',
      },
      {
        title: 'Yaş tek başına yeterli değil',
        body: 'Aynı yaştaki çocukların dikkat süresi farklıdır. Grup, yaşa ek olarak koordinasyon ve derste kalma alışkanlığına göre önerilir.',
      },
      {
        title: 'Geç başlamak sorun değil',
        body: '10–14 yaşında ilk kez gelen çocuklar da alınır. Tempo yaşına göre ayarlanır; küçük grupla aynı derse zorlanmaz.',
      },
    ],
    faqs: [
      {
        q: 'Eskrim sporu kaç yaşında başlanır?',
        a: 'En Garde Eskrim’de çocuk programı 6 yaşında başlar ve 14 yaşına kadar devam eder. Deneme dersiyle uygun grup netleşir.',
      },
      {
        q: '5 yaşındaki çocuk eskrime başlayabilir mi?',
        a: 'Kulüp programımız 6 yaş eşiğiyle çalışır. Beş yaş için silahlı tempo önerilmez; 6 yaşı doldunca deneme planlanır.',
      },
      {
        q: '14 yaşından büyükler için program var mı?',
        a: 'Bu sitede yetişkin programı iddia edilmez. 6–14 yaş dışındaki talep görüşmede ayrıca konuşulur.',
      },
      {
        q: 'Yaş uygunluğunu nasıl öğrenirim?',
        a: 'WhatsApp’tan çocuğun yaşını yazın. İstanbul, Ankara, Kayseri, Samsun veya Düzce grubuna göre deneme saati önerilir.',
      },
    ],
  },
  {
    slug: 'eskrim-kursu-fiyatlari',
    keyword: 'eskrim kursu fiyatları',
    city: 'Türkiye',
    overline: 'Kayıt ve ücret',
    title: 'Eskrim kursu fiyatları nasıl belirlenir?',
    metaTitle: 'Eskrim Kursu Fiyatları',
    metaDescription:
      'Eskrim kursu fiyatları şehre, ders sıklığına ve gruba göre değişir. En Garde Eskrim’de güncel ücreti deneme sonrası WhatsApp veya telefonla alın.',
    description:
      'Eskrim kursu fiyatları tek bir sabit rakam değildir. Şehir (İstanbul, Ankara, Kayseri, Samsun, Düzce), haftalık ders sayısı ve grubun seviyesi ücreti etkiler. Güncel rakamı uydurmadan, kayıt öncesi netleştiririz.',
    detailTitle: 'Fiyata neler dahil, neler ayrıca konuşulur?',
    detailBody:
      'Başlangıçta deneme ve ilk derslerde temel ekipman kulüp tarafından sağlanır; maske-silah almak zorunlu değildir. Aylık kurs ücreti, seçilen şehir ve haftalık tempo ile konuşulur. Turnuva, özel ders veya kişisel ekipman ayrı kalemlerdir ve dayatılmaz. Bu sayfada sahte indirim veya uydurma TL yazılmaz. Aile yaş, şehir ve uygun günleri ilettiğinde güncel eskrim kursu fiyatları net yanıtlanır.',
    whatsappText: 'Merhaba, eskrim kursu fiyatları hakkında bilgi almak istiyorum. Şehir ve yaş:',
    points: [
      {
        title: 'Güncel rakam görüşmede',
        body: 'Ücretler dönem ve şehir bazında değişebilir. WhatsApp veya telefonla yaş ve şehir yazmanız yeterli; güncel tablo iletilir.',
      },
      {
        title: 'Deneme dersi ayrı konuşulur',
        body: 'Kayıttan önce deneme ile salon ve tempo görülür. Deneme ücreti varsa o da aynı kanalda açık söylenir; sürpriz yok.',
      },
      {
        title: 'Ne kadar sıklık, o kadar plan',
        body: 'Haftada 1 ders ile 2 ders aynı paket değildir. Okul temposuna göre sıklık seçilir; fiyat buna göre netleşir.',
      },
    ],
    faqs: [
      {
        q: 'Eskrim kursu fiyatları sitede neden yazılmıyor?',
        a: 'Şehir ve dönem bazında tablo değişir. Yanlış rakam yayınlamak yerine güncel ücreti WhatsApp veya telefonla paylaşıyoruz.',
      },
      {
        q: 'Fiyata ekipman dahil mi?',
        a: 'Deneme ve başlangıç için temel ekipman kulüptedir. Kişisel malzeme almak ilerleyen dönemde, ihtiyaç olursa konuşulur.',
      },
      {
        q: 'Tüm şehirlerde ücret aynı mı?',
        a: 'Hayır. İstanbul, Ankara, Kayseri, Samsun ve Düzce paketleri ayrı netleşir. Şehrinizi yazmanız yeterlidir.',
      },
      {
        q: 'Ödeme nasıl öğrenilir?',
        a: 'Yaş, şehir ve haftalık tercih yazın. Size güncel eskrim kursu fiyatları ve kayıt adımları iletilir.',
      },
    ],
  },
  {
    slug: 'eskrim-cocuklara-faydalari',
    keyword: 'eskrim çocuklara faydaları',
    city: 'Türkiye',
    overline: 'Gelişim',
    title: 'Eskrimin çocuklara faydaları',
    metaTitle: 'Eskrim Çocuklara Faydaları',
    metaDescription:
      'Eskrimin çocuklara faydaları: odak, denge, el-göz uyumu, özdenetim ve özgüven. 6–14 yaş En Garde programında güvenli tempo.',
    description:
      'Eskrimin çocuklara faydaları, koşu veya top sporundan farklı bir yerde toplanır: çocuk rakibi ezmek değil kendi mesafesini yönetmeyi öğrenir. Kısa tekrarlar dikkat süresini, kurallar ise özdenetimi büyütür.',
    detailTitle: 'Derste hangi fayda nasıl çalışır?',
    detailBody:
      'Isınma oyunları denge ve duruşu ısıtır. Adım-mesafe bloğu el-göz uyumu ve karar hızını zorlar; çocuk “bekle, oku, hareket et” döngüsünü tekrarlar. Silahlı bölüm koruyucu ekipmanla açılır; temas skorlanan bir dokunuştur, kontrolsüz vuruş yoktur. Bu yapı çekingen çocukta özgüven, hareketli çocukta fren kazandırır. Faydalar yarışma madalyasına bağlı değildir; düzenli derste alışkanlık olarak birikir.',
    whatsappText: 'Merhaba, eskrimin çocuklara faydaları ve uygun grup hakkında bilgi almak istiyorum.',
    points: [
      {
        title: 'Zihinsel: odak ve karar',
        body: 'Eskrim, aynı anda kural dinleme ve kısa karar ister. Ekran temposundan uzak, ölçülü bir dikkat çalışmasıdır.',
      },
      {
        title: 'Fiziksel: denge ve koordinasyon',
        body: 'Öne-arka adım, duruş ve el-göz uyumu aynı derste işlenir. Amaç kas şovu değil kontrollü hareket alışkanlığıdır.',
      },
      {
        title: 'Sosyal: sıra ve saygı',
        body: 'Çocuk rakibini beklemeyi, selamı ve salon kuralını öğrenir. Disiplin bağırarak değil tekrarlanan ritimle gelir.',
      },
    ],
    faqs: [
      {
        q: 'Eskrimin çocuklara faydaları nelerdir?',
        a: 'Odak, refleks, denge, el-göz uyumu, özdenetim ve özgüven öne çıkar. Hepsi güvenli, eğitmen gözetimli derste çalışılır.',
      },
      {
        q: 'Eskrim saldırganlık artırır mı?',
        a: 'Hayır. Temas dokunuş olarak skorlanır. Program kontrol ve mesafe öğretir; agresyon değil duruş hedeflenir.',
      },
      {
        q: 'Okul başarısına etkisi olur mu?',
        a: 'Dersler dikkat ve sıra bekleme alışkanlığını güçlendirir. Mucize not vaadi yok; düzenli spor ritmi destekler.',
      },
      {
        q: 'Faydaları yerinde görmek için ne yapmalıyım?',
        a: 'Deneme dersi en net yoldur. Yaş ve şehir yazın; 6–14 yaş grubuna uygun saat önerilir.',
      },
    ],
  },
  {
    slug: 'hafta-sonu-cocuk-eskrim',
    keyword: 'hafta sonu çocuk eskrim kursu',
    city: 'Türkiye',
    overline: 'Hafta sonu programı',
    title: 'Hafta sonu çocuk eskrim kursu',
    metaTitle: 'Hafta Sonu Çocuk Eskrim Kursu',
    metaDescription:
      'Hafta sonu çocuk eskrim kursu: okul gününe sıkışmayan 6–14 yaş grupları. İstanbul, Ankara, Kayseri, Samsun, Düzce kontenjanı için yazın.',
    description:
      'Hafta sonu çocuk eskrim kursu, hafta içi etüt ve okul temposuna uymayan aileler için planlanır. Gruplar şehre ve kontenjana göre açılır; cumartesi veya pazar uygunluğu görüşmede netleşir.',
    detailTitle: 'Hafta sonu dersi nasıl akar?',
    detailBody:
      'Hafta sonu bloğu da aynı kulüp ritmini taşır: ısınma, teknik, kısa karşılaşma temposu. Fark, okul gününe sıkışmadan biraz daha nefesli bir yerleştirmedir. Saatler salon ve şehir bazında değişir; bu yüzden sitede uydurma cumartesi saati yazılmaz. İstanbul, Ankara, Kayseri, Samsun ve Düzce için ayrı kontenjan vardır. Yaş ve tercih ettiğiniz günü yazmanız yeter; uygun hafta sonu çocuk eskrim kursu önerilir.',
    whatsappText: 'Merhaba, hafta sonu çocuk eskrim kursu hakkında bilgi almak istiyorum. Şehir ve yaş:',
    points: [
      {
        title: 'Okul gününe alternatif',
        body: 'Hafta içi yetişmeyen aileler için cumartesi veya pazar grubu konuşulur. Uygunluk şehre göre değişir.',
      },
      {
        title: 'Aynı güvenli müfredat',
        body: 'Hafta sonu “eğlence sınıfı” değildir. 6–14 yaş duruş, mesafe ve koruyucu ekipman standardı aynıdır.',
      },
      {
        title: 'Kontenjan sınırlıdır',
        body: 'Küçük grup tutulur. Doluluk varsa bir sonraki uygun hafta sonu veya hafta içi seçeneği önerilir.',
      },
    ],
    faqs: [
      {
        q: 'Hafta sonu çocuk eskrim kursu var mı?',
        a: 'Şehir ve dönem kontenjanına göre planlanır. WhatsApp’tan şehir ve yaş yazın; uygun cumartesi veya pazar önerilir.',
      },
      {
        q: 'Hem cumartesi hem pazar şart mı?',
        a: 'Hayır. Çoğu çocuk haftada bir dersle başlar. İkinci gün ihtiyaç olursa ayrıca konuşulur.',
      },
      {
        q: 'Hafta sonu grupları yarışma için mi?',
        a: 'Hayır. Öncelik gelişim ve güvenli alışkanlıktır. Yarışma yolu isteğe bağlıdır.',
      },
      {
        q: 'Tüm şehirlerde hafta sonu var mı?',
        a: 'İstanbul, Ankara, Kayseri, Samsun ve Düzce ayrı bakılır. Boş yer o anki tabloya göredir.',
      },
    ],
  },
  {
    slug: 'cocuk-eskrim-malzemeleri',
    keyword: 'çocuk eskrim malzemeleri',
    city: 'Türkiye',
    overline: 'Ekipman',
    title: 'Çocuk eskrim malzemeleri ve ekipmanları',
    metaTitle: 'Çocuk Eskrim Malzemeleri ve Ekipmanları',
    metaDescription:
      'Çocuk eskrim malzemeleri ve ekipmanları: maske, ceket, eldiven, silah. Deneme ve başlangıçta kulüp sağlar; kişisel alım sonra konuşulur.',
    description:
      'Çocuk eskrim malzemeleri / ekipmanları ilk günden satın alınmak zorunda değildir. En Garde’de deneme ve başlangıç için temel koruyucu set kulüpte bulunur; ölçü ve ihtiyaç oturunca kişisel set konuşulur.',
    detailTitle: 'Hangi ekipman ne işe yarar?',
    detailBody:
      'Maske yüz ve başı korur. Ceket ve (gerekirse) göğüs koruyucusu gövdeyi örter. Eldiven silah elini kapar. Silah (flöre, epe veya kılıç temeli) eğitmen gözetiminde, yaşa uygun ağırlıkta kullanılır. Ayakkabı kaymayan salon tabanına uygun olmalıdır; özel eskrim ayakkabısı ilk ders şartı değildir. Lamé ve elektronik gövde takımı yarışma yolunda devreye girer, başlangıçta dayatılmaz. Çocuk eskrim ekipmanları ölçüye bağlıdır; bu yüzden acele alışveriş önerilmez.',
    whatsappText: 'Merhaba, çocuk eskrim malzemeleri ve ekipmanları hakkında bilgi almak istiyorum.',
    points: [
      {
        title: 'İlk derste almak zorunda değilsiniz',
        body: 'Deneme ve başlangıçta maske, ceket ve silah kulüp tarafındadır. Aile ancak ihtiyaç netleşince kişisel sete geçer.',
      },
      {
        title: 'Güvenlik sırası',
        body: 'Silahlı çalışma her zaman koruyucu ekipman ve eğitmen gözetimindedir. Malzeme eksikse o blok açılmaz.',
      },
      {
        title: 'Kişisel set ne zaman?',
        body: 'Düzenli devam ve doğru beden oturunca konuşulur. Marka dayatması yoktur; ölçü ve güvenlik esas alınır.',
      },
    ],
    faqs: [
      {
        q: 'Çocuk eskrim malzemeleri nelerdir?',
        a: 'Temel set: maske, ceket, eldiven ve silah. Göğüs koruyucusu yaşa göre eklenir. Elektronik parça yarışma aşamasındadır.',
      },
      {
        q: 'Çocuk eskrim ekipmanları ilk günden alınır mı?',
        a: 'Hayır. Deneme ve başlangıç ekipmanı kulüp tarafından sağlanır. Kişisel alım ilerleyen dönemde konuşulur.',
      },
      {
        q: 'Hangi silah alınır?',
        a: 'Çocuk programında flöre, epe ve kılıç temelleri tanıtılır. Kişisel silah, eğitmen önerisi ve yaşa göre seçilir.',
      },
      {
        q: 'Ekipman ölçüsü nasıl anlaşılır?',
        a: 'Deneme dersinde beden ve tutuş yerinde görülür. WhatsApp’tan yaş yazmanız, süreci başlatmak için yeterlidir.',
      },
    ],
  },
];

export const TOPIC_NAV_LINKS = [
  { href: '/eskrim-kac-yasinda-baslar', label: 'Kaç yaşında başlanır' },
  { href: '/eskrim-kursu-fiyatlari', label: 'Kurs fiyatları' },
  { href: '/eskrim-cocuklara-faydalari', label: 'Çocuklara faydaları' },
  { href: '/hafta-sonu-cocuk-eskrim', label: 'Hafta sonu kursu' },
  { href: '/cocuk-eskrim-malzemeleri', label: 'Malzemeler' },
] as const;

export function getTopicLanding(slug: string) {
  return TOPIC_LANDINGS.find((t) => t.slug === slug);
}
