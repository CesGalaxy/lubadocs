import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
// import nodejs from '@astrojs/node';

import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  output: 'static',
  integrations: [
    tailwind(),
    starlight({
      title: 'Lubalia Docs',
      description: "Learn about the Lubalia Programming Language"
      // sidebar: [
      //   {
      //     label: "Guides",
      //     autogenerate: { directory: 'guides' }
      //   }
      // ]
    }),
  ],
});