'use client';

import { useEffect, useState } from 'react';
import { HOME_FAQS, HOME_FAQS_EN, NAP } from '@/lib/seo';

const LANG_KEY = 'engarde-lang';

export default function HomeSeoArticle() {
  const [language, setLanguage] = useState<'tr' | 'en'>('tr');

  useEffect(() => {
    try {
      const saved = localStorage.getItem(LANG_KEY);
      if (saved === 'tr' || saved === 'en') setLanguage(saved);
    } catch {
      /* ignore */
    }

    const onLang = (event: Event) => {
      const detail = (event as CustomEvent<'tr' | 'en'>).detail;
      if (detail === 'tr' || detail === 'en') setLanguage(detail);
    };
    window.addEventListener('engarde:lang', onLang);
    return () => window.removeEventListener('engarde:lang', onLang);
  }, []);

  const faqs = language === 'tr' ? HOME_FAQS : HOME_FAQS_EN;

  return (
    <article className="home-seo" id="kulup-bilgisi" lang={language}>
      {language === 'tr' ? (
        <>
          <p className="home-seo-kicker">İstanbul · 6–14 yaş</p>
          <h1>En Garde Eskrim</h1>
          <p>
            En Garde Eskrim, İstanbul’da 6–14 yaş çocuklar için eskrim eğitimi veren
            bir spor kulübüdür. Program refleks, disiplin ve özgüven üzerine kurulur;
            flöre, epe ve kılıç temel teknikleri yaşa uygun tempo ile öğretilir.
          </p>
          <p>
            Deneme dersi ve kayıt için {NAP.phoneDisplay} numaralı telefondan veya
            WhatsApp üzerinden yazabilirsiniz. E-posta: {NAP.email}.
          </p>
        </>
      ) : (
        <>
          <p className="home-seo-kicker">Istanbul · ages 6–14</p>
          <h1>En Garde Eskrim</h1>
          <p>
            En Garde Eskrim is a fencing club in Istanbul for children aged 6–14.
            The program is built around reflexes, discipline, and confidence;
            foil, epee, and sabre fundamentals are taught at an age-appropriate pace.
          </p>
          <p>
            For a trial class or enrollment, call {NAP.phoneDisplay} or message us
            on WhatsApp. Email: {NAP.email}.
          </p>
        </>
      )}

      <section aria-labelledby="home-faq-title">
        <h2 id="home-faq-title">
          {language === 'tr' ? 'Sık sorulan sorular' : 'Frequently asked questions'}
        </h2>
        <dl className="home-seo-faq">
          {faqs.map((item) => (
            <div key={item.q}>
              <dt>{item.q}</dt>
              <dd>{item.a}</dd>
            </div>
          ))}
        </dl>
      </section>
    </article>
  );
}
