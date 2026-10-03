import type { Metadata } from 'next';
import { TopicPage, topicMetadata } from '@/lib/topicPage';

const SLUG = 'cocuk-eskrim-malzemeleri';

export const metadata: Metadata = topicMetadata(SLUG);

export default function CocukEskrimMalzemeleriPage() {
  return <TopicPage slug={SLUG} />;
}
