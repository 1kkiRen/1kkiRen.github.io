import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */

const dev = process.argv.includes('dev');

const config = {
	preprocess: vitePreprocess(),

	kit: {
		paths: {
			base: dev ? '' : process.env.BASE_PATH
		},

		adapter: adapter({
			runtime: 'nodejs@18.x'
		})
	}
};

export default config;
