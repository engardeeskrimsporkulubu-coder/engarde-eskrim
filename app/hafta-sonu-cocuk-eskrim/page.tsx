import type { Metadata } from 'next';
import { TopicPage, topicMetadata } from '@/lib/topicPage';

const SLUG = 'hafta-sonu-cocuk-eskrim';

export const metadata: Metadata = topicMetadata(SLUG);

export default function HaftaSonuCocukEskrimPage() {
  return <TopicPage slug={SLUG} />;
}
