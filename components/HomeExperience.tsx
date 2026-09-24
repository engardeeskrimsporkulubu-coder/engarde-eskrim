'use client';

import { useEffect, useLayoutEffect, useMemo, useRef, useState, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CITY_NAV_LINKS } from '@/lib/seo';

gsap.registerPlugin(ScrollTrigger);

/* ════════════════════════════════════════════════════════════════════
   SECTION DATA
═══════════════════════════════════════════════════════════════════ */
type Lang = 'tr' | 'en';
const LANG_KEY = 'engarde-lang';

type SectionText = { title: string; subtitle: string; body: string; tag: string };

const SECTIONS: Array<{
  id: string;
  label: string;
  accent: string;
  bg: string;
  tr: SectionText;
  en: SectionText;
}> = [
  {
    id: 'blade',
    label: '01',
    accent: '#44bbff',
    bg: '#24395a',
    tr: {
      title: 'KILIÇ',
      subtitle: 'ADINI ÇAĞIRIR',
      body: 'Eskrim, kontrollü agresifliğin sanatıdır — hassasiyet çelik üzerinde hızla buluşur. Rakibi üç hamle önce oku, kılıç henüz hareket etmeden.',
      tag: 'EPE · FLÖRE · KILIÇ',
    },
    en: {
      title: 'THE BLADE',
      subtitle: 'CALLS YOUR NAME',
      body: 'Fencing is the art of controlled aggression — precision meets speed on steel. Read the opponent three moves before the blade moves.',
      tag: 'ÉPÉE · FOIL · SABRE',
    },
  },
  {
    id: 'speed',
    label: '02',
    accent: '#ff6688',
    bg: '#3a2440',
    tr: {
      title: 'DÜŞÜNCEDEN',
      subtitle: 'DAHA HIZLI',
      body: 'Bir eskrim dokunuşu 25ms\'de kaydedilir. İnsan gözü takip edemez. Sadece içgüdünün ötesine geçmiş zihin zamanında tepki verebilir.',
      tag: '25ms · 150km/h ATAK',
    },
    en: {
      title: 'FASTER THAN',
      subtitle: 'THOUGHT ITSELF',
      body: 'A fencing touch is recorded in 25ms. The human eye cannot follow. Only a mind beyond instinct can react in time.',
      tag: '25ms · 150km/h LUNGE',
    },
  },
  {
    id: 'rules',
    label: '03',
    accent: '#aa77ff',
    bg: '#312a4f',
    tr: {
      title: 'ONUR',
      subtitle: 'KURALLARA GÖRE',
      body: 'Flöre ve kılıçta önce saldıranın önceliği vardır. Elektronik yelekler her geçerli dokunuşu algılar. Üç dakika — 15 dokunuş — bir şampiyon.',
      tag: 'STRATEJİ · HASSASİYET · ZİHİN',
    },
    en: {
      title: 'HONOUR',
      subtitle: 'BY THE RULES',
      body: 'In foil and sabre, the attacker has priority. Electronic jackets register every valid touch. Three minutes — 15 touches — one champion.',
      tag: 'STRATEGY · PRECISION · MIND',
    },
  },
  {
    id: 'legacy',
    label: '04',
    accent: '#ffcc44',
    bg: '#4a3d24',
    tr: {
      title: 'ANTİK SANAT',
      subtitle: 'IŞIKTA YENİDEN',
      body: 'Rönesans Avrupası\'nın düello alanlarından Olimpiyat pistine — üç bin yıllık gelenek modern arenada karbon çeliğiyle hayat buluyor.',
      tag: '3000 YIL · 1896\'DAN BERİ OLİMPİYAT',
    },
    en: {
      title: 'ANCIENT ART',
      subtitle: 'REBORN IN LIGHT',
      body: 'From Renaissance dueling grounds to the Olympic piste — a three-thousand-year tradition lives again in carbon steel.',
      tag: '3000 YEARS · OLYMPIC SINCE 1896',
    },
  },
  {
    id: 'enter',
    label: '05',
    accent: '#44ffaa',
    bg: '#1f4938',
    tr: {
      title: 'EN GARDE',
      subtitle: 'PRÊTS — ALLEZ',
      body: 'Hakem elini kaldırır. Dünya tek bir ışık koridoruna daralır. Sadece sen, kılıç ve geri dönüşü olmayan o an vardır.',
      tag: 'YOLCULUĞUN ŞİMDİ BAŞLIYOR',
    },
    en: {
      title: 'EN GARDE',
      subtitle: 'PRÊTS — ALLEZ',
      body: 'The referee raises a hand. The world narrows to a corridor of light. Only you, the blade, and the moment that cannot be taken back.',
      tag: 'YOUR JOURNEY STARTS NOW',
    },
  },
];

const CONTACT_LINKS = {
  whatsapp: 'https://wa.me/905333916821?text=Merhaba%2C%206-14%20ya%C5%9F%20eskrim%20e%C4%9Fitimi%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.',
  phone: 'tel:+905333916821',
};

