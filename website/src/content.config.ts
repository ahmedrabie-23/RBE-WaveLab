import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob, file } from 'astro/loaders';
const article = z.object({ title: z.string().min(8), description: z.string().min(40).max(180),
  order: z.number().int().nonnegative(), kind: z.enum(['experiment','guide','concept']),
  level: z.enum(['Start here','Foundation','Intermediate']), readingMinutes: z.number().int().min(2),
  image: z.string().optional(), related: z.array(z.string()).min(1), updated: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
});
const experiments = defineCollection({ loader: glob({ pattern: '*.md', base: './src/content/experiments' }), schema: article });
const guides = defineCollection({ loader: glob({ pattern: '*.md', base: './src/content/guides' }), schema: article });
const concepts = defineCollection({ loader: glob({ pattern: '*.md', base: './src/content/concepts' }), schema: article });
const policies = defineCollection({ loader: glob({ pattern: ['COPYRIGHT.md','SUPPORT.md','SECURITY.md','docs/SCIENTIFIC_SCOPE.md','docs/REQUIREMENTS.md','docs/RELEASE_STATUS.md','docs/PRIVACY.md'], base: '..' }), schema: z.object({}) });
const faqs = defineCollection({ loader: file('src/data/faq.json'), schema: z.object({ question:z.string().min(10), answer:z.string().min(10), path:z.string().endsWith('/') }) });
export const collections = { experiments, guides, concepts, policies, faqs };
