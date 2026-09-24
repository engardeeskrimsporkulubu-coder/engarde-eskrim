import type { Metadata } from 'next';
import { CityPage, cityMetadata } from '@/lib/cityPage';

const SLUG = 'duzce-cocuk-eskrim';

export const metadata: Metadata = cityMetadata(SLUG);

export default function DuzceCocukEskrimPage() {
  return <CityPage slug={SLUG} />;
}
