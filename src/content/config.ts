import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		growth: z.enum(['seed', 'sprout', 'branch', 'tree']).optional(),
		tags: z.array(z.string()).optional(),
		/** 연결할 프로젝트 슬러그 (`src/content/projects` 파일명과 동일) */
		project: z.string().optional(),
	}),
});

const projects = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string(),
		/** 목록 표시 순서 (작을수록 위) */
		order: z.number(),
		period: z.string(),
		status: z.enum(['idea', 'wip', 'shipped', 'paused']),
		stack: z.array(z.string()).optional(),
		links: z
			.array(
				z.object({
					label: z.string(),
					href: z.string().url(),
				}),
			)
			.optional(),
	}),
});

export const collections = { blog, projects };
