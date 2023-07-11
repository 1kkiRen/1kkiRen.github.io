import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */

const dev = process.argv.includes('dev');

const config = {

	preprocess: vitePreprocess(),

	kit: {
		// Github repo name: 1kkiRen.github.io
		paths: {
			base: dev ? '' : '/1kkiRen.github.io',
		},

		adapter: adapter()
	}
};

export default config;
