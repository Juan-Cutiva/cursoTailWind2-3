/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		aspectRatio: {
			auto: 'auto',
			square: '1 / 1',
			video: '16 / 9',
			1: '1',
			2: '2',
			3: '3',
			4: '4',
			5: '5',
			6: '6',
			7: '7',
			8: '8',
			9: '9',
			10: '10',
			11: '11',
			12: '12',
			13: '13',
			14: '14',
			15: '15',
			16: '16'
		},
		fontFamily:{
			Montserrat: ['Montserrat Variable', 'sans-serif']
		},
		extend: {
			screens: {
				xs: '430px'
			},
			colors: {
				Green: '#8FA206',
				Blue: '#61AEC9',
				Pink: '#CC2D4A'
			}
		}
	},
	plugins: [
		require('@tailwindcss/aspect-ratio'),
		require('@tailwindcss/forms'),
		require('@tailwindcss/typography'),
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
