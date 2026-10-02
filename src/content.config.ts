import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const notes = defineCollection({
	loader: glob({ base: './src/content/notes', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		publishDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		draft: z.boolean().default(false),
		category: z.enum([
			'System Design',
			'Backend Engineering',
			'Distributed Systems',
			'Architecture',
			'Cloud',
			'Data Engineering',
			'AI-Assisted Development',
		]),
		tags: z.array(z.string()).default([]),
		featured: z.boolean().default(false),
		seo: z
			.object({
				title: z.string().optional(),
				description: z.string().optional(),
			})
			.optional(),
	}),
});

const projects = defineCollection({
	loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		shortDescription: z.string().optional(),
		kind: z.enum(['project', 'experiment']),
		category: z.string().optional(),
		status: z.enum(['active', 'completed', 'archived']).optional(),
		draft: z.boolean().default(false),
		featured: z.boolean().default(false),
		technologies: z.array(z.string()).default([]),
		repositoryUrl: z.string().url().optional(),
		liveUrl: z.string().url().optional(),
		startDate: z.coerce.date().optional(),
		endDate: z.coerce.date().optional(),
		order: z.number().int().nonnegative().optional(),
	}),
});

export const collections = { notes, projects };
