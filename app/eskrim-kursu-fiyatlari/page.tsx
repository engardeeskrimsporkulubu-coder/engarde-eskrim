import type { Metadata } from 'next';
import { TopicPage, topicMetadata } from '@/lib/topicPage';

const SLUG = 'eskrim-kursu-fiyatlari';

export const metadata: Metadata = topicMetadata(SLUG);

export default function EskrimKursuFiyatlariPage() {
  return <TopicPage slug={SLUG} />;
}
