import { z, defineCollection } from 'astro:content';
import { docsSchema } from '@astrojs/starlight/schema';

const movies = defineCollection({
	type: 'data',
	schema: z.object({
		data: z.any(),
	}),
});

// Expose your defined collection to Astro
// with the `collections` export
export const collections = {
	movies,
	docs: defineCollection({ schema: docsSchema() }),	
};
