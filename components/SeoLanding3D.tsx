'use client';

import { useCallback, useEffect, useState } from 'react';
import type { FaqItem, SeoPoint } from '@/lib/seo';
import { NAP } from '@/lib/seo';

type SeoLanding3DProps = {
  locale: 'tr' | 'en';
  overline: string;
  title: string;
  description: string;
  keyword: string;
  city: string;
  whatsappHref: string;
  phoneHref: string;
  points: SeoPoint[];
  faqs: FaqItem[];
  detailTitle: string;
  detailBody: string;
};

export default function SeoLanding3D({
  locale,
  overline,
  title,
  description,
  keyword,
  city,
  whatsappHref,
  phoneHref,
  points,
  faqs,
  detailTitle,
  detailBody,
}: SeoLanding3DProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const NAV_ITEMS = locale === 'tr'
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
    window.location.href = `/#section-${index}`;
  }, []);

  const onLanguageChange = useCallback((nextLocale: 'tr' | 'en') => {
    if (nextLocale === locale) return;
    window.location.href = nextLocale === 'tr' ? '/cocuk-eskrim' : '/fencing-for-kids';
  }, [locale]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const copy = locale === 'tr'
    ? {
        highlightsTitle: 'Program avantajları',
        ctaTitle: 'Deneme dersini planlayın',
        ctaDesc: 'Program detayları, ders saatleri ve kontenjan için hemen iletişime geçin.',
        ctaWhatsapp: 'WhatsApp ile bilgi al',
        ctaPhone: 'Hemen ara',
        seoTitle: 'Kulüp bilgisi',
        seoLine1: 'Konu',
        seoLine2: 'Şehir',
        faqTitle: 'Sık sorulan sorular',
        phoneLabel: 'Telefon',
      }
    : {
        highlightsTitle: 'Program highlights',
        ctaTitle: 'Book a trial session',
        ctaDesc: 'Contact us for schedule, class details, and available spots.',
        ctaWhatsapp: 'Get info on WhatsApp',
        ctaPhone: 'Call now',
        seoTitle: 'Club details',
        seoLine1: 'Topic',
        seoLine2: 'City',
        faqTitle: 'Frequently asked questions',
        phoneLabel: 'Phone',
      };

  return (
    <main className="seo3d-root" lang={locale}>
      <div className="seo3d-bg" aria-hidden="true" />
      <div className="seo3d-noise" aria-hidden="true" />

      <>
        <div className="vh-nav">
          <a href="/" className="vh-nav-logo">ENGARDE ESKRİM</a>
          <div className="vh-nav-links">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.label}
                className={`vh-nav-link ${item.index === 0 ? 'vh-nav-link--active' : ''}`}
                onClick={() => jumpToSection(item.index)}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="vh-lang-toggle" role="group" aria-label="Dil secimi">
            <button
              className={`vh-lang-btn ${locale === 'tr' ? 'is-active' : ''}`}
              onClick={() => onLanguageChange('tr')}
              aria-label="Turkce"
              aria-pressed={locale === 'tr'}
            >
              <span className="vh-flag vh-flag--tr" aria-hidden="true" />
            </button>
            <button
              className={`vh-lang-btn ${locale === 'en' ? 'is-active' : ''}`}
              onClick={() => onLanguageChange('en')}
              aria-label="English"
              aria-pressed={locale === 'en'}
            >
              <span className="vh-flag vh-flag--us" aria-hidden="true" />
            </button>
          </div>
          <span className="vh-nav-badge">PARIS 2024</span>
          <button
            className={`vh-menu-btn ${menuOpen ? 'is-open' : ''}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={locale === 'tr' ? 'Menüyü aç' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        <div className={`vh-mobile-overlay ${menuOpen ? 'is-open' : ''}`} onClick={() => setMenuOpen(false)} />
        <aside className={`vh-mobile-drawer ${menuOpen ? 'is-open' : ''}`}>
          <div className="vh-mobile-title">{locale === 'tr' ? 'MENÜ' : 'MENU'}</div>
          <div className="vh-lang-toggle vh-lang-toggle--mobile" role="group" aria-label="Dil secimi">
            <button
              className={`vh-lang-btn ${locale === 'tr' ? 'is-active' : ''}`}
              onClick={() => onLanguageChange('tr')}
              aria-label="Turkce"
              aria-pressed={locale === 'tr'}
            >
              <span className="vh-flag vh-flag--tr" aria-hidden="true" />
            </button>
            <button
              className={`vh-lang-btn ${locale === 'en' ? 'is-active' : ''}`}
              onClick={() => onLanguageChange('en')}
              aria-label="English"
              aria-pressed={locale === 'en'}
            >
              <span className="vh-flag vh-flag--us" aria-hidden="true" />
            </button>
          </div>
          <div className="vh-mobile-links">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.label}
                className={`vh-mobile-link ${item.index === 0 ? 'is-active' : ''}`}
                onClick={() => jumpToSection(item.index)}
              >
                {item.label}
              </button>
            ))}
          </div>
          <button className="vh-mobile-cta" onClick={() => jumpToSection(4)}>
            {locale === 'tr' ? 'EN GARDE BAŞLAT' : 'START EN GARDE'}
          </button>
        </aside>
      </>

      <section className="seo3d-hero">
        <p className="seo3d-overline">{overline}</p>
        <h1 className="seo3d-title">{title}</h1>
        <p className="seo3d-description">{description}</p>
      </section>

      <section className="seo3d-grid" aria-label={copy.highlightsTitle}>
        {points.map((point) => (
          <article className="seo3d-card" key={point.title}>
            <h2>{point.title}</h2>
            <p>{point.body}</p>
          </article>
        ))}
      </section>

      <section className="seo3d-detail">
        <h2>{detailTitle}</h2>
        <p>{detailBody}</p>
      </section>

      <section className="seo3d-cta">
        <div className="seo3d-cta-main">
          <h2>{copy.ctaTitle}</h2>
          <p>{copy.ctaDesc}</p>
          <div className="seo3d-actions">
            <a href={whatsappHref} target="_blank" rel="noreferrer" className="seo3d-btn seo3d-btn-primary">
              {copy.ctaWhatsapp}
            </a>
            <a href={phoneHref} className="seo3d-btn seo3d-btn-secondary">
              {copy.ctaPhone}
            </a>
          </div>
        </div>
        <aside className="seo3d-cta-side" aria-label={copy.seoTitle}>
          <div className="seo3d-pill">{copy.seoLine1}: {keyword}</div>
          <div className="seo3d-pill">{copy.seoLine2}: {city}</div>
          <div className="seo3d-pill">{copy.phoneLabel}: {NAP.phoneDisplay}</div>
        </aside>
      </section>

      <section className="seo3d-faq" aria-labelledby="seo3d-faq-title">
        <h2 id="seo3d-faq-title">{copy.faqTitle}</h2>
        <dl>
          {faqs.map((item) => (
            <div key={item.q}>
              <dt>{item.q}</dt>
              <dd>{item.a}</dd>
            </div>
          ))}
        </dl>
      </section>

      <footer className="f-footer">
        <a href="/" className="f-logo">ENGARDE ESKRİM</a>
        <span className="f-rule" />
        <div className="f-links">
          <a href="/cocuk-eskrim" className="f-link">ÇOCUK ESKRİM</a>
          <a href="/cocuk-spor-kursu" className="f-link">ÇOCUK SPOR KURSU</a>
          <a href="/eskrim-kulubu" className="f-link">ESKRİM KULÜBÜ</a>
          <a href="/fencing" className="f-link">FENCING</a>
          <a href="/fencing-for-kids" className="f-link">FENCING FOR KIDS</a>
          <a href={whatsappHref} target="_blank" rel="noreferrer" className="f-link">WHATSAPP</a>
          <a href={phoneHref} className="f-link">İLETİŞİM</a>
        </div>
        <span className="f-copy">© 2026 ENGARDE ESKRİM</span>
      </footer>

      <style jsx>{`
        .seo3d-root {
          min-height: 100vh;
          position: relative;
          overflow: hidden;
          padding: 24px 6vw 56px;
          background: linear-gradient(180deg, #0b1830 0%, #0f2745 45%, #14395d 100%);
          color: #f6fbff;
          font-family: var(--font-space), var(--font-inter), sans-serif;
        }

        .seo3d-bg {
          position: absolute;
          inset: -20% -10% auto;
          height: 66vh;
          background:
            radial-gradient(circle at 15% 20%, rgba(255, 180, 70, 0.3) 0%, transparent 34%),
            radial-gradient(circle at 82% 24%, rgba(60, 184, 255, 0.26) 0%, transparent 38%),
            radial-gradient(circle at 50% 120%, rgba(255, 255, 255, 0.09) 0%, transparent 55%);
          filter: blur(8px);
          pointer-events: none;
        }

        .seo3d-noise {
          position: absolute;
          inset: 0;
          background-image: linear-gradient(transparent 97%, rgba(255,255,255,0.05) 100%);
          background-size: 100% 4px;
          opacity: 0.15;
          pointer-events: none;
        }

        .vh-nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 120;
          display: flex;
          align-items: center;
          justify-content: space-between;
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
          display: none;
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

        .seo3d-hero {
          position: relative;
          z-index: 2;
          max-width: 860px;
          margin: 126px auto 36px;
          text-align: center;
        }

        .seo3d-overline {
          color: #9cd7ff;
          text-transform: uppercase;
          letter-spacing: 0.16em;
          font-size: 12px;
          margin-bottom: 14px;
        }

        .seo3d-title {
          font-size: clamp(2rem, 4.2vw, 3.6rem);
          line-height: 1.08;
          letter-spacing: 0.02em;
          margin-bottom: 16px;
          text-wrap: balance;
        }

        .seo3d-description {
          color: rgba(246, 251, 255, 0.86);
          max-width: 760px;
          margin: 0 auto;
          font-size: clamp(1rem, 1.7vw, 1.2rem);
          line-height: 1.7;
        }

        .seo3d-grid {
          position: relative;
          z-index: 2;
          max-width: 1100px;
          margin: 24px auto 38px;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 16px;
        }

        .seo3d-card {
          border: 1px solid rgba(150, 205, 255, 0.28);
          border-radius: 18px;
          padding: 22px;
          background: linear-gradient(180deg, rgba(10, 27, 49, 0.65), rgba(10, 27, 49, 0.35));
          box-shadow: 0 14px 35px rgba(0, 0, 0, 0.25);
        }

        .seo3d-card h2 {
          font-size: 1.1rem;
          margin-bottom: 10px;
          color: #dff2ff;
        }

        .seo3d-card p {
          color: rgba(235, 246, 255, 0.82);
          line-height: 1.65;
          font-size: 0.98rem;
        }

        .seo3d-detail,
        .seo3d-faq {
          position: relative;
          z-index: 2;
          max-width: 1100px;
          margin: 0 auto 24px;
          border: 1px solid rgba(150, 205, 255, 0.22);
          border-radius: 20px;
          padding: 24px;
          background: rgba(10, 27, 49, 0.45);
        }
        .seo3d-detail h2,
        .seo3d-faq h2 {
          font-size: 1.35rem;
          margin-bottom: 12px;
        }
        .seo3d-detail p,
        .seo3d-faq dd {
          color: rgba(246, 251, 255, 0.84);
          line-height: 1.7;
        }
        .seo3d-faq dl {
          display: grid;
          gap: 16px;
        }
        .seo3d-faq dt {
          font-weight: 700;
          margin-bottom: 6px;
          color: #dff2ff;
        }

        .seo3d-cta {
          position: relative;
          z-index: 2;
          max-width: 1100px;
          margin: 0 auto 24px;
          display: grid;
          grid-template-columns: 1.6fr 1fr;
          gap: 16px;
        }

        .seo3d-cta-main,
        .seo3d-cta-side {
          border: 1px solid rgba(248, 199, 122, 0.3);
          border-radius: 20px;
          padding: 24px;
          background: linear-gradient(180deg, rgba(18, 40, 66, 0.78), rgba(18, 40, 66, 0.4));
        }

        .seo3d-cta-main h2 {
          font-size: 1.5rem;
          margin-bottom: 10px;
        }

        .seo3d-cta-main p {
          color: rgba(246, 251, 255, 0.84);
          line-height: 1.7;
          margin-bottom: 18px;
        }

        .seo3d-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .seo3d-btn {
          text-decoration: none;
          border-radius: 999px;
          padding: 11px 16px;
          font-size: 0.86rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .seo3d-btn-primary {
          color: #041324;
          background: linear-gradient(120deg, #73d3ff 0%, #f8ca77 100%);
        }

        .seo3d-btn-secondary {
          color: #f6fbff;
          border: 1px solid rgba(246, 251, 255, 0.36);
          background: rgba(7, 19, 35, 0.3);
        }

        .seo3d-cta-side {
          display: grid;
          align-content: center;
          gap: 10px;
        }

        .seo3d-pill {
          border: 1px solid rgba(246, 251, 255, 0.22);
          border-radius: 999px;
          padding: 10px 12px;
          font-size: 0.86rem;
          color: rgba(246, 251, 255, 0.9);
        }

        .f-footer {
          display:flex; align-items:center; gap:20px;
          padding:28px 8vw;
          margin-top: 32px;
          width: calc(100% + 12vw);
          margin-left: -6vw;
          margin-right: -6vw;
          background:rgba(255,255,255,0.12);
          border-top:1px solid rgba(255,255,255,0.24);
          position: relative;
          z-index: 2;
        }
        .f-logo { font-size:16px; font-weight:800; letter-spacing:0.28em; color:#44bbff; text-transform:uppercase; text-decoration:none; text-shadow:0 0 16px rgba(68,187,255,0.4); white-space:nowrap; }
        .f-rule { flex:1; height:1px; background:linear-gradient(90deg,rgba(68,187,255,0.15),transparent); }
        .f-copy { font-size:9px; letter-spacing:0.16em; color:rgba(255,255,255,0.62); text-transform:uppercase; white-space:nowrap; }
        .f-links { display:flex; gap:14px; flex-wrap:wrap; justify-content:center; }
        .f-link { font-size:9px; letter-spacing:0.14em; text-transform:uppercase; color:rgba(255,255,255,0.72); cursor:pointer; transition:color 0.2s; text-decoration:none; white-space:nowrap; }
        .f-link:hover { color:rgba(255,255,255,0.55); }

        @media(max-width:768px) {
          .vh-nav { padding: 18px 4vw; }
          .vh-nav-links { display:none; }
          .vh-nav-badge { display: none; }
          .vh-lang-toggle { display: none; }
          .vh-lang-toggle--mobile { display: inline-flex; }
          .vh-menu-btn { display:inline-flex; }
          .f-footer {
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            gap: 22px;
            padding: 36px 24px 40px;
            width: 100%;
            margin-left: 0;
            margin-right: 0;
            border-radius: 18px 18px 0 0;
          }
          .f-rule { display: none; }
          .f-logo { font-size: 13px; letter-spacing: 0.2em; }
          .f-links {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 12px;
            width: 100%;
          }
          .f-link { font-size: 11px; letter-spacing: 0.16em; }
          .f-copy { font-size: 10px; letter-spacing: 0.12em; }
        }

        @media (max-width: 900px) {
          .seo3d-grid,
          .seo3d-cta {
            grid-template-columns: 1fr;
          }

          .seo3d-hero {
            margin-top: 96px;
          }
        }
      `}</style>
    </main>
  );
}
