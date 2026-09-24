import JsonLd from '@/components/JsonLd';
import SeoLanding3D from '@/components/SeoLanding3D';
import {
  CITY_NAV_LINKS,
  cityBreadcrumbJsonLd,
  cityLocationJsonLd,
  faqJsonLd,
  getCityEn,
  getCityLanding,
  getCityLandingByEnSlug,
  whatsappHref,
} from '@/lib/seo';

type CitySeoLandingProps =
  | { locale: 'tr'; slug: string; slugEn?: never }
  | { locale: 'en'; slugEn: string; slug?: never };

export default function CitySeoLanding(props: CitySeoLandingProps) {
  if (props.locale === 'tr') {
    const city = getCityLanding(props.slug);
    const en = getCityEn(props.slug);
    if (!city || !en) return null;

    const path = `/${city.slug}`;
    const pathEn = `/${en.slugEn}`;
    const relatedLinks = [
      { href: '/eskrim-kulubu', label: 'Eskrim kulübü' },
      ...CITY_NAV_LINKS.filter((link) => link.href !== path).map((link) => ({
        href: link.href,
        label: link.label,
      })),
    ];

    return (
      <>
        <JsonLd id={`${city.slug}-faq`} data={faqJsonLd(city.faqs)} />
        <JsonLd id={`${city.slug}-location`} data={cityLocationJsonLd(city.city, path)} />
        <JsonLd id={`${city.slug}-breadcrumb`} data={cityBreadcrumbJsonLd(city.city, path, 'tr')} />
        <SeoLanding3D
          locale="tr"
          turkishHref={path}
          englishHref={pathEn}
          overline={city.overline}
          title={city.title}
          description={city.description}
          keyword={city.keyword}
          city={city.city}
          whatsappHref={whatsappHref(city.whatsappText)}
          phoneHref="tel:+905333916821"
          points={city.points}
          faqs={city.faqs}
          detailTitle={city.detailTitle}
          detailBody={city.detailBody}
          relatedTitle="Diğer şehir programları"
          relatedLinks={relatedLinks}
        />
      </>
    );
  }

  const pair = getCityLandingByEnSlug(props.slugEn);
  if (!pair) return null;
  const { tr, en } = pair;
  const path = `/${tr.slug}`;
  const pathEn = `/${en.slugEn}`;
  const relatedLinks = [
    { href: '/fencing', label: 'Fencing club' },
    ...CITY_NAV_LINKS.filter((link) => link.hrefEn !== pathEn).map((link) => ({
      href: link.hrefEn,
      label: link.labelEn,
    })),
  ];

  return (
    <>
      <JsonLd id={`${en.slugEn}-faq`} data={faqJsonLd(en.faqs)} />
      <JsonLd id={`${en.slugEn}-location`} data={cityLocationJsonLd(tr.city, pathEn)} />
      <JsonLd id={`${en.slugEn}-breadcrumb`} data={cityBreadcrumbJsonLd(tr.city, pathEn, 'en')} />
      <SeoLanding3D
        locale="en"
        turkishHref={path}
        englishHref={pathEn}
        overline={en.overline}
        title={en.title}
        description={en.description}
        keyword={en.keyword}
        city={tr.city}
        whatsappHref={whatsappHref(en.whatsappText)}
        phoneHref="tel:+905333916821"
        points={en.points}
        faqs={en.faqs}
        detailTitle={en.detailTitle}
        detailBody={en.detailBody}
        relatedTitle="Other city programs"
        relatedLinks={relatedLinks}
      />
    </>
  );
}
