import type { Metadata } from 'next';
import { CityPage, cityMetadata } from '@/lib/cityPage';

const SLUG = 'samsun-cocuk-eskrim';

export const metadata: Metadata = cityMetadata(SLUG);

export default function SamsunCocukEskrimPage() {
  return <CityPage slug={SLUG} />;
}
