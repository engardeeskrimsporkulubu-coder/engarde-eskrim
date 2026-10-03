# Active Context: Engarde Eskrim

## Son değişiklikler (3 Ekim 2026)

### SEO — niyet sayfaları (çocuk eskrim korumalı)
- **Dokunulmayan:** `app/cocuk-eskrim/page.tsx` (title, H1, metin, FAQ aynı)
- **Yeni TR landing’ler:**
  - `/eskrim-kac-yasinda-baslar`
  - `/eskrim-kursu-fiyatlari` (uydurma TL yok; güncel ücret görüşmede)
  - `/eskrim-cocuklara-faydalari`
  - `/hafta-sonu-cocuk-eskrim`
  - `/cocuk-eskrim-malzemeleri`
- Footer + ana sayfa: “Sık aranan konular” satırı (şehir satırı ile aynı görsel dil)
- Şehir sayfaları: 3 kart ızgarası korundu (`şehir eskrim` H2’ye gömüldü; 4. kart yok)
- Teknik SEO (3 Ekim, 2. tur): global İstanbul `SportsActivityLocation` şehir sayfalarından çıkarıldı; ana sayfa hreflang `/fencing` eşleşmesi kaldırıldı; `html lang` EN rotalarda `en`; konu sayfalarında sahte EN eşleşmesi yok; ana sayfa iç link kümesi; sitemap lastmod sabit
- İçerik: `lib/topicLandings.ts` + `lib/topicPage.tsx`
- Sitemap + `public/llms.txt` güncellendi

### SEO — şehir sayfaları (çocuk eskrim korumalı)
- **Dokunulmayan:** `app/cocuk-eskrim/page.tsx` (title, H1, metin, FAQ aynı)
- **Yeni landing’ler:**
  - `/ankara-cocuk-eskrim`
  - `/kayseri-cocuk-eskrim`
  - `/samsun-cocuk-eskrim`
  - `/duzce-cocuk-eskrim`
- Footer: ana sayfa + SEO landing footer’larına şehir linkleri eklendi (“ÇOCUK ESKRİM” linki korundu)
- İçerik: `lib/seo.ts` → `CITY_LANDINGS`
- `/eskrim-kulubu` güçlendirildi
- Sitemap güncellendi

### SEO güçlendirme (24 Eylül 2026, gece)
- Title çift marka düzeltildi (`… | En Garde Eskrim` bir kez)
- Şehir landing içerikleri özgünleştirildi (4 FAQ, farklı detay metinleri)
- BreadcrumbList JSON-LD eklendi
- FIE silah ölçüleri + epe “öncelik kuralı” metni güncellendi
- Push: `c635378` → canlı

### Önceki notlar (hâlâ geçerli)
- Kanonik: `https://www.engardeeskrim.com`
- Sosyal: Instagram / Facebook / YouTube
- TR/EN landing eşlemesi mevcut
