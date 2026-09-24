import type { Metadata } from 'next';
import { CityPageEn, cityMetadataEn } from '@/lib/cityPage';

const SLUG_EN = 'kayseri-kids-fencing';

export const metadata: Metadata = cityMetadataEn(SLUG_EN);

export default function KayseriKidsFencingPage() {
  return <CityPageEn slugEn={SLUG_EN} />;
}
