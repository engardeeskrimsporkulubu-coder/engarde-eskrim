# System Patterns: Engarde Eskrim

## Mimari Yapı
```
EngardeEskrim/
├── app/
│   ├── layout.tsx
│   ├── page.tsx              # Ana 3D/GSAP sayfa
│   ├── robots.ts
│   ├── sitemap.ts
│   ├── manifest.ts
│   ├── cocuk-eskrim/         # KORUMA: çocuk eskrim 1. sıra — dokunma
│   ├── cocuk-spor-kursu/
│   ├── eskrim-kulubu/
│   ├── ankara-cocuk-eskrim/
│   ├── kayseri-cocuk-eskrim/
│   ├── samsun-cocuk-eskrim/
│   ├── duzce-cocuk-eskrim/
│   ├── fencing/
│   └── fencing-for-kids/
├── components/
│   ├── CustomCursor.tsx
│   ├── NeonSmokeBackground.tsx
│   ├── SeoLanding3D.tsx
│   ├── CitySeoLanding.tsx
│   └── SmoothScroll.tsx
├── styles/globals.css
├── public/
├── memory-bank/
└── package.json
```

## Tasarım Desenleri

### 1. GSAP Scroll hikayesi
- Ana sayfa section data + ScrollTrigger
- Video scrub (`fencing_scrub.mp4` vb.)

### 2. SEO landing
- `SeoLanding3D` ortak şablon
- Şehir sayfaları: `CITY_LANDINGS` + `CitySeoLanding`
- TR/EN hedef kelime sayfaları
- **çocuk eskrim sayfası içerik kilidi** (`app/cocuk-eskrim` title/H1/metin değiştirilmez)

### 3. Smooth scroll + custom cursor
- `SmoothScroll` sarmalayıcı
- `CustomCursor` root layout'ta

### 4. Deploy koruması
- `.git` ve `.vercel` tasarım taşımalarında silinmez
- Canlı güncelleme yalnızca `main` push ile olur
