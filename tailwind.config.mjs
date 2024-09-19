/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			screens: {
				xs: '430px'
			}
		}
	},
	plugins: [
		function ({ addComponents, theme }) {
			addComponents({
				'.btn': {
					padding: theme('spacing.4'),
					margin: 'auto'
				}
			});
		}
	]
};