/* ════════════════════════════════════════════════════════════════════
   DOT NAV
═══════════════════════════════════════════════════════════════════ */
function DotNav({ active, show }: { active: number; show: boolean }) {
  return (
    <nav
      className="dot-nav"
      style={{ opacity: show ? 1 : 0, transition: 'opacity 0.6s ease', pointerEvents: show ? 'auto' : 'none' }}
    >
      {SECTIONS.map((s, i) => (
        <div
          key={s.id}
          className={`dot-item ${i === active ? 'dot-active' : ''}`}
          style={{ '--accent': s.accent } as React.CSSProperties}
          onClick={() => document.getElementById(`section-${i}`)?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="dot-circle" />
          <span className="dot-label">{s.label}</span>
        </div>
      ))}
    </nav>
  );
}

function TopNav({
  activeSection,
  onNavAction,
  language,
  onLanguageChange,
}: {
  activeSection: number;
  onNavAction: () => void;
  language: 'tr' | 'en';
  onLanguageChange: (language: 'tr' | 'en') => void;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const NAV_ITEMS = language === 'tr'
    ? [
        { label: 'KILIÇ', index: 0 },
        { label: 'HIZ', index: 1 },
        { label: 'KURALLAR', index: 2 },
        { label: 'MİRAS', index: 3 },
        { label: 'EN GARDE', index: 4 },
      ]
    : [
        { label: 'BLADE', index: 0 },
        { label: 'SPEED', index: 1 },
        { label: 'RULES', index: 2 },
        { label: 'LEGACY', index: 3 },
        { label: 'EN GARDE', index: 4 },
      ];

  const jumpToSection = useCallback((index: number) => {
    setMenuOpen(false);
    onNavAction();
    document.getElementById(`section-${index}`)?.scrollIntoView({ behavior: 'smooth' });
  }, [onNavAction]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <>
      <div className="vh-nav">
        <a href="/" className="vh-nav-logo">ENGARDE ESKRİM</a>
        <div className="vh-nav-links">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.label}
              className={`vh-nav-link ${activeSection === item.index ? 'vh-nav-link--active' : ''}`}
              onClick={() => jumpToSection(item.index)}
            >
              {item.label}
            </button>
          ))}
        </div>
        <div className="vh-lang-toggle" role="group" aria-label="Dil seçimi">
          <button
            className={`vh-lang-btn ${language === 'tr' ? 'is-active' : ''}`}
            onClick={() => onLanguageChange('tr')}
            aria-label="Turkce"
            aria-pressed={language === 'tr'}
          >
            <span className="vh-flag vh-flag--tr" aria-hidden="true" />
          </button>
          <button
            className={`vh-lang-btn ${language === 'en' ? 'is-active' : ''}`}
            onClick={() => onLanguageChange('en')}
            aria-label="English"
            aria-pressed={language === 'en'}
          >
            <span className="vh-flag vh-flag--us" aria-hidden="true" />
          </button>
        </div>
        <span className="vh-nav-badge">PARIS 2024</span>
        <button
          className={`vh-menu-btn ${menuOpen ? 'is-open' : ''}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label={language === 'tr' ? 'Menüyü aç' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`vh-mobile-overlay ${menuOpen ? 'is-open' : ''}`} onClick={() => setMenuOpen(false)} />
      <aside className={`vh-mobile-drawer ${menuOpen ? 'is-open' : ''}`}>
        <div className="vh-mobile-title">{language === 'tr' ? 'MENÜ' : 'MENU'}</div>
        <div className="vh-lang-toggle vh-lang-toggle--mobile" role="group" aria-label="Dil seçimi">
          <button
            className={`vh-lang-btn ${language === 'tr' ? 'is-active' : ''}`}
            onClick={() => onLanguageChange('tr')}
            aria-label="Turkce"
            aria-pressed={language === 'tr'}
          >
            <span className="vh-flag vh-flag--tr" aria-hidden="true" />
          </button>
          <button
            className={`vh-lang-btn ${language === 'en' ? 'is-active' : ''}`}
            onClick={() => onLanguageChange('en')}
            aria-label="English"
            aria-pressed={language === 'en'}
          >
            <span className="vh-flag vh-flag--us" aria-hidden="true" />
          </button>
        </div>
        <div className="vh-mobile-links">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.label}
              className={`vh-mobile-link ${activeSection === item.index ? 'is-active' : ''}`}
              onClick={() => jumpToSection(item.index)}
            >
              {item.label}
            </button>
          ))}
        </div>
        <button className="vh-mobile-cta" onClick={() => jumpToSection(4)}>{language === 'tr' ? 'EN GARDE BAŞLAT' : 'START EN GARDE'}</button>
      </aside>
    </>
  );
}

const SOCIAL_LINKS = [
  { name: 'Instagram', href: 'https://www.instagram.com/engardeeskrim/' },
  { name: 'X', href: 'https://x.com/engardeeskrim' },
  { name: 'YouTube', href: 'https://www.youtube.com/@engardeeskrim' },
  { name: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61572166425507' },
  { name: 'WhatsApp', href: 'https://wa.me/905333916821' },
];

function SocialDock() {
  const renderIcon = (name: string) => {
    if (name === 'Instagram') {
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="4" y="4" width="16" height="16" rx="5" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <circle cx="17.2" cy="6.8" r="1.2" fill="currentColor" />
        </svg>
      );
    }
    if (name === 'X') {
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M5 4.5h3.7l3.8 5.3 4.4-5.3H20l-6.2 7.3L20.4 20h-3.7l-4.3-6-5.1 6H4l7-8.2L5 4.5Z" fill="currentColor" />
        </svg>
      );
    }
    if (name === 'YouTube') {
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="3" y="6" width="18" height="12" rx="4" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <path d="M10 9.3L15.4 12 10 14.7V9.3Z" fill="currentColor" />
        </svg>
      );
    }
    if (name === 'Facebook') {
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M14.2 8.2h2.7V5h-2.7c-2.9 0-4.7 1.8-4.7 4.8v2H7v3.1h2.5V21h3.2v-6.1h2.8l.5-3.1h-3.3V9.9c0-1 .5-1.7 1.5-1.7Z" fill="currentColor" />
        </svg>
      );
    }
    if (name === 'WhatsApp') {
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.4 11.8c0 4.6-3.8 8.4-8.4 8.4-1.4 0-2.8-.3-4-.9L3.6 20.4l1.2-4.2c-.7-1.3-1-2.8-1-4.3 0-4.6 3.8-8.4 8.4-8.4s8.2 3.7 8.2 8.3Zm-8.4-6.8c-3.8 0-6.9 3.1-6.9 6.9 0 1.4.4 2.7 1.2 3.8l.2.3-.7 2.6 2.6-.7.3.2c1.1.7 2.3 1.1 3.6 1.1 3.8 0 6.9-3.1 6.9-6.9S15.8 5 12 5Zm3.9 8.9c-.2-.1-1.2-.6-1.4-.7-.2-.1-.3-.1-.4.1-.1.2-.5.7-.6.8-.1.1-.2.1-.4 0-.2-.1-.8-.3-1.5-.9-.6-.5-1-1.1-1.1-1.3-.1-.2 0-.3.1-.4.1-.1.2-.2.3-.3.1-.1.1-.2.2-.3.1-.1 0-.2 0-.3 0-.1-.4-1-.6-1.4-.2-.4-.3-.3-.4-.3h-.4c-.1 0-.3.1-.5.2-.2.2-.6.6-.6 1.5s.6 1.7.7 1.8c.1.1 1.2 1.9 3 2.6.4.2.8.3 1.1.4.5.1 1 .1 1.3.1.4-.1 1.2-.5 1.4-1 .2-.5.2-.9.1-1 0-.1-.2-.1-.4-.2Z" fill="currentColor" />
        </svg>
      );
    }
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    );
  };

  return (
    <aside className="social-dock" aria-label="Sosyal medya paneli">
      <div className="social-dock-panel">
        {SOCIAL_LINKS.map((item) => (
          <a key={item.name} className={`social-dock-item social-dock-item--${item.name.toLowerCase().replace(/[^a-z]+/g, '-')}`} href={item.href} target="_blank" rel="noreferrer" aria-label={item.name}>
            <span className="social-dock-icon">{renderIcon(item.name)}</span>
          </a>
        ))}
      </div>
    </aside>
  );
}

/* ════════════════════════════════════════════════════════════════════
   VIDEO HERO — Apple-style scroll-scrub: scroll = video frame
═══════════════════════════════════════════════════════════════════ */

// Text chapters appear at specific video progress windows
const CHAPTERS = [
  {
    from: 0.05, to: 0.26, color: '#ffaa33', grad: '120deg, #ffaa33 0%, #ffdd55 100%',
    tr: { badge: 'OLİMPİYAT SPORU · 1896', line1: 'EN', line2: 'GARDE', sub: 'Çelik buluştuğu an stratejiyle. İçgüdü sanat olduğu an.' },
    en: { badge: 'OLYMPIC SPORT · 1896', line1: 'EN', line2: 'GARDE', sub: 'Where steel meets strategy. The moment instinct becomes art.' },
  },
  {
    from: 0.30, to: 0.50, color: '#ffcc44', grad: '135deg, #ffcc44 0%, #ff8844 100%',
    tr: { badge: '25ms · 150km/h ATAK', line1: 'DÜŞÜNCEDEN', line2: 'DAHA HIZLI', sub: 'Bir dokunuş 25 milisaniyede algılanır. İnsan gözü takip edemez.' },
    en: { badge: '25ms · 150km/h LUNGE', line1: 'FASTER', line2: 'THAN THOUGHT', sub: 'A touch is registered in 25 milliseconds. The human eye cannot follow.' },
  },
  {
    from: 0.54, to: 0.74, color: '#ff8844', grad: '110deg, #ff8844 0%, #ffbb33 100%',
    tr: { badge: 'EPE · FLÖRE · KILIÇ', line1: 'ÜÇ', line2: 'SİLAH', sub: 'Her silah, farklı bir taktik düşünce biçimi gerektirir.' },
    en: { badge: 'ÉPÉE · FOIL · SABRE', line1: 'THREE', line2: 'WEAPONS', sub: 'Each weapon demands a different way of thinking.' },
  },
  {
    from: 0.77, to: 0.94, color: '#ffdd55', grad: '125deg, #ffdd55 0%, #ffaa33 100%',
    tr: { badge: '3000 YIL · PARIS 2024', line1: 'ÇELİĞİN', line2: 'MİRASI', sub: 'Rönesans düello alanlarından Olimpiyat pistine — çelik hiç susmadı.' },
    en: { badge: '3000 YEARS · PARIS 2024', line1: 'LEGACY', line2: 'OF STEEL', sub: 'From Renaissance dueling grounds to the Olympic piste — steel never went silent.' },
  },
];

function VideoHero({ onPast, language }: { onPast: (past: boolean) => void; language: Lang }) {
  const scrollZoneRef   = useRef<HTMLDivElement>(null);
  const stickyRef      = useRef<HTMLDivElement>(null);
  const videoRef       = useRef<HTMLVideoElement>(null);
  const progressFillRef = useRef<HTMLDivElement>(null);
  const progressNumRef = useRef<HTMLSpanElement>(null);
  const exitRef        = useRef<HTMLDivElement>(null);
  const hintRef        = useRef<HTMLDivElement>(null);
  const chapterRefs       = useRef<(HTMLDivElement | null)[]>([]);
  const tiltRef           = useRef<HTMLDivElement>(null);
  const flareRef          = useRef<HTMLDivElement>(null);
  const particleCanvasRef = useRef<HTMLCanvasElement>(null);

  useLayoutEffect(() => {
    const video = videoRef.current!;
    const sticky = stickyRef.current!;
    const scrollZone = scrollZoneRef.current!;
    let unmounted = false;
    let ptRaf = 0;
    let scrubRaf = 0;

    // ── targetTime: set by scroll; smoothedTime: lerped toward target each RAF frame ──
    let targetTime = 0.001;
    let smoothedTime = 0.001;
    const isMobile = window.matchMedia('(max-width: 768px), (hover: none) and (pointer: coarse)').matches;
    // Desktop: 0.09 ≈ 200ms settle. Mobile finger scroll needs a tighter lock.
    const LERP = isMobile ? 0.18 : 0.09;
    const SEEK_EPS = isMobile ? 0.012 : 0.008;

    // ── Video setup ───────────────────────────────────────────────
    const markVideoReady = () => video.classList.add('is-ready');
    video.addEventListener('loadeddata', markVideoReady);
    video.addEventListener('canplay', markVideoReady);
    video.src = isMobile ? '/fencing_scrub_mobile.mp4' : '/fencing_scrub.mp4';
    video.load();

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.loop = false;
    video.preload = 'auto';
    video.setAttribute('playsinline', '');
    video.setAttribute('webkit-playsinline', '');
    video.setAttribute('muted', '');

    const onMeta = () => {
      if (unmounted) return;
      video.currentTime = 0.001;
      smoothedTime = 0.001;
    };
    if (video.readyState >= 1) onMeta();
    else video.addEventListener('loadedmetadata', onMeta, { once: true });

    // iOS/Android: paused currentTime jumps feel stepped. Keep decoder warm at rate 0.
    let decoderReady = !isMobile;
    const holdDecoder = () => {
      video.muted = true;
      video.playbackRate = 0;
    };
    const unlockDecoder = () => {
      if (decoderReady || unmounted) return;
      decoderReady = true;
      const playAttempt = video.play();
      if (playAttempt && typeof playAttempt.then === 'function') {
        void playAttempt.then(holdDecoder).catch(() => { video.pause(); });
      } else {
        holdDecoder();
      }
    };
    if (isMobile) {
      window.addEventListener('touchstart', unlockDecoder, { once: true, passive: true });
      window.addEventListener('pointerdown', unlockDecoder, { once: true, passive: true });
    } else {
      video.pause();
    }

    ScrollTrigger.config({ ignoreMobileResize: true });

    // ── UI init ───────────────────────────────────────────────────
    chapterRefs.current.forEach(el => { if (el) el.classList.remove('vh-chapter--active'); });
    chapterRefs.current[0]?.classList.add('vh-chapter--active');
    gsap.set(exitRef.current, { opacity: 0 });
    gsap.set(sticky, { autoAlpha: 1 });
    video.style.opacity = '1';
    video.style.visibility = 'visible';

    // ── RAF seek loop: lerp smoothedTime → targetTime, seek only when browser idle ─
    // Lerping means every frame is a tiny step, never a large jump → smooth scrub.
    const seekLoop = () => {
      if (unmounted) return;
      // Always lerp, even while browser is seeking
      smoothedTime += (targetTime - smoothedTime) * LERP;
      if (!video.seeking && video.duration) {
        if (Math.abs(video.currentTime - smoothedTime) > SEEK_EPS) {
          const mobileVideo = video as HTMLVideoElement & { fastSeek?: (time: number) => void };
          if (isMobile && typeof mobileVideo.fastSeek === 'function') {
            try { mobileVideo.fastSeek(smoothedTime); }
            catch { video.currentTime = smoothedTime; }
          } else {
            video.currentTime = smoothedTime;
          }
        }
      }
      scrubRaf = requestAnimationFrame(seekLoop);
    };
    scrubRaf = requestAnimationFrame(seekLoop);

    // ── updateAll: updates targetTime + UI from 0–1 progress ─────
    const updateAll = (p: number) => {
      if (unmounted) return;
      onPast(p > 0.99);
      if (isMobile && p > 0.002) unlockDecoder();

      // Set target — RAF loop will actually seek
      if (video.duration) {
        targetTime = Math.min(Math.max(p * video.duration, 0.001), video.duration - 0.05);
      }

      if (progressFillRef.current) {
        progressFillRef.current.style.transform = `scaleX(${p}) translateZ(0)`;
      }

      CHAPTERS.forEach((ch, i) => {
        const el = chapterRefs.current[i];
        if (!el) return;
        el.classList.toggle('vh-chapter--active', p >= ch.from && p <= ch.to);
      });

      if (exitRef.current) {
        const FADE_START = 0.88;
        const alpha = p >= FADE_START ? (p - FADE_START) / (1 - FADE_START) : 0;
        exitRef.current.style.opacity = String(Math.min(1, alpha));
      }

      if (hintRef.current) {
        gsap.to(hintRef.current, { opacity: p > 0.02 ? 0 : 1, y: p > 0.02 ? 10 : 0, duration: 0.3, overwrite: 'auto' });
      }
    };

    // ── ScrollTrigger (no pin — CSS sticky handles the visual pin) ─
    const st = ScrollTrigger.create({
      trigger: scrollZone,
      start: 'top top',
      end: 'bottom bottom',
      onUpdate: (self) => updateAll(self.progress),
    });

    // ── Feature 1 + 4 + 5: desktop-only extras (tilt / flare / particles) ─
    let onMouseMove: ((e: MouseEvent) => void) | null = null;
    let onMouseEnter: (() => void) | null = null;
    let onMouseLeave: (() => void) | null = null;
    let resizePt: (() => void) | null = null;

    if (!isMobile) {
      gsap.set(tiltRef.current, { transformPerspective: 1400 });
      const qx = gsap.quickTo(tiltRef.current!, 'rotationX', { duration: 1.0, ease: 'power3.out' });
      const qy = gsap.quickTo(tiltRef.current!, 'rotationY', { duration: 1.0, ease: 'power3.out' });
      const flareEl = flareRef.current!;
      gsap.set(flareEl, { xPercent: -50, yPercent: -50 });

      onMouseMove = (e: MouseEvent) => {
        const rect = sticky.getBoundingClientRect();
        const nx = (e.clientX - rect.left) / rect.width;
        const ny = (e.clientY - rect.top) / rect.height;
        qx(-(ny - 0.5) * 7);
        qy((nx - 0.5) * 9);
        gsap.to(flareEl, { x: nx * rect.width, y: ny * rect.height, duration: 0.65, ease: 'power2.out', overwrite: 'auto' });
      };
      onMouseEnter = () => gsap.to(flareEl, { opacity: 1, duration: 0.4 });
      onMouseLeave = () => {
        qx(0); qy(0);
        gsap.to(flareEl, { opacity: 0, duration: 0.6 });
      };
      sticky.addEventListener('mousemove', onMouseMove);
      sticky.addEventListener('mouseenter', onMouseEnter);
      sticky.addEventListener('mouseleave', onMouseLeave);

      const canvas = particleCanvasRef.current!;
      const ctx = canvas.getContext('2d')!;
      resizePt = () => {
        const w = canvas.clientWidth || window.innerWidth;
        const h = canvas.clientHeight || window.innerHeight;
        if (canvas.width !== w) canvas.width = w;
        if (canvas.height !== h) canvas.height = h;
      };
      resizePt();
      window.addEventListener('resize', resizePt);
      type Ptcl = { x: number; y: number; z: number; vx: number; vy: number };
      const pts: Ptcl[] = Array.from({ length: 60 }, () => ({
        x: Math.random(), y: Math.random(),
        z: 0.15 + Math.random() * 0.85,
        vx: (Math.random() - 0.5) * 0.00007,
        vy: -(0.00003 + Math.random() * 0.00008),
      }));
      const drawPts = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        pts.forEach(p => {
          p.x += p.vx; p.y += p.vy;
          if (p.y < -0.01) { p.y = 1.01; p.x = Math.random(); }
          if (p.x < -0.01) p.x = 1.01;
          if (p.x > 1.01)  p.x = -0.01;
          const r = 0.4 + p.z * 2.2;
          ctx.beginPath();
          ctx.arc(p.x * canvas.width, p.y * canvas.height, r, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(210,228,255,${(p.z * 0.15).toFixed(3)})`;
          ctx.fill();
        });
        ptRaf = requestAnimationFrame(drawPts);
      };
      ptRaf = requestAnimationFrame(drawPts);
    }

    return () => {
      unmounted = true;
      st.kill();
      cancelAnimationFrame(scrubRaf);
      cancelAnimationFrame(ptRaf);
      video.pause();
      video.playbackRate = 1;
      video.removeEventListener('loadeddata', markVideoReady);
      video.removeEventListener('canplay', markVideoReady);
      video.removeEventListener('loadedmetadata', onMeta);
      if (onMouseMove) sticky.removeEventListener('mousemove', onMouseMove);
      if (onMouseEnter) sticky.removeEventListener('mouseenter', onMouseEnter);
      if (onMouseLeave) sticky.removeEventListener('mouseleave', onMouseLeave);
      if (resizePt) window.removeEventListener('resize', resizePt);
      window.removeEventListener('touchstart', unlockDecoder);
      window.removeEventListener('pointerdown', unlockDecoder);
    };
  }, [onPast]);

  return (
    <div ref={scrollZoneRef} className="vh-scroll-zone">
    <div ref={stickyRef} className="vh-sticky">

      {/* ── Video fullscreen ── */}
      <video
        ref={videoRef}
        muted
        playsInline
        preload="auto"
        poster="/fencing_scrub_poster.webp"
        className="vh-video"
        disablePictureInPicture
        controls={false}
      />

      {/* ── Cinematic vignette ── */}
      <div className="vh-vignette" />

      {/* ── Depth particles (Feature 5) ── */}
      <canvas
        ref={particleCanvasRef}
        className="vh-particle-canvas"
        width={1}
        height={1}
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          contain: 'strict',
        }}
      />

      {/* ── Mouse lens flare (Feature 4) ── */}
      <div ref={flareRef} className="vh-flare" />

      {/* ── Apple-style chapter overlays — wrapped in tilt layer (Feature 1) ── */}
      <div ref={tiltRef} className="vh-tilt-layer">
        {CHAPTERS.map((ch, i) => (
          <div
            key={i}
            ref={el => { chapterRefs.current[i] = el; }}
            className="vh-chapter"
          >
            <div className="vh-badge" style={{ borderColor: ch.color + '40', color: ch.color }}>
              <span className="badge-dot" style={{ background: ch.color }} />
              {ch[language].badge}
            </div>
            <h2 className="vh-title" style={{ '--ch-grad': ch.grad } as React.CSSProperties}>
              <span className="vh-line">{ch[language].line1}</span>
              <span className="vh-line vh-line-accent">{ch[language].line2}</span>
            </h2>
            <p className="vh-sub">{ch[language].sub}</p>
            <div className="vh-chapter-bar" style={{ background: `linear-gradient(90deg, ${ch.color}, transparent)` }} />
          </div>
        ))}
      </div>

      {/* ── Progress bar (bottom) ── */}
      <div className="vh-progress-wrap">
        <div ref={progressFillRef} className="vh-progress-fill" />
      </div>

      {/* ── Exit overlay ── */}
      <div ref={exitRef} className="vh-exit" />

      {/* ── Scroll hint ── */}
      <div ref={hintRef} className="vh-hint">
        <div className="vh-down-arrow" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M5 9.5L12 16.5L19 9.5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div className="vh-hint-icon">
          <svg width="20" height="30" viewBox="0 0 20 30" fill="none">
            <rect x="1" y="1" width="18" height="28" rx="9" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5"/>
            <circle className="vh-hint-dot" cx="10" cy="8" r="3" fill="rgba(255,255,255,0.6)"/>
          </svg>
        </div>
        <span className="vh-hint-label">{language === 'tr' ? 'KEŞFETMEK İÇİN KAYDIR' : 'SCROLL TO EXPLORE'}</span>
      </div>

    </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════════
   WEAPON CARDS
