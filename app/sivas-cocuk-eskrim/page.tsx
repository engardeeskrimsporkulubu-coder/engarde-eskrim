import type { Metadata } from 'next';
import { CityPage, cityMetadata } from '@/lib/cityPage';

const SLUG = 'sivas-cocuk-eskrim';

export const metadata: Metadata = cityMetadata(SLUG);

export default function SivasCocukEskrimPage() {
  return <CityPage slug={SLUG} />;
}
