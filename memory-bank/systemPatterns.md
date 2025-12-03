# System Patterns: Engarde Eskrim

## Mimari Yapı
```
EngardeEskrim/
├── app/
│   ├── layout.tsx       # SEO metadata, font tanımları
│   ├── page.tsx        # Ana sayfa, tüm section'lar
│   └── globals.css     # Global stiller, scrollbar
├── public/
│   └── EngardeEskrim.png  # Sabit arka plan resmi
├── memory-bank/        # Proje dokümantasyonu
└── package.json
```

## Tasarım Desenleri

### 1. Sabit Arka Plan Pattern
- `fixed` pozisyonlu div
- `backgroundAttachment: "fixed"`
- Parallax efekt: `transform: translateY(${scrollY * 0.3}px)`
- Overlay: `bg-black/40 backdrop-blur-[1px]`

### 2. Scroll Snap Pattern
- `snap-y snap-mandatory` (ana container)
- `snap-start snap-always` (her section)
- `h-screen` (her section tam ekran)

### 3. Glassmorphism Pattern
- `bg-white/10 backdrop-blur-md`
- `border border-white/20`
- Şeffaf arka planlar, blur efektleri

### 4. Menü Pattern
- `fixed left-4 top-1/2 -translate-y-1/2`
- Kare butonlar: `w-16 h-16`
- Her buton farklı renk
- Hover efektleri: `scale-110 brightness-125 shadow-lg`

### 5. Section Pattern
- `h-screen` (tam ekran)
- `bg-gray-900/40 backdrop-blur-sm` (şeffaf gri)
- İçerik ortalanmış: `flex items-center justify-center`

## Component Yapısı
- **Tek sayfa**: Tüm içerik `app/page.tsx` içinde
- **Client Component**: `"use client"` (scroll tracking için)
- **Fixed Elements**: Menü ve Footer sabit
- **Scrollable Content**: Section'lar scroll edilebilir

## State Management
- `useState` ile scroll pozisyonu takibi
- `useEffect` ile scroll event listener

## Styling Yaklaşımı
- **Tailwind CSS**: Utility-first yaklaşım
- **Custom Fonts**: Google Fonts (Cinzel Decorative, Inter)
- **CSS Variables**: Font değişkenleri
- **Inline Styles**: Dinamik değerler için (transform, fontFamily)

