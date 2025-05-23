// @ts-check
import { defineConfig, passthroughImageService } from 'astro/config';
import starlight from '@astrojs/starlight';
import { fileURLToPath } from 'url';

// https://astro.build/config
export default defineConfig({
  site: "https://wiki.thesoda.io",
  image: {
    service: passthroughImageService(),
  },
  integrations: [
		starlight({
			title: 'ASU CS Wiki',
      customCss: [
        '@fontsource-variable/space-grotesk',
        fileURLToPath(new URL('./src/styles/custom.css', import.meta.url)),
      ],
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/asusoda/asu-cs-wiki' }],
      editLink: {
        baseUrl: 'https://github.com/asusoda/asu-cs-wiki/edit/main',
      },
		}),
	],
});
