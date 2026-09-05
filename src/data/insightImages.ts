export interface InsightImage {
  src: string;
  position: string;
}

/**
 * The Insights library uses one stable editorial image sequence.
 * Keep this list ordered: the listing cycles through every image before
 * repeating, which prevents adjacent cards from sharing artwork.
 */
export const insightImages: readonly InsightImage[] = [
  { src: '/images/insights/editorial-01.webp', position: '54% 50%' },
  { src: '/images/insights/editorial-02.webp', position: '44% 50%' },
  { src: '/images/insights/editorial-03.webp', position: '50% 48%' },
  { src: '/images/insights/editorial-04.webp', position: '58% 48%' },
  { src: '/images/insights/editorial-05.webp', position: '48% 48%' },
  { src: '/images/insights/editorial-06.webp', position: '50% 56%' },
  { src: '/images/insights/editorial-07.webp', position: '50% 50%' },
  { src: '/images/insights/editorial-08.webp', position: '50% 46%' },
  { src: '/images/insights/editorial-09.webp', position: '46% 52%' },
  { src: '/images/insights/editorial-10.webp', position: '50% 46%' },
  { src: '/images/insights/editorial-11.webp', position: '50% 50%' },
  { src: '/images/insights/editorial-12.webp', position: '52% 52%' },
] as const;

export function getInsightImage(index: number): InsightImage {
  const safeIndex = ((index % insightImages.length) + insightImages.length) % insightImages.length;
  return insightImages[safeIndex]!;
}
