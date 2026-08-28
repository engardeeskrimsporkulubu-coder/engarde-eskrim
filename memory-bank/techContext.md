# Tech Context: Engarde Eskrim

## Teknolojiler

### Core
- **Next.js 16**: App Router
- **React 19**: Client components
- **TypeScript 5**: Tip güvenliği

### Styling
- **Tailwind CSS 4**: `@tailwindcss/postcss`
- **PostCSS**: Tailwind v4 plugin

### Animasyon
- **GSAP 3** + `@gsap/react`
- **ScrollTrigger**

### Fonts
- **Inter**: body
- **Space Grotesk**: display

## Development Setup

```bash
npm install
npm run dev
```

### Build
```bash
npm run build
npm start
```

## Deployment

### Vercel
- GitHub `main` branch otomatik deploy
- `vercel.json`: security headers, `npm ci`, Next.js framework
- Domain: https://www.engardeeskrim.com (apex 307 → www)

### GitHub
- Repository: https://github.com/engardeeskrimsporkulubu-coder/engarde-eskrim
- Branch: main
- Private

## Dependencies (özet)

### Production
- next ^16.2.2
- react / react-dom 19.0.0
- gsap, @gsap/react

### Development
- tailwindcss ^4.0.0
- @tailwindcss/postcss
- typescript, eslint, eslint-config-next

## Configuration Files
- `next.config.mjs`
- `postcss.config.mjs`
- `tsconfig.json` — `@/*` path mapping
- `vercel.json`
- `.env.example` — `NEXT_PUBLIC_SITE_URL=https://www.engardeeskrim.com`

## Environment
- Package Manager: npm
- OS: Windows
