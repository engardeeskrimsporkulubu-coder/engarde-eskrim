import { HOME_FAQS, NAP } from '@/lib/seo';

export default function HomeSeoArticle() {
  return (
    <article className="home-seo" id="kulup-bilgisi" lang="tr">
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

      <section aria-labelledby="home-faq-title">
        <h2 id="home-faq-title">Sık sorulan sorular</h2>
        <dl className="home-seo-faq">
          {HOME_FAQS.map((item) => (
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
