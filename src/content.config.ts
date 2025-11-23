import { defineCollection, z } from 'astro:content';

const topics = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    type: z.enum(['lesson', 'exercise']),
    hidden: z.boolean().default(false),
    order: z.number().optional(),
    links: z.record(z.string()).optional(),
    hasSlides: z.boolean().default(true),
  }),
});

export const collections = { topics };

