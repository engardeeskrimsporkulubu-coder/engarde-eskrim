import JsonLd from '@/components/JsonLd';
import { istanbulLocationJsonLd } from '@/lib/seo';

export default function CocukEskrimLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd id="cocuk-eskrim-location" data={istanbulLocationJsonLd()} />
      {children}
    </>
  );
}
