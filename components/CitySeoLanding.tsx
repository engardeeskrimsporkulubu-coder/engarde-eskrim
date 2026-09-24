import JsonLd from '@/components/JsonLd';
import SeoLanding3D from '@/components/SeoLanding3D';
import {
  CITY_NAV_LINKS,
  cityBreadcrumbJsonLd,
  cityLocationJsonLd,
  faqJsonLd,
  getCityLanding,
  whatsappHref,
} from '@/lib/seo';

type CitySeoLandingProps = {
  slug: string;
};

export default function CitySeoLanding({ slug }: CitySeoLandingProps) {
  const city = getCityLanding(slug);
  if (!city) return null;

  const path = `/${city.slug}`;
  const relatedLinks = [
    { href: '/eskrim-kulubu', label: 'Eskrim kulübü' },
    ...CITY_NAV_LINKS.filter((link) => link.href !== path),
  ];

  return (
    <>
      <JsonLd id={`${city.slug}-faq`} data={faqJsonLd(city.faqs)} />
      <JsonLd id={`${city.slug}-location`} data={cityLocationJsonLd(city.city, path)} />
      <JsonLd id={`${city.slug}-breadcrumb`} data={cityBreadcrumbJsonLd(city.city, path)} />
      <SeoLanding3D
        locale="tr"
        turkishHref={path}
        englishHref="/fencing-for-kids"
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
