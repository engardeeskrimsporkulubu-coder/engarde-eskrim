import type { Metadata } from 'next';
import { CityPage, cityMetadata } from '@/lib/cityPage';

const SLUG = 'kayseri-cocuk-eskrim';

export const metadata: Metadata = cityMetadata(SLUG);

export default function KayseriCocukEskrimPage() {
  return <CityPage slug={SLUG} />;
}
