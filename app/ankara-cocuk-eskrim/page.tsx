import type { Metadata } from 'next';
import { CityPage, cityMetadata } from '@/lib/cityPage';

const SLUG = 'ankara-cocuk-eskrim';

export const metadata: Metadata = cityMetadata(SLUG);

export default function AnkaraCocukEskrimPage() {
  return <CityPage slug={SLUG} />;
}
