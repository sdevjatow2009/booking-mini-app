import devtoolsJson from 'vite-plugin-devtools-json';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit(), devtoolsJson()],
	preview: {
		allowedHosts: ['7a7d3600da07.ngrok-free.app', 'localhost'],
	},
});
