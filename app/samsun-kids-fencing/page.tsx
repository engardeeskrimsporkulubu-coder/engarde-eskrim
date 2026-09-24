import type { Metadata } from 'next';
import { CityPageEn, cityMetadataEn } from '@/lib/cityPage';

const SLUG_EN = 'samsun-kids-fencing';

export const metadata: Metadata = cityMetadataEn(SLUG_EN);

export default function SamsunKidsFencingPage() {
  return <CityPageEn slugEn={SLUG_EN} />;
}
