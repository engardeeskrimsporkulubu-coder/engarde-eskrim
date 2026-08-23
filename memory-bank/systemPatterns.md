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
│   ├── cocuk-eskrim/
│   ├── cocuk-spor-kursu/
│   ├── eskrim-kulubu/
│   ├── fencing/
│   └── fencing-for-kids/
├── components/
│   ├── CustomCursor.tsx
│   ├── NeonSmokeBackground.tsx
│   ├── SeoLanding3D.tsx
│   └── SmoothScroll.tsx
├── styles/globals.css
├── public/                   # video, ses, logo, favicon
├── memory-bank/
└── package.json
```

## Tasarım Desenleri

### 1. GSAP Scroll hikayesi
- Ana sayfa section data + ScrollTrigger
- Video scrub (`fencing_scrub.mp4` vb.)

### 2. SEO landing
- `SeoLanding3D` ortak şablon
- TR/EN hedef kelime sayfaları

### 3. Smooth scroll + custom cursor
- `SmoothScroll` sarmalayıcı
- `CustomCursor` root layout'ta

### 4. Deploy koruması
- `.git` ve `.vercel` tasarım taşımalarında silinmez
- Canlı güncelleme yalnızca `main` push ile olur
