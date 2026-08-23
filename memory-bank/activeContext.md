# Active Context: Engarde Eskrim

## Son değişiklikler (23 Ağustos 2026)

### Tasarım taşıma
EngardeWeb2 → EngardeEskrim. Git/Vercel korundu. Canlı site hâlâ eski; push yok.

### SEO / LLM düzeltmeleri
P0–P1 sırayla uygulandı: Türkçe karakterler, tek H1, sunucu JSON-LD, hreflang, `/fencing` ayrımı, landing SSS, llms.txt.

### Yandex
- Meta: yandex-verification 7815bbe04d4134c1
- Dosya: /yandex_7815bbe04d4134c1.html

### Bing
- Meta: msvalidate.01 = 2E21EBCB6FC9B04362E8550D61E189FD
- Canlı doğrulama için deploy gerekir

### Dil butonu (24 Ağustos 2026)
Ana sayfada TR/EN artık menü + video metinleri + bölümler + CTA + SEO makalesini çeviriyor.
Landing sayfalarında TR/EN doğru eş sayfaya gider:
- `/cocuk-eskrim` ↔ `/fencing-for-kids`
- `/eskrim-kulubu` ↔ `/fencing`
- `/cocuk-spor-kursu` → EN: `/fencing-for-kids`

### Sosyal hesaplar (24 Ağustos 2026)
- Instagram: https://www.instagram.com/engardeeskrim/
- Facebook: https://www.facebook.com/profile.php?id=61572166425507
- YouTube: https://www.youtube.com/@engardeeskrim

### PageSpeed CLS (24 Ağustos 2026)
Masaüstü 75’in nedeni yavaşlık değil: FCP/LCP iyi, CLS 1,0.
Kaynak: `vh-particle-canvas` bitmap resize. Canvas artık contain:strict + sabit overlay.

### Mobil (24 Ağustos 2026)
- PWA `standalone` → `browser` (Uygulamayı yükle kalkar)
- Mobilde video scrub yerine sessiz loop; kaydırma 240vh
- Particle/flare kapalı; sticky 100dvh

### Durum
- Mobil düzeltmeleri yerelde; canlıya alınacak
