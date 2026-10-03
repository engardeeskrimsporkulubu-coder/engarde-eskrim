import type { Metadata } from 'next';
import { TopicPage, topicMetadata } from '@/lib/topicPage';

const SLUG = 'eskrim-kac-yasinda-baslar';

export const metadata: Metadata = topicMetadata(SLUG);

export default function EskrimKacYasindaBaslarPage() {
  return <TopicPage slug={SLUG} />;
}
