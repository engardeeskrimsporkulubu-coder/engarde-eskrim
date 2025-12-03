# Tech Context: Engarde Eskrim

## Teknolojiler

### Core
- **Next.js 14.2.0**: App Router kullanılıyor
- **React 18.3.0**: Client components
- **TypeScript 5.3.3**: Tip güvenliği

### Styling
- **Tailwind CSS 3.4.1**: Utility-first CSS framework
- **PostCSS 8.4.33**: CSS processing
- **Autoprefixer 10.4.17**: Browser compatibility

### Fonts
- **Cinzel Decorative**: Google Fonts (şövalye teması)
  - Weights: 400, 700, 900
  - Subset: latin
- **Inter**: Google Fonts (body text)
  - Subsets: latin, latin-ext

## Development Setup

### Kurulum
```bash
npm install
npm run dev
```

### Build
```bash
npm run build
npm start
```

### Port
- Development: `http://localhost:3001` (3000 portu başka proje tarafından kullanılıyor)

## Deployment

### Vercel
- **Production URL**: https://engarde-eskrim-jfl74mrki-ozcan-kutlus-projects.vercel.app
- **Team**: engardeeskrims-projects
- **Git Integration**: Aktif (otomatik deploy)
- **Build Command**: `next build` (otomatik)
- **Output Directory**: Next.js default

### GitHub
- **Repository**: https://github.com/engardeeskrimsporkulubu-coder/engarde-eskrim
- **Branch**: main
- **Private Repository**: Evet
- **Git Integration**: Vercel ile bağlı

## Dependencies

### Production
```json
{
  "next": "^14.2.0",
  "react": "^18.3.0",
  "react-dom": "^18.3.0"
}
```

### Development
```json
{
  "@types/node": "^20.11.0",
  "@types/react": "^18.2.0",
  "@types/react-dom": "^18.2.0",
  "autoprefixer": "^10.4.17",
  "postcss": "^8.4.33",
  "tailwindcss": "^3.4.1",
  "typescript": "^5.3.3"
}
```

## Configuration Files

### next.config.js
- Image optimization: AVIF, WebP
- Compression enabled

### tailwind.config.ts
- Content paths: app, pages, components
- Custom colors: background, foreground

### tsconfig.json
- Target: ES2020
- Module: esnext
- JSX: preserve
- Paths: @/* mapping

## Environment
- **Node.js**: (package.json'dan çıkarılamadı)
- **Package Manager**: npm
- **OS**: Windows 10/11

