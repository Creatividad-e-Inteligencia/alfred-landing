/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'din-black': ['din-black'],
				'din-bold': ['din-bold'],
				'din-medium': ['din-medium'],
				'din-regular': ['din-regular'],
			},
		},
	},
	plugins: [
		function ({ addUtilities }) {
			const newUtilities = {
			  '.text-shadow': {
				'text-shadow': '2px 2px 4px rgba(0, 0, 0, 0.2)',
			  },
			  '.text-shadow-md': {
				'text-shadow': '3px 3px 6px rgba(0, 0, 0, 0.4)',
			  },
			  '.text-shadow-lg': {
				'text-shadow': '4px 4px 8px rgba(0, 0, 0, 0.6)',
			  },
			  '.text-shadow-none': {
				'text-shadow': 'none',
			  },
			}

			addUtilities(newUtilities, ['responsive', 'hover'])
		  }
	],
}
