import type { Metadata } from 'next';
import { TopicPage, topicMetadata } from '@/lib/topicPage';

const SLUG = 'eskrim-cocuklara-faydalari';

export const metadata: Metadata = topicMetadata(SLUG);

export default function EskrimCocuklaraFaydalariPage() {
  return <TopicPage slug={SLUG} />;
}
