const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		screens: {
			tablet: '768px',
			desktop: '1200px'
		},
		colors: {
			'violet': 'hsl(282, 83%, 52%)',
			'orange': 'hsl(14, 83%, 74%)',
			'blue-50': 'hsl(230, 60%, 98%)',
			'blue-100': 'hsl(231, 100%, 97%)',
			'blue-200': 'hsl(230, 100%, 90%)',
			'blue-400': 'hsl(204, 94%, 68%)',
			'blue-500': 'hsl(230, 76%, 59%)',
			'blue-600': 'hsl(224, 20%, 49%)',
			'blue-700': 'hsl(231, 33%, 34%)',
			'blue-800': 'hsl(230, 31%, 31%)',
			'white': '#FFFFFF',
			'black': '#000000'
		},
		extend: {}

	},

	plugins: []
};

module.exports = config;