═══════════════════════════════════════════════════════════════════ */
const WEAPONS = {
  tr: [
    {
      name: 'EPE',
      target: 'Tüm Vücut',
      weight: '<770g',
      blade: '≤90cm',
      total: '≤110cm',
      desc: 'Düello kılıcı. Her dokunuş geçerlidir. Öncelik kuralı yoktur — hız ve strateji öne çıkar.',
      color: '#44bbff',
    },
    {
      name: 'FLÖRE',
      target: 'Sadece Gövde',
      weight: '<500g',
      blade: '≤90cm',
      total: '≤110cm',
      desc: 'Eğitim kılıcı. Öncelik kuralı taktik düşünceyi ödüllendirir.',
      color: '#aa77ff',
    },
    {
      name: 'KILIÇ',
      target: 'Bel Üstü',
      weight: '<500g',
      blade: '≤88cm',
      total: '≤105cm',
      desc: 'Süvari kılıcı. Kesen dokunuşlar. Patlayıcı hız — en agresif disiplin.',
      color: '#ff6688',
    },
  ],
  en: [
    {
      name: 'ÉPÉE',
      target: 'Whole Body',
      weight: '<770g',
      blade: '≤90cm',
      total: '≤110cm',
      desc: 'The dueling sword. Every touch counts. No right-of-way — speed and strategy decide.',
      color: '#44bbff',
    },
    {
      name: 'FOIL',
      target: 'Torso Only',
      weight: '<500g',
      blade: '≤90cm',
      total: '≤110cm',
      desc: 'The teaching sword. Priority rewards tactical thinking.',
      color: '#aa77ff',
    },
    {
      name: 'SABRE',
      target: 'Above the Waist',
      weight: '<500g',
      blade: '≤88cm',
      total: '≤105cm',
      desc: 'The cavalry blade. Cutting touches. Explosive speed — the most aggressive weapon.',
      color: '#ff6688',
    },
  ],
};
function WeaponCards({ language }: { language: Lang }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    gsap.fromTo(ref.current!.querySelectorAll('.wc'),
      { opacity: 0, y: 48, rotationX: 14 },
      { opacity: 1, y: 0, rotationX: 0, duration: 0.8, ease: 'expo.out', stagger: 0.13,
        scrollTrigger: { trigger: ref.current, start: 'top 82%', toggleActions: 'play none none reverse' } }
    );
    // Feature 3: 3D hover tilt
    const allowPointerTilt = typeof window !== 'undefined' && window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const cards = Array.from(ref.current!.querySelectorAll<HTMLElement>('.wc'));
    gsap.set(cards, { transformPerspective: 900 });
    cards.forEach(card => {
      card.style.setProperty('--mx', '50%');
      card.style.setProperty('--my', '50%');
    });

    if (!allowPointerTilt) {
      return;
    }

    const cleanups = cards.map(card => {
      const onEnter = () => card.classList.add('wc-hovered');
      const onMove = (e: MouseEvent) => {
        const r = card.getBoundingClientRect();
        const nx = (e.clientX - r.left) / r.width - 0.5;
        const ny = (e.clientY - r.top) / r.height - 0.5;
        card.style.setProperty('--mx', `${(nx + 0.5) * 100}%`);
        card.style.setProperty('--my', `${(ny + 0.5) * 100}%`);
        gsap.to(card, { rotationX: -ny * 8, rotationY: nx * 11, y: -2, duration: 0.28, ease: 'power2.out', overwrite: 'auto' });
      };
      const onLeave = () => {
        card.classList.remove('wc-hovered');
        card.style.setProperty('--mx', '50%');
        card.style.setProperty('--my', '50%');
        gsap.to(card, { rotationX: 0, rotationY: 0, y: 0, duration: 0.52, ease: 'power3.out', overwrite: 'auto' });
      };
      card.addEventListener('mouseenter', onEnter);
      card.addEventListener('mousemove', onMove);
      card.addEventListener('mouseleave', onLeave);
      return () => {
        card.removeEventListener('mouseenter', onEnter);
        card.removeEventListener('mousemove', onMove);
        card.removeEventListener('mouseleave', onLeave);
      };
    });
    return () => cleanups.forEach(c => c());
  }, []);
  const labels = language === 'tr'
    ? { weight: 'Ağırlık', blade: 'Bıçak', total: 'Toplam', target: 'Hedef' }
    : { weight: 'Weight', blade: 'Blade', total: 'Total', target: 'Target' };
  return (
    <div ref={ref} className="weapon-cards">
      {WEAPONS[language].map(w => (
        <div key={w.name} className="wc" style={{ '--wc': w.color } as React.CSSProperties}>
          <div className="wc-name">{w.name}</div>
          <div className="wc-stats-row">
            <div className="wc-s"><span className="wcs-v">{w.weight}</span><span className="wcs-l">{labels.weight}</span></div>
            <div className="wc-s"><span className="wcs-v">{w.blade}</span><span className="wcs-l">{labels.blade}</span></div>
            <div className="wc-s"><span className="wcs-v">{w.total}</span><span className="wcs-l">{labels.total}</span></div>
            <div className="wc-s"><span className="wcs-v wcs-v--target">{w.target}</span><span className="wcs-l">{labels.target}</span></div>
          </div>
          <p className="wc-desc">{w.desc}</p>
          <div className="wc-bar" />
        </div>
      ))}
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════════
   STAT COUNTERS
═══════════════════════════════════════════════════════════════════ */
const STATS = {
  tr: [
    { end: 25, suffix: 'ms', label: 'Dokunuş Algılama', desc: 'Elektronik sistem her dokunuşu 25ms içinde kaydeder' },
    { end: 150, suffix: 'km/h', label: 'Atak Hızı', desc: 'Bir hamlede kılıç ucunun tepe hızı' },
    { end: 3000, suffix: '+', label: 'Yıllık Tarih', desc: 'Antik kılıç sanatlarından Olimpiyat sporuna' },
    { end: 157, suffix: '', label: 'Ülke Yarışıyor', desc: 'En küresel temsile sahip sporlardan biri' },
  ],
  en: [
    { end: 25, suffix: 'ms', label: 'Touch Detection', desc: 'The electronic system records every touch within 25ms' },
    { end: 150, suffix: 'km/h', label: 'Attack Speed', desc: 'Peak tip speed in a single lunge' },
    { end: 3000, suffix: '+', label: 'Years of History', desc: 'From ancient sword arts to an Olympic sport' },
    { end: 157, suffix: '', label: 'Nations Compete', desc: 'One of the most globally represented sports' },
  ],
};
function StatCounters({ language }: { language: Lang }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const animateCounters = () => {
      container.querySelectorAll<HTMLElement>('.sc-num').forEach((el, i) => {
        const s = STATS[language][i]; const obj = { val: 0 };
        gsap.to(obj, { val: s.end, duration: 2, ease: 'power2.out', delay: i * 0.14,
          onUpdate: () => { el.textContent = Math.round(obj.val).toLocaleString() + s.suffix; } });
      });
      gsap.fromTo(container.querySelectorAll('.sc-item'),
        { opacity: 0, y: 38 }, { opacity: 1, y: 0, duration: 0.7, stagger: 0.13, ease: 'power3.out' });
    };

    const trigger = ScrollTrigger.create({
      trigger: container, start: 'top 76%',
      onEnter: animateCounters,
      onEnterBack: animateCounters,
    });

    // Feature 3: 3D hover tilt
    const cards = Array.from(container.querySelectorAll<HTMLElement>('.sc-item'));
    gsap.set(cards, { transformPerspective: 900 });
    const cleanups = cards.map(card => {
      const onMove = (e: MouseEvent) => {
        const r = card.getBoundingClientRect();
        const nx = (e.clientX - r.left) / r.width - 0.5;
        const ny = (e.clientY - r.top) / r.height - 0.5;
        gsap.to(card, { rotationX: -ny * 15, rotationY: nx * 20, duration: 0.35, ease: 'power2.out', overwrite: 'auto' });
      };
      const onLeave = () => gsap.to(card, { rotationX: 0, rotationY: 0, duration: 0.55, ease: 'power3.out', overwrite: 'auto' });
      card.addEventListener('mousemove', onMove);
      card.addEventListener('mouseleave', onLeave);
      return () => { card.removeEventListener('mousemove', onMove); card.removeEventListener('mouseleave', onLeave); };
    });
    return () => {
      trigger.kill();
      cleanups.forEach(c => c());
    };
  }, [language]);
  return (
    <div ref={ref} className="stat-counters">
      {STATS[language].map((s, i) => (
        <div key={i} className="sc-item">
          <div className="sc-num">0{s.suffix}</div>
          <div className="sc-label">{s.label}</div>
          <div className="sc-desc">{s.desc}</div>
        </div>
      ))}
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════════
   RULES GRID
═══════════════════════════════════════════════════════════════════ */
const RULES = {
  tr: [
    { icon: '⚡', title: 'Öncelik Kuralı', desc: 'Flöre ve kılıçta önce saldıran tarafın önceliği vardır. Eş zamanlı ataklarda bu kural devreye girer.' },
    { icon: '🎯', title: 'Hedef Bölgeler', desc: 'Her silahın geçerli hedef bölgesi farklıdır. Epe: tüm vücut. Flöre: gövde. Kılıç: bel üzeri.' },
    { icon: '🔋', title: 'Elektronik Skorlama', desc: 'İletken yelekler ve kılıç sensörleri her geçerli dokunuşu elektronik hassasiyetle algılar.' },
    { icon: '⏱', title: 'Üç Dakika', desc: 'Bir maç 3 dakika gerçek süredir. İlk 15 dokunuşu yapan kazanır.' },
  ],
  en: [
    { icon: '⚡', title: 'Right of Way', desc: 'In foil and sabre the attacker has priority. Simultaneous attacks are decided by this rule.' },
    { icon: '🎯', title: 'Target Areas', desc: 'Each weapon has a different valid target. Épée: whole body. Foil: torso. Sabre: above the waist.' },
    { icon: '🔋', title: 'Electronic Scoring', desc: 'Lame jackets and blade sensors register every valid touch with electronic precision.' },
    { icon: '⏱', title: 'Three Minutes', desc: 'A bout lasts three minutes of fencing time. First to 15 touches wins.' },
  ],
};
function RulesGrid({ language }: { language: Lang }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    gsap.fromTo(ref.current!.querySelectorAll('.rc'),
      { opacity: 0, scale: 0.88, y: 26 },
      { opacity: 1, scale: 1, y: 0, duration: 0.7, stagger: 0.11, ease: 'back.out(1.3)',
        scrollTrigger: { trigger: ref.current, start: 'top 79%', toggleActions: 'play none none reverse' } }
    );
    // Feature 3: 3D hover tilt
    const cards = Array.from(ref.current!.querySelectorAll<HTMLElement>('.rc'));
    gsap.set(cards, { transformPerspective: 800 });
    const cleanups = cards.map(card => {
      const onMove = (e: MouseEvent) => {
        const r = card.getBoundingClientRect();
        const nx = (e.clientX - r.left) / r.width - 0.5;
        const ny = (e.clientY - r.top) / r.height - 0.5;
        gsap.to(card, { rotationX: -ny * 14, rotationY: nx * 18, duration: 0.35, ease: 'power2.out', overwrite: 'auto' });
      };
      const onLeave = () => gsap.to(card, { rotationX: 0, rotationY: 0, duration: 0.55, ease: 'power3.out', overwrite: 'auto' });
      card.addEventListener('mousemove', onMove);
      card.addEventListener('mouseleave', onLeave);
      return () => { card.removeEventListener('mousemove', onMove); card.removeEventListener('mouseleave', onLeave); };
    });
    return () => cleanups.forEach(c => c());
  }, []);
  return (
    <div ref={ref} className="rules-grid">
      {RULES[language].map((r, i) => (
        <div key={i} className="rc">
          <span className="rc-icon">{r.icon}</span>
          <h4 className="rc-title">{r.title}</h4>
          <p className="rc-desc">{r.desc}</p>
        </div>
      ))}
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════════
   HISTORY TIMELINE
═══════════════════════════════════════════════════════════════════ */
const TIMELINE = {
  tr: [
    { year: '1400s', event: 'Rönesans ustaları Almanya ve İtalya\'da ilk eskrim okullarını kurdu' },
    { year: '1763', event: 'La Boëssière tel örgü maskeyi icat etti — tam hızda antrenman mümkün oldu' },
    { year: '1861', event: 'Fransa\'da ilk ulusal eskrim federasyonu kuruldu' },
    { year: '1896', event: 'Eskrim Atina\'daki ilk Olimpiyat oyunlarında programa girdi' },
    { year: '1936', event: 'Epe elektronik skorlama devreye girdi — tartışmalar sona erdi' },
    { year: '2024', event: 'Paris Olimpiyatları: eskrim doğduğu yerde 2,5 milyar izleyiciye sunuldu' },
  ],
  en: [
    { year: '1400s', event: 'Renaissance masters opened the first fencing schools in Germany and Italy' },
    { year: '1763', event: 'La Boëssière invented the wire-mesh mask — full-speed training became possible' },
    { year: '1861', event: 'France founded the first national fencing federation' },
    { year: '1896', event: 'Fencing entered the program of the first modern Olympics in Athens' },
    { year: '1936', event: 'Épée electronic scoring arrived — arguments over hits ended' },
    { year: '2024', event: 'Paris Olympics: fencing returned home to 2.5 billion viewers' },
  ],
};
function HistoryTimeline({ language }: { language: Lang }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    gsap.fromTo(ref.current!.querySelectorAll('.tl'),
      { opacity: 0, x: -44 },
      { opacity: 1, x: 0, duration: 0.62, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 76%', toggleActions: 'play none none reverse' } }
    );
  }, []);
  return (
    <div ref={ref} className="hist-timeline">
      {TIMELINE[language].map((t, i) => (
        <div key={i} className="tl">
          <div className="tl-year">{t.year}</div>
          <div className="tl-mid"><div className="tl-dot" />{i < TIMELINE[language].length - 1 && <div className="tl-line" />}</div>
          <div className="tl-event">{t.event}</div>
        </div>
      ))}
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════════
   ARENA QUOTE
═══════════════════════════════════════════════════════════════════ */
function ArenaCta({ language }: { language: Lang }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    gsap.fromTo(ref.current!.querySelectorAll('.ae'),
      { opacity: 0, y: 32 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.16, ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 78%', toggleActions: 'play none none reverse' } }
    );
  }, []);
  return (
    <div ref={ref} className="arena-cta">
      <div className="ae arena-quote">"The sword is the soul of the warrior."</div>
      <div className="ae arena-author">{language === 'tr' ? '— Miyamoto Musashi, Beş Çember Kitabı' : '— Miyamoto Musashi, The Book of Five Rings'}</div>
      <div className="ae arena-badges">
        {['OLYMPIQUE', 'PARIS 2024', 'FIE OFFICIAL', 'WORLD CLASS'].map(b => <span key={b} className="arena-badge">{b}</span>)}
      </div>
      <div className="ae" style={{ height: '1px', background: 'rgba(255,255,255,0.06)', margin: '16px 0' }} />
      <p className="ae arena-fin">{language === 'tr' ? <>Eskrim sadece bir spor değil — bir yaşam felsefesidir.<br />Disiplin, özgüven ve zarafet bir arada.</> : <>Fencing is not only a sport — it is a way of living.<br />Discipline, confidence, and grace together.</>}</p>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════════
   SECTION EXTRAS MAP
═══════════════════════════════════════════════════════════════════ */
function extraFor(id: string, language: Lang) {
  switch (id) {
    case 'blade':
      return <WeaponCards language={language} />;
    case 'speed':
      return <StatCounters language={language} />;
    case 'rules':
      return <RulesGrid language={language} />;
    case 'legacy':
      return <HistoryTimeline language={language} />;
    case 'enter':
      return <ArenaCta language={language} />;
    default:
      return null;
  }
}

/* ════════════════════════════════════════════════════════════════════
   SECTION PANEL
═══════════════════════════════════════════════════════════════════ */
function SectionPanel({ section, index, language }: { section: typeof SECTIONS[number]; index: number; language: Lang }) {
  const panelRef    = useRef<HTMLDivElement>(null);
  const wipeRef     = useRef<HTMLDivElement>(null);
  const pauseRef    = useRef<HTMLDivElement>(null);
  const lineRef     = useRef<HTMLDivElement>(null);
  const labelRef    = useRef<HTMLSpanElement>(null);
  const titleRef    = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const bodyRef     = useRef<HTMLParagraphElement>(null);
  const tagRef      = useRef<HTMLDivElement>(null);
  const isDreamyCut = section.id === 'legacy' || section.id === 'enter';

  useLayoutEffect(() => {
    const wipeToDuration = isDreamyCut ? 0.44 : 0.34;
    const wipeFadeDuration = isDreamyCut ? 0.18 : 0.14;
    const pauseFrom = isDreamyCut ? 0.3 : 0.24;
    const pauseToDuration = isDreamyCut ? 0.4 : 0.3;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: panelRef.current,
          start: 'top 72%',
          // onEnter: play, onLeave: none, onEnterBack: restart (yukarıdan gelince tekrar), onLeaveBack: reset (çıkınca sıfırla)
          toggleActions: 'play none restart reset',
          invalidateOnRefresh: true,
        },
      });
      tl.fromTo(wipeRef.current,    { xPercent: -152, scaleX: 0.92, opacity: 0 }, { xPercent: 152, scaleX: 1.03, opacity: 0.9, duration: wipeToDuration, ease: 'power3.inOut', immediateRender: false })
        .to(wipeRef.current,        { opacity: 0, duration: wipeFadeDuration, ease: 'power1.out' }, '-=0.09')
        .fromTo(pauseRef.current,   { opacity: pauseFrom },   { opacity: 0, duration: pauseToDuration, ease: 'power2.out', immediateRender: false }, '-=0.18')
        .fromTo(lineRef.current,    { scaleX: 0 },            { scaleX: 1, duration: 0.5, ease: 'power3.out', immediateRender: false }, '-=0.03')
        .fromTo(labelRef.current,   { opacity: 0, x: -24 },   { opacity: 1, x: 0, duration: 0.4, immediateRender: false }, '-=0.22')
        .fromTo(titleRef.current,   { opacity: 0, y: 50, skewY: 4 }, { opacity: 1, y: 0, skewY: 0, duration: 0.82, ease: 'expo.out', immediateRender: false }, '-=0.12')
        .fromTo(subtitleRef.current,{ opacity: 0, y: 32, skewY: 3 }, { opacity: 1, y: 0, skewY: 0, duration: 0.68, ease: 'expo.out', immediateRender: false }, '-=0.5')
        .fromTo(bodyRef.current,    { opacity: 0, y: 22 },    { opacity: 1, y: 0, duration: 0.55, immediateRender: false }, '-=0.38')
        .fromTo(tagRef.current,     { opacity: 0, x: 16 },    { opacity: 1, x: 0, duration: 0.4, immediateRender: false }, '-=0.28');
    }, panelRef);

    return () => ctx.revert();
  }, [isDreamyCut]);

  const extra = useMemo(() => extraFor(section.id, language), [section.id, language]);
  const even = index % 2 === 1;
  return (
    <div
      ref={panelRef}
      id={`section-${index}`}
      className={`sp sp--${section.id} ${isDreamyCut ? 'sp-dreamy' : ''} ${even ? 'sp-even' : 'sp-odd'}`}
      style={{ '--sb': section.bg } as React.CSSProperties}
    >
      <div className="sp-bg" style={{ background: `radial-gradient(ellipse at ${even ? '80%' : '20%'} 50%, ${section.accent}16 0%, transparent 65%)` }} />
      <div ref={pauseRef} className="sp-pause-veil" />
      <div ref={wipeRef} className="sp-blade-wipe" style={{ '--sp-ac': section.accent } as React.CSSProperties} />
      <div className="sp-inner">
        <div className="sp-text">
          <div ref={lineRef} className="sp-acline" style={{ background: section.accent }} />
          <span ref={labelRef} className="sp-label">{section.label}</span>
          <h2 ref={titleRef} className="sp-title" style={{ '--ac': section.accent } as React.CSSProperties}>{section[language].title}</h2>
          <h3 ref={subtitleRef} className="sp-subtitle">{section[language].subtitle}</h3>
          <p ref={bodyRef} className="sp-body">{section[language].body}</p>
          <div ref={tagRef} className="sp-tag" style={{ borderColor: section.accent, color: section.accent }}>{section[language].tag}</div>
        </div>
        <div className="sp-extra">{extra}</div>
      </div>
      <div className="sp-corner-tl" style={{ borderColor: section.accent + '44' }} />
      <div className="sp-corner-br" style={{ borderColor: section.accent + '44' }} />
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════════
   CTA FINAL
═══════════════════════════════════════════════════════════════════ */
function CtaSection({ language }: { language: 'tr' | 'en' }) {
  const ref = useRef<HTMLDivElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    gsap.fromTo(ref.current, { opacity: 0, y: 60, rotateX: 8, z: -70 },
      { opacity: 1, y: 0, rotateX: 0, z: 0, duration: 1.05, ease: 'power3.out', scrollTrigger: { trigger: ref.current, start: 'top 80%' } }
    );

    const box = boxRef.current;
    if (!box) return;
    const canHover = typeof window !== 'undefined' && window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!canHover) return;

    const onMove = (e: MouseEvent) => {
      const r = box.getBoundingClientRect();
      const nx = (e.clientX - r.left) / r.width - 0.5;
      const ny = (e.clientY - r.top) / r.height - 0.5;
      gsap.to(box, {
        rotationY: nx * 5.5,
        rotationX: -ny * 4.5,
        y: -2,
        duration: 0.35,
        ease: 'power2.out',
        overwrite: 'auto',
      });
    };

    const onLeave = () => {
      gsap.to(box, {
        rotationX: 0,
        rotationY: 0,
        y: 0,
        duration: 0.55,
        ease: 'power3.out',
        overwrite: 'auto',
      });
    };

    box.addEventListener('mousemove', onMove);
    box.addEventListener('mouseleave', onLeave);

    return () => {
      box.removeEventListener('mousemove', onMove);
      box.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  const copy = language === 'tr'
    ? {
        overline: '6–14 YAŞ ÇOCUK ESKRİM KULÜBÜ',
        title: 'ÇOCUĞUNUZ İÇİN GÜVENLİ VE GELİŞTİRİCİ SPOR',
        sub: 'Dikkat, refleks, disiplin ve özgüven odaklı antrenman programlarımızla çocuklarınız eskrimi severek öğrenir.',
        ageTitle: 'Yaş grupları',
        ages: ['6–8 Başlangıç', '9–11 Gelişim', '12–14 Performans'],
        primary: 'WHATSAPP İLE BİLGİ AL',
        ghost: 'HEMEN ARA',
        stats: [['6–14', 'Yaş aralığı'], ['3', 'Silah dalı'], ['İstanbul', 'Kulüp']],
      }
    : {
        overline: 'FENCING CLUB FOR AGES 6-14',
        title: 'SAFE AND ENRICHING SPORT FOR YOUR CHILD',
        sub: 'Our training improves focus, reflexes, discipline, and confidence while helping children enjoy fencing from day one.',
        ageTitle: 'Age Groups',
        ages: ['6-8 Starter', '9-11 Development', '12-14 Performance'],
        primary: 'GET INFO ON WHATSAPP',
        ghost: 'CALL NOW',
        stats: [['6–14', 'Age range'], ['3', 'Weapons'], ['Istanbul', 'Club']],
      };

  return (
    <div ref={ref} className="cta-wrap">
      <div ref={boxRef} className="cta-box">
        <div className="cta-plane" />
        <div className="cta-orb" />
        <div className="cta-glow" />
        <p className="cta-overline">{copy.overline}</p>
        <h2 className="cta-title">{copy.title}</h2>
        <p className="cta-sub">{copy.sub}</p>
        <div className="cta-age">
          <span className="cta-age-title">{copy.ageTitle}</span>
          <div className="cta-age-list">
            {copy.ages.map((item) => <span key={item} className="cta-age-pill">{item}</span>)}
          </div>
        </div>
        <div className="cta-btns">
          <a className="cta-primary" href={CONTACT_LINKS.whatsapp} target="_blank" rel="noreferrer">{copy.primary}</a>
          <a className="cta-ghost" href={CONTACT_LINKS.phone}>{copy.ghost}</a>
        </div>
        <div className="cta-stats">
          {copy.stats.map(([n,l]) => (
            <div key={l} className="cs"><span className="cs-n">{n}</span><span className="cs-l">{l}</span></div>
          ))}
        </div>
        <div className="cta-rim" />
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════════
   MAIN PAGE
═══════════════════════════════════════════════════════════════════ */
export default function HomeExperience() {
  const [active, setActive] = useState(0);
  const [pastVideo, setPastVideo] = useState(false);
  const [soundscapeOn, setSoundscapeOn] = useState(false);
  const [language, setLanguage] = useState<Lang>('tr');

  const changeLanguage = useCallback((next: Lang) => {
    setLanguage(next);
    try {
      localStorage.setItem(LANG_KEY, next);
    } catch {
      /* ignore quota / private mode */
    }
    window.dispatchEvent(new CustomEvent('engarde:lang', { detail: next }));
    document.documentElement.lang = next;
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(LANG_KEY);
      if (saved === 'tr' || saved === 'en') {
        setLanguage(saved);
        window.dispatchEvent(new CustomEvent('engarde:lang', { detail: saved }));
      }
    } catch {
      /* ignore */
    }
  }, []);
  const audioUnlockedRef = useRef(false);
  const lastSwordSfxAtRef = useRef(0);
  const swordAudioPoolRef = useRef<HTMLAudioElement[] | null>(null);
  const swordAudioIndexRef = useRef(0);
  const bgMusicRef = useRef<HTMLAudioElement | null>(null);
  const audioEngineRef = useRef<{
    ctx: AudioContext;
    master: GainNode;
  } | null>(null);

  const ensureAudioEngine = useCallback(() => {
    if (typeof window === 'undefined') return null;
    if (audioEngineRef.current) return audioEngineRef.current;

    const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!AudioCtx) return null;

    const ctx = new AudioCtx();
    const master = ctx.createGain();
    master.gain.value = 0.34;
    master.connect(ctx.destination);

    audioEngineRef.current = {
      ctx,
      master,
    };

    return audioEngineRef.current;
  }, []);

  const playUiClickSfx = useCallback(() => {
    const engine = ensureAudioEngine();
    if (!engine) return;
    const { ctx, master } = engine;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'square';
    osc.frequency.setValueAtTime(620, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(320, ctx.currentTime + 0.09);
    gain.gain.setValueAtTime(0.0001, ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.024, ctx.currentTime + 0.012);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.11);
    osc.connect(gain).connect(master);
    osc.start();
    osc.stop(ctx.currentTime + 0.12);
  }, [ensureAudioEngine]);

  const playSwordClangSfx = useCallback((intensity = 1) => {
    if (!audioUnlockedRef.current) return;

    const nowMs = Date.now();
    if (nowMs - lastSwordSfxAtRef.current < 120) return;
    lastSwordSfxAtRef.current = nowMs;

    // Primary SFX source: requested sword sound file
    try {
      if (!swordAudioPoolRef.current) {
        swordAudioPoolRef.current = Array.from({ length: 4 }, () => {
          const a = new Audio('/sword-sound.mp3');
          a.preload = 'auto';
          return a;
        });
      }
      const pool = swordAudioPoolRef.current;
      const idx = swordAudioIndexRef.current % pool.length;
      swordAudioIndexRef.current = (swordAudioIndexRef.current + 1) % pool.length;

      const audio = pool[idx];
      audio.currentTime = 0;
      audio.volume = Math.max(0.04, Math.min(1, 0.2 * intensity));
      void audio.play().catch(() => {
        // Browser blocks playback; below WebAudio fallback will run.
      });

      // If HTML audio is available we don't need synth layer.
      if (audio.readyState >= 2) return;
    } catch {
      // Continue to fallback synth below.
    }

    const engine = ensureAudioEngine();
    if (!engine) return;
    const { ctx, master } = engine;
    const t = ctx.currentTime;

    // Metallic ping layer
    const ping = ctx.createOscillator();
    const pingGain = ctx.createGain();
    ping.type = 'triangle';
    ping.frequency.setValueAtTime(1850, t);
    ping.frequency.exponentialRampToValueAtTime(620, t + 0.11);
    pingGain.gain.setValueAtTime(0.0001, t);
    pingGain.gain.linearRampToValueAtTime(0.016 * intensity, t + 0.01);
    pingGain.gain.exponentialRampToValueAtTime(0.0001, t + 0.15);
    ping.connect(pingGain).connect(master);
    ping.start(t);
    ping.stop(t + 0.16);

    // Blade body resonance
    const ring = ctx.createOscillator();
    const ringGain = ctx.createGain();
    ring.type = 'sine';
    ring.frequency.setValueAtTime(410, t);
    ring.frequency.exponentialRampToValueAtTime(220, t + 0.24);
    ringGain.gain.setValueAtTime(0.0001, t);
    ringGain.gain.linearRampToValueAtTime(0.007 * intensity, t + 0.02);
    ringGain.gain.exponentialRampToValueAtTime(0.0001, t + 0.28);
    ring.connect(ringGain).connect(master);
    ring.start(t);
    ring.stop(t + 0.3);

  }, [ensureAudioEngine]);

  const startSoundscape = useCallback(async () => {
    if (!bgMusicRef.current) {
      const bg = new Audio('/bg-sport-rock.mp3');
      bg.preload = 'auto';
      bg.loop = true;
      bg.volume = 0.05;
      bg.addEventListener('ended', () => {
        bg.currentTime = 0;
        void bg.play().catch(() => {
          // Ignore if autoplay policy blocks immediate replay.
        });
      });
      bgMusicRef.current = bg;
    }
    const bg = bgMusicRef.current;
    if (!bg) return;
    bg.volume = 0.05;
    void bg.play().catch(() => {
      // Autoplay policies may still require user interaction.
    });
  }, []);

  const stopSoundscape = useCallback(() => {
    const bg = bgMusicRef.current;
    if (!bg) return;
    bg.pause();
  }, []);

  const handleToggleSoundscape = useCallback(() => {
    // First click should unlock and start audio when default state is ON.
    if (!audioUnlockedRef.current) {
      audioUnlockedRef.current = true;
      if (soundscapeOn) {
        void startSoundscape();
        return;
      }
    }

    audioUnlockedRef.current = true;
    const next = !soundscapeOn;
    setSoundscapeOn(next);
    if (next) {
      void startSoundscape();
    } else {
      stopSoundscape();
    }
  }, [soundscapeOn, startSoundscape, stopSoundscape]);

  const handleNavAction = useCallback(() => {
    audioUnlockedRef.current = true;
    if (!soundscapeOn) return;
    playSwordClangSfx(0.82);
  }, [soundscapeOn, playSwordClangSfx]);

  useLayoutEffect(() => {
    if (typeof window === 'undefined') return;
    const previous = window.history.scrollRestoration;
    window.history.scrollRestoration = 'manual';
    ScrollTrigger.clearScrollMemory();

    // Other pages may navigate with /fencing#section-*; strip hash to avoid instant jump.
    if (window.location.hash.startsWith('#section-')) {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }

    // Refresh/yeniden açılışta her zaman en üstten başlat.
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
      requestAnimationFrame(() => window.scrollTo(0, 0));
    });

    return () => {
      window.history.scrollRestoration = previous;
    };
  }, []);

  useEffect(() => {
    const sections = SECTIONS
      .map((_, i) => document.getElementById(`section-${i}`))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const visibility = new Map<number, number>();
    let rafId = 0;
    let lastApplied = 0;

    const applyMostVisible = () => {
      let bestIndex = lastApplied;
      let bestRatio = -1;

      visibility.forEach((ratio, idx) => {
        if (ratio > bestRatio) {
          bestRatio = ratio;
          bestIndex = idx;
        }
      });

      const currentRatio = visibility.get(lastApplied) ?? 0;
      const nextClearlyDominant = bestRatio >= 0.58;
      const currentMostlyOut = currentRatio <= 0.32;
      const nextClearlyAhead = bestRatio >= currentRatio + 0.16;

      if (bestIndex !== lastApplied && (nextClearlyDominant || (currentMostlyOut && nextClearlyAhead))) {
        lastApplied = bestIndex;
        setActive(bestIndex);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number((entry.target as HTMLElement).dataset.sectionIndex);
          if (Number.isNaN(index)) return;
          visibility.set(index, entry.intersectionRatio);
        });

        if (rafId) cancelAnimationFrame(rafId);
        rafId = requestAnimationFrame(applyMostVisible);
      },
      {
        root: null,
        rootMargin: '-14% 0px -14% 0px',
        threshold: [0.1, 0.2, 0.35, 0.5, 0.58, 0.65, 0.75, 0.85],
      }
    );

    sections.forEach((el, i) => {
      el.dataset.sectionIndex = String(i);
      visibility.set(i, 0);
      observer.observe(el);
    });

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    ScrollTrigger.refresh();
    requestAnimationFrame(() => ScrollTrigger.refresh());
  }, []);

  useEffect(() => {
    if (!soundscapeOn) {
      stopSoundscape();
      return;
    }

    if (audioUnlockedRef.current) {
      void startSoundscape();
      return;
    }

    const unlock = () => {
      if (audioUnlockedRef.current) return;
      audioUnlockedRef.current = true;
      void startSoundscape();
      window.removeEventListener('pointerdown', unlock);
      window.removeEventListener('keydown', unlock);
      window.removeEventListener('touchstart', unlock);
    };

    window.addEventListener('pointerdown', unlock, { once: true, passive: true });
    window.addEventListener('keydown', unlock, { once: true });
    window.addEventListener('touchstart', unlock, { once: true, passive: true });

    return () => {
      window.removeEventListener('pointerdown', unlock);
      window.removeEventListener('keydown', unlock);
      window.removeEventListener('touchstart', unlock);
    };
  }, [soundscapeOn, startSoundscape, stopSoundscape]);

  useEffect(() => {
    return () => {
      stopSoundscape();
    };
  }, [stopSoundscape]);

  return (
    <div style={{ background: 'linear-gradient(180deg, #3b5278 0%, #273a5d 55%, #1f2f4e 100%)', overflowX: 'clip', fontFamily: 'var(--font-space), var(--font-inter), sans-serif' }}>
      {/* Scanlines — always */}
      <div style={{
        position: 'fixed', inset: 0, zIndex: 2, pointerEvents: 'none',
        background: 'repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(255,255,255,0.035) 2px,rgba(255,255,255,0.035) 4px)',
      }} />

      <TopNav
        activeSection={active}
        onNavAction={handleNavAction}
        language={language}
        onLanguageChange={changeLanguage}
      />

      <button onClick={handleToggleSoundscape} className="sound-btn">
        {!soundscapeOn && <span className="sound-pulse" />}
        <span className="sound-icon">{soundscapeOn ? '🔊' : '🔇'}</span>
        <span className="sound-text">{soundscapeOn ? (language === 'tr' ? 'SES KAPAT' : 'MUTE') : (language === 'tr' ? 'SES AÇ' : 'SOUND ON')}</span>
      </button>

      <SocialDock />

      {/* Dot Nav — appears after video */}
      <DotNav active={active} show={pastVideo} />

      {/* ═══ VIDEO HERO (sticky scroll trick) ═══ */}
      <VideoHero onPast={setPastVideo} language={language} />

      {/* ═══ CONTENT SECTIONS — her zaman render, scroll sonrası görünür ═══ */}
      <div style={{ position: 'relative', zIndex: 10 }}>
        {SECTIONS.map((s, i) => <SectionPanel key={`${s.id}-${language}`} section={s} index={i} language={language} />)}
        <CtaSection language={language} />
        <footer className="f-footer">
          <div className="f-top">
            <a href="/" className="f-logo">ENGARDE ESKRİM</a>
            <span className="f-copy">© 2026 ENGARDE ESKRİM</span>
          </div>
          <nav className="f-links" aria-label={language === 'tr' ? 'Sayfalar' : 'Pages'}>
            <a href="/cocuk-eskrim" className="f-link">{language === 'tr' ? 'Çocuk Eskrim' : 'Kids Fencing'}</a>
            <a href="/cocuk-spor-kursu" className="f-link">{language === 'tr' ? 'Çocuk Spor Kursu' : 'Kids Sports'}</a>
            <a href="/eskrim-kulubu" className="f-link">{language === 'tr' ? 'Eskrim Kulübü' : 'Fencing Club'}</a>
            <a href="/fencing" className="f-link">Fencing</a>
            <a href="/fencing-for-kids" className="f-link">Fencing for Kids</a>
            <a href={CONTACT_LINKS.whatsapp} target="_blank" rel="noreferrer" className="f-link">WhatsApp</a>
            <a href={CONTACT_LINKS.phone} className="f-link">{language === 'tr' ? 'İletişim' : 'Contact'}</a>
          </nav>
          <div className="f-cities">
            <span className="f-cities-label">{language === 'tr' ? 'Şehir programları' : 'City programs'}</span>
            <nav className="f-cities-nav" aria-label={language === 'tr' ? 'Şehir programları' : 'City programs'}>
              {CITY_NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={language === 'tr' ? link.href : link.hrefEn}
                  className="f-city"
                  title={language === 'tr' ? link.label : link.labelEn}
                >
                  {link.city}
                </a>
              ))}
            </nav>
          </div>
        </footer>
      </div>

      {/* ═══ GLOBAL STYLES ═══ */}
      <style jsx global>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        /* ── Video Hero ─────────────────────────────────────────── */
        .vh-scroll-zone {
          position: relative;
          height: 500vh;
          background: #263b5c; /* matches sticky bg — no transparent gap */
        }
        .vh-sticky {
          position: sticky;
          top: 0;
          height: 100svh;
          height: 100dvh;
          overflow: hidden;
          background: #263b5c url('/fencing_scrub_poster.webp') center / cover no-repeat;
          cursor: default;
          z-index: 8;
          contain: layout paint;
        }
        .vh-video {
          position: absolute; inset: 0;
          width: 100%; height: 100%;
          object-fit: cover;
          display: block;
          opacity: 0;
          transition: opacity 0.28s ease;
        }
        .vh-video.is-ready { opacity: 1; }

        /* Sinematik çok katmanlı vignette */
        .vh-vignette {
          position: absolute; inset: 0; z-index: 1; pointer-events: none;
          background:
            linear-gradient(to top,    rgba(14,24,42,0.44) 0%, rgba(14,24,42,0.12) 22%, transparent 48%),
            linear-gradient(to bottom, rgba(14,24,42,0.32) 0%, rgba(14,24,42,0.08) 18%, transparent 40%),
            linear-gradient(to right,  rgba(14,24,42,0.24) 0%, rgba(14,24,42,0.06) 35%, transparent 60%),
            linear-gradient(to left,   rgba(14,24,42,0.18) 0%, transparent 45%);
        }

        /* ── Top Navbar ─────────────────────────────────────────── */
        .vh-nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 120;
          display: flex; align-items: center; justify-content: space-between;
          padding: 28px 6vw;
          background: linear-gradient(to bottom, rgba(24,38,64,var(--vh-nav-bg-alpha,0.86)) 0%, transparent 100%);
          backdrop-filter: blur(10px);
        }
        .vh-nav-logo {
          font-size: 19px; font-weight: 800; letter-spacing: 0.32em;
          color: #fff; text-transform: uppercase;
          text-shadow: 0 0 24px rgba(68,187,255,0.6);
          text-decoration: none;
        }
        .vh-nav-links {
          display: flex; gap: 36px; align-items: center;
        }
        .vh-nav-link {
          border: none;
          background: transparent;
          font-size: 10px; letter-spacing: 0.22em; text-transform: uppercase;
          color: rgba(255,255,255,0.92); cursor: pointer;
          transition: color 0.2s;
          position: relative;
          padding: 2px 0;
          font-family: var(--font-space), var(--font-inter), sans-serif;
        }
        .vh-nav-link::after {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          bottom: -8px;
          height: 1px;
          transform: scaleX(0);
          transform-origin: left center;
          background: linear-gradient(90deg, #44bbff, #ffcc44);
          transition: transform 0.24s ease;
        }
        .vh-nav-link:hover { color: rgba(255,255,255,0.88); }
        .vh-nav-link:hover::after,
        .vh-nav-link--active::after { transform: scaleX(1); }
        .vh-nav-link--active {
          color: rgba(255,255,255,0.92);
          text-shadow: 0 0 16px rgba(68,187,255,0.45);
        }
        .vh-nav-badge {
          font-size: 9px; letter-spacing: 0.2em; text-transform: uppercase;
          color: rgba(68,187,255,0.7);
          border: 1px solid rgba(68,187,255,0.25);
          padding: 5px 12px; border-radius: 2px;
          background: rgba(68,187,255,0.06);
        }
        .vh-lang-toggle {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          padding: 3px;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.18);
          background: rgba(10,16,30,0.45);
        }
        .vh-lang-btn {
          border: 0;
          border-radius: 999px;
          padding: 5px 10px;
          min-width: 40px;
          font-size: 14px;
          line-height: 1;
          letter-spacing: 0;
          text-transform: uppercase;
          color: rgba(255,255,255,0.66);
          background: transparent;
          cursor: pointer;
          transition: background 0.22s ease, color 0.22s ease, box-shadow 0.22s ease;
          font-family: var(--font-space), var(--font-inter), sans-serif;
        }
        .vh-flag {
          display: inline-block;
          width: 20px;
          height: 14px;
          border-radius: 2px;
          border: 1px solid rgba(255,255,255,0.28);
          box-shadow: inset 0 0 0 1px rgba(0,0,0,0.08);
          position: relative;
          overflow: hidden;
        }
        .vh-flag--tr {
          background: #e30a17;
        }
        .vh-flag--tr::before {
          content: '';
          position: absolute;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #fff;
          left: 4px;
          top: 2px;
        }
        .vh-flag--tr::after {
          content: '';
          position: absolute;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #e30a17;
          left: 6px;
          top: 2.5px;
        }
        .vh-flag--us {
          background:
            linear-gradient(0deg,
              #b22234 0%, #b22234 7.69%,
              #fff 7.69%, #fff 15.38%,
              #b22234 15.38%, #b22234 23.07%,
              #fff 23.07%, #fff 30.76%,
              #b22234 30.76%, #b22234 38.45%,
              #fff 38.45%, #fff 46.14%,
              #b22234 46.14%, #b22234 53.83%,
              #fff 53.83%, #fff 61.52%,
              #b22234 61.52%, #b22234 69.21%,
              #fff 69.21%, #fff 76.90%,
              #b22234 76.90%, #b22234 84.59%,
              #fff 84.59%, #fff 92.28%,
              #b22234 92.28%, #b22234 100%
            );
        }
        .vh-flag--us::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          width: 42%;
          height: 54%;
          background: #3c3b6e;
        }
        .vh-flag--us::after {
          content: '✶✶✶';
          position: absolute;
          left: 1px;
          top: 1px;
          color: rgba(255,255,255,0.95);
          font-size: 4px;
          letter-spacing: 1px;
          line-height: 1.1;
        }
        .vh-lang-btn.is-active {
          color: #fff;
          background: linear-gradient(135deg, rgba(68,187,255,0.34), rgba(255,204,68,0.22));
          box-shadow: 0 0 14px rgba(68,187,255,0.2);
        }
        .vh-lang-toggle--mobile {
          margin-top: 2px;
          margin-bottom: 4px;
          align-self: flex-start;
        }
        .vh-menu-btn {
          display: none;
          width: 42px;
          height: 42px;
          border: 1px solid rgba(255,255,255,0.16);
          border-radius: 8px;
          background: rgba(0,0,0,0.4);
          color: #fff;
          cursor: pointer;
          align-items: center;
          justify-content: center;
          gap: 4px;
          flex-direction: column;
        }
        .vh-menu-btn span {
          width: 16px;
          height: 1px;
          background: rgba(255,255,255,0.9);
          transition: transform 0.22s ease, opacity 0.22s ease;
        }
        .vh-menu-btn.is-open span:nth-child(1) { transform: translateY(5px) rotate(45deg); }
        .vh-menu-btn.is-open span:nth-child(2) { opacity: 0; }
        .vh-menu-btn.is-open span:nth-child(3) { transform: translateY(-5px) rotate(-45deg); }

        .vh-mobile-overlay {
          position: fixed;
          inset: 0;
          z-index: 130;
          background: rgba(3,3,8,0.45);
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.24s ease;
        }
        .vh-mobile-overlay.is-open {
          opacity: 1;
          pointer-events: auto;
        }
        .vh-mobile-drawer {
          position: fixed;
          right: 0;
          top: 0;
          bottom: 0;
          width: min(82vw, 360px);
          z-index: 131;
          padding: 88px 24px 24px;
          transform: translateX(100%);
          transition: transform 0.28s cubic-bezier(0.22, 1, 0.36, 1);
          background: linear-gradient(180deg, rgba(5,8,18,0.94), rgba(5,8,18,0.9));
          border-left: 1px solid rgba(255,255,255,0.12);
          backdrop-filter: blur(18px);
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        .vh-mobile-drawer.is-open { transform: translateX(0); }
        .vh-mobile-title {
          font-size: 10px;
          letter-spacing: 0.28em;
          color: rgba(255,255,255,0.45);
          text-transform: uppercase;
        }
        .vh-mobile-links {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .vh-mobile-link {
          text-align: left;
          border: 1px solid rgba(255,255,255,0.12);
          background: rgba(255,255,255,0.02);
          color: rgba(255,255,255,0.82);
          padding: 12px 14px;
          border-radius: 8px;
          font-size: 11px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          cursor: pointer;
          font-family: var(--font-space), var(--font-inter), sans-serif;
        }
        .vh-mobile-link.is-active {
          border-color: rgba(68,187,255,0.58);
          box-shadow: inset 0 0 0 1px rgba(68,187,255,0.18);
          color: #fff;
        }
        .vh-mobile-cta {
          margin-top: auto;
          border: 1px solid rgba(68,187,255,0.36);
          background: linear-gradient(135deg, rgba(68,187,255,0.24), rgba(255,204,68,0.16));
          color: #fff;
          padding: 12px 14px;
          border-radius: 8px;
          font-size: 11px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          cursor: pointer;
          font-family: var(--font-space), var(--font-inter), sans-serif;
        }

        /* ── Chapter text overlays ──────────────────────────────── */
        .vh-chapter {
          position: absolute; z-index: 5;
          bottom: 13vh; left: 8vw;
          max-width: min(84vw, 720px);
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.55s cubic-bezier(0.22,1,0.36,1), transform 0.55s cubic-bezier(0.22,1,0.36,1);
          will-change: opacity, transform;
        }
        .vh-chapter--active {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        .vh-badge {
          display: inline-flex; align-items: center; gap: 9px;
          font-size: 10px; letter-spacing: 0.22em;
          text-transform: uppercase; margin-bottom: 22px;
          padding: 6px 14px;
          border: 1px solid;
          border-radius: 2px;
          backdrop-filter: blur(12px);
          background: rgba(0,0,0,0.35);
        }
        .badge-dot {
          width: 6px; height: 6px; border-radius: 50%;
          flex-shrink: 0;
          animation: bdot 2s ease-in-out infinite;
        }
        @keyframes bdot { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.3;transform:scale(1.8)} }
        .vh-title {
          font-size: clamp(4rem, 11.8vw, 9.6rem);
          font-weight: 900; line-height: 0.9; letter-spacing: -0.035em;
          text-transform: uppercase;
          display: flex; flex-direction: column; gap: 0;
        }
        .vh-line {
          display: block;
          color: #fff;
          /* Feature 2: 3D extruded block letter shadow */
          text-shadow:
            1px 1px 0 rgba(10,18,34,0.82),
            2px 2px 0 rgba(10,18,34,0.66),
            3px 3px 0 rgba(10,18,34,0.48),
            4px 4px 12px rgba(10,18,34,0.26),
            0 0 18px rgba(255,255,255,0.12);
        }
        .vh-line-accent {
          background: linear-gradient(var(--ch-grad, 120deg, #ffb347 0%, #ffe27a 100%));
          -webkit-background-clip: text; background-clip: text;
          -webkit-text-fill-color: transparent;
          text-shadow: none;
          filter: drop-shadow(0 0 14px rgba(255, 180, 70, 0.55));
        }
        .vh-sub {
          margin-top: 20px;
          font-size: clamp(0.9rem, 1.6vw, 1.14rem);
          color: rgba(255,255,255,0.94); line-height: 1.72;
          max-width: 440px;
        }
        /* Chapter alt çizgisi */
        .vh-chapter-bar {
          margin-top: 28px;
          height: 2px; width: 80px;
          border-radius: 2px;
          opacity: 0.6;
        }

        /* ── Progress bar ───────────────────────────────────────── */
        .vh-progress-wrap {
          position: absolute; bottom: 0; left: 0; right: 0;
          height: 2px; z-index: 10;
          background: rgba(255,255,255,0.05);
        }
        .vh-progress-fill {
          position: absolute; left: 0; top: 0; bottom: 0;
          width: 100%;
          background: linear-gradient(90deg, #44bbff 0%, #aa77ff 50%, #ff6688 100%);
          transform: scaleX(0); transform-origin: left center;
          will-change: transform;
          box-shadow: 0 0 10px rgba(68,187,255,0.5);
        }

        /* ── Exit overlay (video üzerinde kapanış siyahı) ─────── */
        .vh-exit {
          position: absolute; inset: 0; z-index: 60;
          background: #030308;
          opacity: 0; pointer-events: none;
        }

        /* ── Scroll hint ────────────────────────────────────────── */
        .vh-hint {
          position: absolute; bottom: 52px; left: 50%;
          transform: translateX(-50%);
          display: flex; flex-direction: column; align-items: center; gap: 10px;
          z-index: 80;
        }
        .vh-down-arrow {
          width: 30px;
          height: 30px;
          color: rgba(255, 240, 185, 0.96);
          filter: drop-shadow(0 0 14px rgba(255, 214, 90, 0.65));
          animation: vh-arrow-pulse 1.35s ease-in-out infinite;
        }
        .vh-down-arrow svg { width: 100%; height: 100%; display: block; }
        @keyframes vh-arrow-pulse {
          0%, 100% { opacity: 0.42; transform: translateY(0) scale(0.96); }
          50% { opacity: 1; transform: translateY(5px) scale(1.04); }
        }
        .vh-hint-icon { animation: bob 2.2s ease-in-out infinite; }
        @keyframes bob { 0%,100%{transform:translateY(0)} 50%{transform:translateY(7px)} }
        .vh-hint-dot { animation: dotfall 2s ease-in-out infinite; }
        @keyframes dotfall { 0%{cy:8;opacity:0.8} 100%{cy:20;opacity:0} }
        .vh-hint-label {
          font-size: 9px; letter-spacing: 0.3em; text-transform: uppercase;
          color: rgba(255,255,255,0.18);
        }

        /* ── Sound button ───────────────────────────────────────── */
        .sound-btn {
          position: fixed;
          right: clamp(6px, 2.2vw, 28px);
          bottom: clamp(16px, 3.2vh, 38px);
          z-index: 140;
          display: flex; align-items: center; gap: 6px;
          overflow: visible;
          padding: 6px 10px;
          background: rgba(33,52,82,0.88);
          border: 1px solid rgba(255,255,255,0.34);
          border-radius: 2px; backdrop-filter: blur(18px);
          cursor: pointer; color: #fff;
          font-family: var(--font-space), var(--font-inter), sans-serif;
          font-size: 8px; letter-spacing: 0.14em; text-transform: uppercase;
          transition: all 0.22s ease;
        }
        .sound-btn:hover {
          background: rgba(68,187,255,0.08);
          border-color: rgba(68,187,255,0.35);
          box-shadow: 0 0 20px rgba(68,187,255,0.12);
        }
        .sound-icon { font-size: 12px; }
        .sound-text { color: rgba(255,255,255,0.9); }
        .sound-pulse {
          position: absolute; inset: -3px; border-radius: 4px;
          border: 1px solid rgba(68,187,255,0.35);
          animation: spulse 2.4s ease-in-out infinite;
        }
        @keyframes spulse { 0%,100%{opacity:0.7;transform:scale(1)} 50%{opacity:0;transform:scale(1.1)} }

        /* ── Dot Nav ────────────────────────────────────────────── */
        .dot-nav {
          position: fixed; right: 22px; top: 50%; transform: translateY(-50%);
          z-index: 50; display: flex; flex-direction: column; gap: 16px;
        }
        .dot-item { display:flex; align-items:center; gap:8px; flex-direction:row-reverse; cursor:pointer; }
        .dot-circle {
          display:block; width:6px; height:6px; border-radius:50%;
          background:rgba(255,255,255,0.15); border:1px solid rgba(255,255,255,0.2);
          transition:all 0.3s ease;
        }
        .dot-active .dot-circle {
          background:var(--accent,#44bbff); border-color:var(--accent,#44bbff);
          box-shadow:0 0 12px var(--accent,#44bbff); width:8px; height:8px;
        }
        .dot-label {
          font-size:9px; letter-spacing:0.12em; color:rgba(255,255,255,0.68);
          font-family:monospace; opacity:0; transition:opacity 0.25s;
        }
        .dot-item:hover .dot-label, .dot-active .dot-label { opacity:0.65; }

        /* ── Section Panel ──────────────────────────────────────── */
        .sp {
          min-height: 100vh; position:relative; display:flex;
          align-items:center; padding:90px 8vw;
          overflow: hidden;
          background: var(--sb, #030308);
        }
        /* Tüm section üst kenarları: sağa-sola kayan neon çizgi */
        .sp::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(255, 235, 100, 0.0) 18%,
            rgba(255, 235, 100, 0.95) 44%,
            rgba(255, 248, 180, 1.0) 50%,
            rgba(255, 235, 100, 0.95) 56%,
            rgba(255, 235, 100, 0.0) 82%,
            transparent 100%
          );
          background-size: 220% 100%;
          box-shadow:
            0 0 12px rgba(255, 230, 80, 0.90),
            0 0 30px rgba(255, 230, 80, 0.60),
            0 0 56px rgba(255, 230, 80, 0.35),
            0 0 74px rgba(255, 230, 80, 0.20);
          animation: section0-neon-sweep 3.2s ease-in-out infinite alternate;
          z-index: 3;
          pointer-events: none;
        }
        @keyframes section0-neon-sweep {
          0%   { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
        /* İlk section: üstten siyah gradient — video karalmasıyla kaynaşır */
        .sp:first-child::after {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 120px;
          background: linear-gradient(to bottom, #030308 0%, transparent 100%);
          z-index: 2; pointer-events: none;
        }
        /* Sections arası ince çizgi yerine hafif fade */
        .sp + .sp::before {
          content: '';
          position: absolute; top: 0; left: 8vw; right: 8vw; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.06) 30%, rgba(255,255,255,0.06) 70%, transparent);
        }
        .sp-bg { position:absolute; inset:0; pointer-events:none; z-index:0; }
        .sp-pause-veil {
          position: absolute;
          inset: 0;
          z-index: 2;
          pointer-events: none;
          opacity: 0;
          background: linear-gradient(180deg, rgba(0,0,0,0.38) 0%, rgba(0,0,0,0.18) 36%, rgba(0,0,0,0.34) 100%);
        }
        .sp-blade-wipe {
          position: absolute;
          inset: -30% -54%;
          z-index: 8;
          pointer-events: none;
          opacity: 0;
          transform: skewX(-14deg);
          background:
            linear-gradient(
              90deg,
              rgba(0,0,0,0) 0%,
              rgba(0,0,0,0) 41%,
              rgba(8,12,22,0.72) 46%,
              rgba(250,252,255,0.24) 49%,
              var(--sp-ac, #44bbff) 50%,
              rgba(250,252,255,0.24) 51%,
              rgba(8,12,22,0.72) 54%,
              rgba(0,0,0,0) 59%,
              rgba(0,0,0,0) 100%
            );
          mix-blend-mode: normal;
          box-shadow:
            0 0 16px color-mix(in srgb, var(--sp-ac, #44bbff) 30%, transparent),
            0 0 36px color-mix(in srgb, var(--sp-ac, #44bbff) 18%, transparent);
          filter: blur(1.2px);
        }
        .sp-dreamy .sp-blade-wipe {
          filter: blur(1.8px);
          opacity: 0;
          box-shadow:
            0 0 20px color-mix(in srgb, var(--sp-ac, #44bbff) 26%, transparent),
            0 0 48px color-mix(in srgb, var(--sp-ac, #44bbff) 16%, transparent);
        }
        .sp-dreamy .sp-pause-veil {
          background: linear-gradient(180deg, rgba(0,0,0,0.34) 0%, rgba(0,0,0,0.14) 36%, rgba(0,0,0,0.28) 100%);
        }
        .sp-bg::before,
        .sp-bg::after {
          content: '';
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        /* Section signature: BLADE -> grid + technical */
        .sp--blade .sp-bg::before {
          background:
            linear-gradient(rgba(68,187,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(68,187,255,0.05) 1px, transparent 1px);
          background-size: 30px 30px, 30px 30px;
          mask-image: radial-gradient(ellipse at 28% 48%, black 18%, transparent 72%);
          opacity: 0.42;
        }
        .sp--blade .sp-bg::after {
          inset: 10% 0 auto 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(68,187,255,0.45), transparent);
          box-shadow: 0 0 12px rgba(68,187,255,0.2);
          animation: blade-scan 6.8s ease-in-out infinite;
        }

        /* Section signature: SPEED -> sparks + velocity streaks */
        .sp--speed .sp-bg::before {
          background:
            repeating-linear-gradient(
              -18deg,
              transparent 0 18px,
              rgba(255,102,136,0.10) 18px 20px,
              transparent 21px 42px
            );
          background-size: 200% 100%;
          mask-image: linear-gradient(to right, transparent 4%, black 30%, black 78%, transparent 98%);
          opacity: 0.55;
          animation: speed-streak 2.8s linear infinite;
        }
        .sp--speed .sp-bg::after {
          background: radial-gradient(ellipse at 74% 42%, rgba(255,102,136,0.14), transparent 62%);
          animation: speed-pulse 3.4s ease-in-out infinite;
        }

        /* Section signature: LEGACY -> historical texture */
        .sp--legacy .sp-bg::before {
          background:
            radial-gradient(circle at 15% 18%, rgba(255,220,140,0.05) 0 1px, transparent 1px),
            radial-gradient(circle at 80% 76%, rgba(255,220,140,0.04) 0 1px, transparent 1px),
            repeating-linear-gradient(
              0deg,
              rgba(210,170,110,0.02) 0 2px,
              rgba(0,0,0,0) 2px 6px
            );
          background-size: 140px 140px, 160px 160px, 100% 100%;
          opacity: 0.52;
          filter: sepia(0.28);
        }
        .sp--legacy .sp-bg::after {
          background:
            linear-gradient(90deg, rgba(0,0,0,0.14), transparent 16%, transparent 84%, rgba(0,0,0,0.16)),
            radial-gradient(ellipse at 52% 55%, rgba(255,210,120,0.06), transparent 64%);
          animation: legacy-drift 10.5s ease-in-out infinite;
        }

        @keyframes blade-scan {
          0% { transform: translateY(0); opacity: 0.08; }
          50% { transform: translateY(40vh); opacity: 0.48; }
          100% { transform: translateY(0); opacity: 0.08; }
        }
        @keyframes speed-streak {
          0% { background-position: 0% 0; }
          100% { background-position: -180% 0; }
        }
        @keyframes speed-pulse {
          0%, 100% { transform: scale(1); opacity: 0.36; }
          50% { transform: scale(1.04); opacity: 0.62; }
        }
        @keyframes legacy-drift {
          0%, 100% { transform: translateX(0); opacity: 0.58; }
          50% { transform: translateX(-0.6%); opacity: 0.72; }
        }

        .sp-inner {
          position:relative; z-index:1; width:100%;
          display:grid; grid-template-columns:1fr 1fr; gap:64px; align-items:center;
        }
        .sp-even .sp-inner { direction:rtl; }
        .sp-even .sp-text, .sp-even .sp-extra { direction:ltr; }
        .sp-text { max-width:540px; }
        .sp-acline { width:48px; height:2px; border-radius:2px; margin-bottom:24px; transform-origin:left; }
        .sp-label { display:block; font-size:10px; letter-spacing:0.28em; color:rgba(255,255,255,0.62); text-transform:uppercase; font-family:monospace; margin-bottom:14px; }
        .sp-title {
          font-size:clamp(2.6rem,6.5vw,6rem); font-weight:800;
          line-height:0.9; letter-spacing:-0.035em; text-transform:uppercase;
          background:linear-gradient(135deg,#fff 35%,var(--ac,#fff) 100%);
          -webkit-background-clip:text; background-clip:text; -webkit-text-fill-color:transparent;
        }
        .sp-subtitle {
          font-size:clamp(1rem,2.6vw,2.2rem); font-weight:500;
          letter-spacing:0.07em; text-transform:uppercase;
          color:rgba(255,255,255,0.72); margin-top:8px;
        }
        .sp-body {
          margin-top:24px;
          font-size:clamp(0.98rem,1.25vw,1.1rem);
          color:rgba(255,255,255,0.84);
          line-height:1.9;
          max-width:46ch;
        }
        .sp-tag {
          display:inline-block; margin-top:26px; padding:7px 15px; border:1px solid;
          font-size:9px; letter-spacing:0.22em; text-transform:uppercase;
          border-radius:2px; background:rgba(255,255,255,0.02); backdrop-filter:blur(6px);
        }
        .sp-corner-tl,.sp-corner-br { position:absolute; width:20px; height:20px; border-style:solid; opacity:0.5; }
        .sp-corner-tl { top:22px; left:22px; border-width:1px 0 0 1px; }
        .sp-corner-br { bottom:22px; right:22px; border-width:0 1px 1px 0; }

        /* ── Weapon Cards ───────────────────────────────────────── */
        .weapon-cards { display:flex; flex-direction:column; gap:10px; width:100%; }
        .wc {
          position: relative;
          --mx: 50%;
          --my: 50%;
          padding:20px 22px; background:rgba(255,255,255,0.08);
          border:1px solid rgba(255,255,255,0.18); border-left:2px solid var(--wc,#44bbff);
          border-radius:3px; overflow:hidden;
          transition:transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease; cursor:default;
        }
        .wc::before {
          content:''; position:absolute; inset:0;
          background: radial-gradient(ellipse at var(--mx) var(--my), color-mix(in srgb, var(--wc,#44bbff) 30%, transparent) 0%, transparent 60%);
          opacity:0; transition:opacity 0.26s;
          pointer-events: none;
        }
        .wc::after {
          content:'';
          position:absolute;
          top:-40%;
          bottom:-40%;
          left:-70%;
          width:42%;
          transform: translateX(-140%) rotate(14deg);
          background: linear-gradient(90deg, rgba(255,255,255,0), rgba(255,255,255,0.22), rgba(255,255,255,0));
          opacity:0;
          transition: transform 0.62s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.2s ease;
          pointer-events:none;
        }
        .wc:hover,
        .wc.wc-hovered {
          transform:translateX(6px);
          box-shadow:0 8px 28px rgba(0,0,0,0.34);
          border-color: color-mix(in srgb, var(--wc,#44bbff) 34%, rgba(255,255,255,0.1));
        }
        .wc:hover::before,
        .wc.wc-hovered::before { opacity:0.12; }
        .wc:hover::after,
        .wc.wc-hovered::after {
          transform: translateX(340%) rotate(14deg);
          opacity: 0.85;
        }
        .wc-name { font-size:0.95rem; font-weight:700; letter-spacing:0.2em; color:var(--wc,#44bbff); text-transform:uppercase; margin-bottom:10px; }
        .wc-stats-row { display:flex; flex-wrap:wrap; gap:12px 16px; margin-bottom:10px; }
        .wc-s { display:flex; flex-direction:column; gap:2px; min-width:4.5rem; transition:transform 0.2s ease; }
        .wc:hover .wc-s,
        .wc.wc-hovered .wc-s { transform:translateY(-1px); }
        .wcs-v { font-size:0.92rem; font-weight:700; color:#fff; }
        .wcs-v--target { font-size:0.78rem; line-height:1.2; }
        .wcs-l { font-size:9px; letter-spacing:0.14em; color:rgba(255,255,255,0.6); text-transform:uppercase; }
        .wc-desc { font-size:0.8rem; color:rgba(255,255,255,0.76); line-height:1.6; }
        .wc-bar { position:absolute; bottom:0; left:0; right:0; height:1px; background:linear-gradient(90deg,var(--wc,#44bbff),transparent); opacity:0.25; }

        /* ── Stat Counters ──────────────────────────────────────── */
        .stat-counters { display:grid; grid-template-columns:1fr 1fr; gap:12px; width:100%; }
        .sc-item {
          padding:22px 18px; background:rgba(255,255,255,0.08); border:1px solid rgba(255,255,255,0.18);
          border-radius:3px; transition:transform 0.25s, box-shadow 0.25s;
          position:relative; overflow:hidden;
        }
        .sc-item::after {
          content:''; position:absolute; inset:0;
          background:radial-gradient(ellipse at 50% 0%, rgba(255,102,136,0.12), transparent 70%);
          opacity:0; transition:opacity 0.3s;
        }
        .sc-item:hover { transform:translateY(-4px); box-shadow:0 8px 28px rgba(0,0,0,0.25); }
        .sc-item:hover::after { opacity:1; }
        .sc-num { font-size:2.4rem; font-weight:800; letter-spacing:-0.04em; color:#ff6688; margin-bottom:6px; line-height:1; }
        .sc-label { font-size:10px; font-weight:600; letter-spacing:0.15em; text-transform:uppercase; color:rgba(255,255,255,0.52); margin-bottom:8px; }
        .sc-desc { font-size:0.76rem; color:rgba(255,255,255,0.68); line-height:1.55; }

        /* ── Rules Grid ─────────────────────────────────────────── */
        .rules-grid { display:grid; grid-template-columns:1fr 1fr; gap:10px; width:100%; }
        .rc {
          padding:20px; border-radius:3px; background:rgba(255,255,255,0.08);
          border:1px solid rgba(255,255,255,0.18);
          transition:transform 0.25s,box-shadow 0.25s,border-color 0.25s;
        }
        .rc:hover { transform:translateY(-3px); box-shadow:0 6px 22px rgba(0,0,0,0.22); border-color:rgba(170,119,255,0.2); }
        .rc-icon { font-size:1.6rem; display:block; margin-bottom:10px; }
        .rc-title { font-size:0.82rem; font-weight:700; letter-spacing:0.12em; text-transform:uppercase; color:rgba(255,255,255,0.75); margin-bottom:8px; }
        .rc-desc { font-size:0.76rem; color:rgba(255,255,255,0.72); line-height:1.62; }

        /* ── History Timeline ───────────────────────────────────── */
        .hist-timeline { display:flex; flex-direction:column; width:100%; padding-left:4px; }
        .tl { display:grid; grid-template-columns:60px 24px 1fr; gap:0 14px; align-items:start; }
        .tl-year { font-size:10px; font-weight:700; letter-spacing:0.1em; color:#ffcc44; font-family:monospace; padding-top:3px; text-align:right; opacity:0.8; }
        .tl-mid { display:flex; flex-direction:column; align-items:center; }
        .tl-dot { width:8px; height:8px; border-radius:50%; background:#ffcc44; border:2px solid rgba(255,204,68,0.25); box-shadow:0 0 8px rgba(255,204,68,0.45); flex-shrink:0; margin-top:3px; }
        .tl-line { flex:1; width:1px; background:linear-gradient(to bottom, rgba(255,204,68,0.25), transparent); min-height:20px; }
        .tl-event { font-size:0.8rem; color:rgba(255,255,255,0.78); line-height:1.56; padding-bottom:16px; }

        /* ── Arena CTA ──────────────────────────────────────────── */
        .arena-cta {
          width:100%; padding:28px 30px;
          background:rgba(255,255,255,0.09);
          border:1px solid rgba(68,255,170,0.28);
          border-radius:4px; backdrop-filter:blur(14px);
          position:relative; overflow:hidden;
        }
        .arena-cta::before {
          content:''; position:absolute; top:-40px; right:-40px;
          width:180px; height:180px;
          background:radial-gradient(circle, rgba(68,255,170,0.08), transparent 70%);
          pointer-events:none;
        }
        .arena-quote { font-size:clamp(0.95rem,1.8vw,1.28rem); font-style:italic; color:rgba(255,255,255,0.65); line-height:1.65; margin-bottom:10px; }
        .arena-author { font-size:10px; letter-spacing:0.16em; color:rgba(255,255,255,0.62); text-transform:uppercase; margin-bottom:24px; }
        .arena-badges { display:flex; flex-wrap:wrap; gap:7px; margin-bottom:22px; }
        .arena-badge {
          padding:5px 12px; border:1px solid rgba(68,255,170,0.2);
          font-size:9px; letter-spacing:0.18em; text-transform:uppercase;
          color:rgba(68,255,170,0.55); border-radius:2px;
          transition:border-color 0.2s, color 0.2s;
        }
        .arena-badge:hover { border-color:rgba(68,255,170,0.5); color:rgba(68,255,170,0.85); }
        .arena-divider { height:1px; background:rgba(255,255,255,0.06); margin:16px 0; }
        .arena-fin { font-size:0.86rem; color:rgba(255,255,255,0.76); line-height:1.74; }

        /* ── CTA Section ────────────────────────────────────────── */
        .cta-wrap {
          padding:120px 8vw;
          display:flex;
          justify-content:center;
          perspective: 1400px;
          perspective-origin: 50% 45%;
        }
        .cta-box {
          max-width:680px; width:100%; padding:60px 48px;
          border:1px solid rgba(68,187,255,0.14);
          border-radius:4px; backdrop-filter:blur(24px);
          background:rgba(26,40,66,0.88); text-align:center; position:relative;
          box-shadow:0 44px 90px rgba(0,0,0,0.58), inset 0 1px 0 rgba(255,255,255,0.05);
          transform-style: preserve-3d;
          will-change: transform;
        }
        .cta-plane {
          position:absolute;
          inset: 12px;
          border-radius: 3px;
          pointer-events:none;
          z-index: 0;
          transform: translateZ(-18px) scale(1.02);
          background:
            linear-gradient(120deg, rgba(68,187,255,0.08), rgba(255,255,255,0.01) 38%, rgba(255,204,68,0.08)),
            repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0 1px, transparent 1px 24px),
            repeating-linear-gradient(0deg, rgba(255,255,255,0.025) 0 1px, transparent 1px 24px);
          mask-image: radial-gradient(ellipse at center, black 42%, transparent 98%);
        }
        .cta-orb {
          position:absolute;
          width: 260px;
          height: 260px;
          top: -90px;
          right: -90px;
          border-radius: 50%;
          pointer-events:none;
          z-index: 0;
          transform: translateZ(22px);
          background: radial-gradient(circle, rgba(68,187,255,0.26), rgba(68,187,255,0.06) 40%, transparent 72%);
          filter: blur(1.2px);
          animation: cta-orb-float 6.6s ease-in-out infinite;
        }
        .cta-glow {
          position:absolute; top:0; left:50%; transform:translateX(-50%);
          width:70%; height:1px;
          background:linear-gradient(90deg, transparent, rgba(68,187,255,0.5), transparent);
          z-index: 2;
          transform-style: preserve-3d;
          translate: 0 0;
        }
        .cta-rim {
          position:absolute;
          inset: -1px;
          border-radius: 5px;
          pointer-events:none;
          z-index: 2;
          transform: translateZ(30px);
          border: 1px solid rgba(160,220,255,0.2);
          box-shadow: 0 0 28px rgba(68,187,255,0.12);
        }
        .cta-overline { font-size:9px; letter-spacing:0.3em; text-transform:uppercase; color:rgba(68,187,255,0.5); margin-bottom:18px; position:relative; z-index:1; transform:translateZ(18px); }
        .cta-title {
          font-size:clamp(1.8rem,4.5vw,3.2rem); font-weight:800; letter-spacing:-0.02em;
          text-transform:uppercase;
          background:linear-gradient(135deg,#fff 0%,rgba(255,255,255,0.6) 100%);
          -webkit-background-clip:text; background-clip:text; -webkit-text-fill-color:transparent;
          margin-bottom:14px; line-height:1.05;
          position:relative; z-index:1; transform:translateZ(34px);
        }
        .cta-sub { font-size:0.98rem; color:rgba(255,255,255,0.8); margin-bottom:38px; line-height:1.7; max-width:440px; margin-inline:auto; position:relative; z-index:1; transform:translateZ(14px); }
        .cta-age {
          margin: 0 auto 26px;
          max-width: 520px;
          position: relative;
          z-index: 1;
          transform: translateZ(18px);
        }
        .cta-age-title {
          display: block;
          margin-bottom: 10px;
          font-size: 10px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.72);
        }
        .cta-age-list {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 8px;
        }
        .cta-age-pill {
          display: inline-flex;
          align-items: center;
          padding: 6px 11px;
          border-radius: 999px;
          font-size: 10px;
          letter-spacing: 0.08em;
          color: rgba(255,255,255,0.86);
          border: 1px solid rgba(255,255,255,0.22);
          background: rgba(255,255,255,0.08);
        }
        .cta-btns { display:flex; gap:12px; justify-content:center; flex-wrap:wrap; margin-bottom:44px; position:relative; z-index:1; transform:translateZ(26px); }
        .cta-primary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding:13px 34px;
          background:linear-gradient(135deg,#44bbff,#0055cc);
          color:#fff; font-size:11px; font-weight:600;
          letter-spacing:0.16em; text-transform:uppercase; border:none;
          border-radius:2px; cursor:pointer;
          font-family: var(--font-space), var(--font-inter), sans-serif;
          text-decoration: none;
          transition:transform 0.2s, box-shadow 0.2s;
          box-shadow:0 4px 16px rgba(68,187,255,0.2);
        }
        .cta-primary:hover { transform:translateY(-2px) translateZ(10px); box-shadow:0 10px 28px rgba(68,187,255,0.32); }
        .cta-ghost {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding:13px 34px; background:transparent;
          color:rgba(255,255,255,0.45); font-size:11px; font-weight:500;
          letter-spacing:0.16em; text-transform:uppercase;
          border:1px solid rgba(255,255,255,0.12); border-radius:2px; cursor:pointer;
          font-family: var(--font-space), var(--font-inter), sans-serif;
          text-decoration: none;
          transition:all 0.2s;
        }
        .cta-ghost:hover { border-color:rgba(255,255,255,0.32); color:#fff; transform:translateZ(8px); }
        .cta-stats { display:flex; gap:36px; justify-content:center; flex-wrap:wrap; padding-top:36px; border-top:1px solid rgba(255,255,255,0.05); position:relative; z-index:1; transform:translateZ(12px); }
        .cs { display:flex; flex-direction:column; align-items:center; gap:4px; }
        .cs-n { font-size:1.9rem; font-weight:800; color:#44bbff; letter-spacing:-0.03em; line-height:1; }
        .cs-l { font-size:9px; letter-spacing:0.16em; color:rgba(255,255,255,0.66); text-transform:uppercase; }
        @keyframes cta-orb-float {
          0%, 100% { transform: translateZ(22px) translateY(0); opacity: 0.7; }
          50% { transform: translateZ(26px) translateY(8px); opacity: 1; }
        }

        /* ── Footer ─────────────────────────────────────────────── */
        .f-footer {
          display: flex;
          flex-direction: column;
          gap: 18px;
          padding: 32px 8vw 36px;
          background: rgba(8, 14, 28, 0.55);
          border-top: 1px solid rgba(255,255,255,0.18);
        }
        .f-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }
        .f-logo {
          font-size: 15px;
          font-weight: 800;
          letter-spacing: 0.28em;
          color: #44bbff;
          text-transform: uppercase;
          text-decoration: none;
          text-shadow: 0 0 16px rgba(68,187,255,0.4);
          white-space: nowrap;
        }
        .f-copy {
          font-size: 11px;
          letter-spacing: 0.12em;
          color: rgba(255,255,255,0.45);
          text-transform: uppercase;
          white-space: nowrap;
        }
        .f-links {
          display: flex;
          flex-wrap: wrap;
          gap: 10px 22px;
          align-items: center;
        }
        .f-link {
          font-size: 13px;
          letter-spacing: 0.04em;
          color: rgba(255,255,255,0.78);
          text-decoration: none;
          transition: color 0.2s;
        }
        .f-link:hover { color: #9cd7ff; }
        .f-cities {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 12px 18px;
          padding-top: 16px;
          border-top: 1px solid rgba(255,255,255,0.1);
        }
        .f-cities-label {
          font-size: 11px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: rgba(156, 215, 255, 0.7);
          white-space: nowrap;
        }
        .f-cities-nav {
          display: flex;
          flex-wrap: wrap;
          gap: 8px 4px;
          align-items: center;
        }
        .f-city {
          font-size: 13px;
          color: rgba(255,255,255,0.72);
          text-decoration: none;
          padding: 0 10px;
          border-left: 1px solid rgba(255,255,255,0.16);
          transition: color 0.2s;
        }
        .f-city:first-child { border-left: 0; padding-left: 0; }
        .f-city:hover { color: #ffcc44; }
        .social-dock {
          position: fixed;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          z-index: 145;
          pointer-events: auto;
        }
        .social-dock-panel {
          margin-left: 8px;
          padding: 6px;
          width: 48px;
          border-radius: 12px;
          border: 1px solid rgba(110,190,255,0.26);
          background: linear-gradient(170deg, rgba(10,18,30,0.92), rgba(5,9,16,0.94));
          box-shadow:
            0 22px 44px rgba(0,0,0,0.52),
            inset 0 1px 0 rgba(255,255,255,0.1);
          transform-origin: left center;
          transform: translateX(0) scale(1);
          opacity: 1;
          visibility: visible;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .social-dock-item {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 6px 0;
          border-radius: 10px;
          text-decoration: none;
          color: #ffffff;
          border: 1px solid rgba(95,170,245,0.25);
          background: linear-gradient(145deg, rgba(40,61,92,0.78), rgba(11,19,32,0.88));
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.1), 0 8px 14px rgba(0,0,0,0.35);
          transform-style: preserve-3d;
          transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
          animation: social-presence 7.5s ease-in-out infinite;
        }
        .social-dock-item:nth-child(1) { animation-delay: 0s; }
        .social-dock-item:nth-child(2) { animation-delay: 1.4s; }
        .social-dock-item:nth-child(3) { animation-delay: 2.8s; }
        .social-dock-item:nth-child(4) { animation-delay: 4.2s; }
        .social-dock-item:hover {
          transform: translateY(-2px) rotateX(10deg) rotateY(-7deg);
          border-color: rgba(120,205,255,0.58);
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,0.16),
            0 14px 20px rgba(0,0,0,0.45),
            0 0 16px rgba(68,187,255,0.24);
        }
        @keyframes social-presence {
          0%, 68%, 100% {
            transform: translateY(0) scale(1);
            box-shadow: inset 0 1px 0 rgba(255,255,255,0.1), 0 8px 14px rgba(0,0,0,0.35);
            filter: saturate(1);
          }
          73% {
            transform: translateY(-5px) scale(1.05);
            box-shadow: inset 0 1px 0 rgba(255,255,255,0.2), 0 18px 24px rgba(0,0,0,0.48), 0 0 18px rgba(120,205,255,0.34);
            filter: saturate(1.2);
          }
          78% {
            transform: translateY(2px) scale(0.99);
          }
          84% {
            transform: translateY(-3px) scale(1.03);
            box-shadow: inset 0 1px 0 rgba(255,255,255,0.16), 0 14px 20px rgba(0,0,0,0.42), 0 0 12px rgba(120,205,255,0.24);
          }
        }
        .social-dock-icon {
          width: 15px;
          height: 15px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          transform: translateZ(10px);
        }
        .social-dock-icon svg {
          width: 15px;
          height: 15px;
          display: block;
        }
        .social-dock-item--instagram {
          border-color: rgba(255,130,92,0.65);
          background: linear-gradient(135deg, #fd1d1d 0%, #fcb045 48%, #833ab4 100%);
        }
        .social-dock-item--x {
          border-color: rgba(255,255,255,0.5);
          background: linear-gradient(145deg, #171717, #000000);
        }
        .social-dock-item--youtube {
          border-color: rgba(255,84,84,0.68);
          background: linear-gradient(145deg, #ff3b30, #b90d0d);
        }
        .social-dock-item--whatsapp {
          border-color: rgba(124,255,170,0.7);
          background: linear-gradient(145deg, #25d366, #128c4a);
        }
        .social-dock-item--facebook {
          border-color: rgba(122,176,255,0.7);
          background: linear-gradient(145deg, #1877f2, #0c4fba);
        }

        /* ── Tilt layer (Feature 1 — mouse parallax wrapper) ────── */
        .vh-tilt-layer {
          position: absolute; inset: 0; z-index: 5;
          will-change: transform;
          backface-visibility: hidden;
          pointer-events: none;
        }

        /* ── Mouse lens flare (Feature 4) ──────────────────────────── */
        .vh-flare {
          position: absolute; top: 0; left: 0;
          z-index: 4; pointer-events: none;
          width: 420px; height: 420px;
          border-radius: 50%;
          background: radial-gradient(circle,
            rgba(150,200,255,0.09) 0%,
            rgba(100,170,255,0.05) 30%,
            transparent 68%);
          opacity: 0;
          will-change: transform, opacity;
          mix-blend-mode: screen;
        }

        /* ── Depth particle canvas (Feature 5) ─────────────────────── */
        .vh-particle-canvas {
          position: absolute; inset: 0; z-index: 3;
          pointer-events: none;
          width: 100% !important;
          height: 100% !important;
          display: block;
          contain: strict;
        }

        /* ── Responsive ─────────────────────────────────────────── */
        @media(max-width:768px) {
          .vh-nav { padding: 18px 4vw; }
          .vh-nav-links { display:none; }
          .vh-nav-badge { display: none; }
          .vh-lang-toggle { display: none; }
          .vh-lang-toggle--mobile { display: inline-flex; }
          .vh-menu-btn { display:inline-flex; }
          .sp-inner { grid-template-columns:1fr; gap:32px; }
          .sp-even .sp-inner { direction:ltr; }
          .sp-text { max-width: 100%; }
          .sp-subtitle { font-size:clamp(0.98rem,5.2vw,1.38rem); line-height:1.24; }
          .sp-body {
            font-size: 1rem;
            line-height: 1.86;
            max-width: 100%;
            letter-spacing: 0.005em;
            color: rgba(255,255,255,0.5);
          }
          .stat-counters { grid-template-columns:1fr 1fr; }
          .rules-grid { grid-template-columns:1fr; }
          .cta-box { padding:36px 24px; }
          .cta-wrap { perspective: none; }
          .cta-box { transform: none !important; }
          .cta-plane, .cta-orb, .cta-rim { display: none; }
          .vh-sticky {
            contain: none;
            height: 100svh;
            height: 100dvh;
          }
          .vh-particle-canvas,
          .vh-flare { display: none; }
          .vh-chapter {
            max-width: 88vw;
            bottom: 22svh;
            transition: opacity 0.28s ease, transform 0.28s ease;
          }
          .sp { padding-left: 56px; }
          .vh-title { font-size:clamp(3rem,14vw,5.8rem); }
          .f-footer {
            align-items: stretch;
            text-align: left;
            gap: 18px;
            padding: 28px 20px 36px;
            border-radius: 18px 18px 0 0;
          }
          .f-top {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
          }
          .f-logo { font-size: 13px; letter-spacing: 0.2em; }
          .f-links {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
            width: 100%;
          }
          .f-link { font-size: 14px; }
          .f-copy { font-size: 10px; letter-spacing: 0.12em; }
          .f-cities {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }
          .f-cities-nav { gap: 10px 0; }
          .f-city {
            border-left: 0;
            padding: 0 14px 0 0;
            font-size: 14px;
          }
          .f-city:not(:last-child)::after {
            content: '·';
            margin-left: 14px;
            color: rgba(255,255,255,0.28);
          }
          .social-dock {
            top: auto;
            bottom: 12px;
            transform: none;
          }
          .social-dock-panel {
            width: 38px;
            margin-left: 6px;
            padding: 4px;
            gap: 6px;
            border-radius: 10px;
          }
          .social-dock-item {
            padding: 4px 0;
            border-radius: 8px;
          }
          .social-dock-icon,
          .social-dock-icon svg {
            width: 12px;
            height: 12px;
          }
          .wc,
          .wc:hover,
          .wc.wc-hovered {
            transform:none;
          }
          .wc::after { display:none; }
        }
      `}</style>
    </div>
  );
}
