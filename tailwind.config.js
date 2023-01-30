const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		colors: {
			primary: '#EEF6FF',
			secondary: '#231F20',
			white: '#FFF',
			black: '#000',
			orange: '#AD5E26',
			maroon: '#741641',
			gray: '#747474',
			red: '#C1002D',
			green: '#48BB86',
			blue: "#3A5CAA",
			cadetbule: "#335462",
			darkTurquoise: "#2F96BA",
			pink: '#FF82A0',
			transparent: 'transparent',
			background: '#1f1f1f',
		},
		screens: {
			xs: { max: '420px', min: "320px" },
			sm: '575px',
			md: '815px',
			lg: '1024px',
			xl: '1440px',
			'2xl': '1920px',
		},
		extend: {
			gridTemplateRows: {
				14: 'repeat(14, minmax(0, 1fr))',
			},
		},
	},
	plugins: [
		plugin(({ matchUtilities, theme }) => {
			matchUtilities(
				{
					'bg-gradient': (angle) => ({
						'background-image': `linear-gradient(${angle}, var(--tw-gradient-stops))`,
					}),
				},
				{
					values: Object.assign(
						theme('bgGradientDeg', {
							95: '95deg',
							100: '100deg',
							119: '119deg',
							129: '129deg',
							140: '140deg',
							221: '221deg',
							256: '256deg',
							279: '279deg',
						})
					),
				}
			)
		}),
	],
}
