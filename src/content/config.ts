import { z, defineCollection } from 'astro:content';
import { docsSchema } from '@astrojs/starlight/schema';

const examples = defineCollection({
	type: 'content',
	schema: z.object({
		isTemplateLiteralToken: z.any(),
	}),
});

// Expose your defined collection to Astro
// with the `collections` export
export const collections = {
	docs: defineCollection({ schema: docsSchema() }),
	examples	
};
