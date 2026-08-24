import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const insights = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/insights' }),
  schema: z.object({
    title: z.string(),
    seoTitle: z.string().optional(),
    description: z.string(),
    publishedDate: z.coerce.date(),
    updatedDate: z.coerce.date(),
    category: z.string(),
    readingMinutes: z.number().int().positive(),
    author: z.string().default('DataDecision Research'),
    featured: z.boolean().default(false),
    cluster: z.string().optional(),
    pillar: z.boolean().default(false),
    methodologyVersion: z.string().optional(),
    sources: z.array(z.object({ label: z.string(), url: z.url() })).default([]),
  }),
});

const work = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    label: z.literal('DEMONSTRATION RUN'),
    observationDate: z.coerce.date(),
    measurementWindow: z.string(),
    sample: z.string(),
    baseline: z.string(),
    methodologyVersion: z.string(),
    limitations: z.array(z.string()).min(1),
    status: z.enum(['complete', 'scheduled']),
  }),
});

export const collections = { insights, work };
