export const socialAnim = {
	init: {
		x: [0, 0, 0, 0, 0, 0, 0],
		backgroundColor: 'rgba(111, 201, 38, 0)',
		filter: [
			'drop-shadow(0px 0px 0px rgba(238, 42, 8, 0)) drop-shadow(0px 0px 0px rgba(0, 255, 234, 0))',
			'drop-shadow(0px 0px 0px rgba(238, 42, 8, 0)) drop-shadow(0px 0px 0px rgba(0, 255, 234, 0))',
			'drop-shadow(0px 0px 0px rgba(238, 42, 8, 0)) drop-shadow(0px 0px 0px rgba(0, 255, 234, 0))',
			'drop-shadow(0px 0px 0px rgba(238, 42, 8, 0)) drop-shadow(0px 0px 0px rgba(0, 255, 234, 0))',
			'drop-shadow(0px 0px 0px rgba(238, 42, 8, 0)) drop-shadow(0px 0px 0px rgba(0, 255, 234, 0))',
		],
		transition: {
			duration: 0.15,
		},
	},
	hover: {
		x: [0, 5, 0, 8, -8, 0, -5, 0],
		backgroundColor: 'rgba(111, 201, 38, 1)',
		filter: [
			'drop-shadow(0px 0px 0px rgba(238, 42, 8, 0)) drop-shadow(0px 0px 0px rgba(0, 255, 234, 0))',
			'drop-shadow(-2px 5px 0px rgba(238, 42, 8, 0.8)) drop-shadow(2px -5px 0px rgba(0, 255, 234, 0.8))',
			'drop-shadow(-3px 3px 0px rgba(238, 42, 8, 0)) drop-shadow(3px -3px 0px rgba(0, 255, 234, 0))',
			'drop-shadow(2px -5px 0px rgba(238, 42, 8, 0.8)) drop-shadow(-2px 5px 0px rgba(0, 255, 234, 0.8))',
			'drop-shadow(0px 0px 0px rgba(238, 42, 8, 0)) drop-shadow(0px 0px 0px rgba(0, 255, 234, 0))',
		],
		transition: {
			duration: 0.15,
		},
	},
};

export const socialIconAnim = {
	init: {
		skew: [0, 0, 0, 0],
		x: [0, 0, 0, 0, 0, 0, 0],
		y: [0, 0, 0, 0, 0, 0, 0],
		filter: [
			'drop-shadow(0px 0px 0px rgba(238, 42, 8, 0)) drop-shadow(0px 0px 0px rgba(0, 255, 234, 0))',
			'drop-shadow(0px 0px 0px rgba(238, 42, 8, 0)) drop-shadow(0px 0px 0px rgba(0, 255, 234, 0))',
			'drop-shadow(0px 0px 0px rgba(238, 42, 8, 0)) drop-shadow(0px 0px 0px rgba(0, 255, 234, 0))',
			'drop-shadow(0px 0px 0px rgba(238, 42, 8, 0)) drop-shadow(0px 0px 0px rgba(0, 255, 234, 0))',
			'drop-shadow(0px 0px 0px rgba(238, 42, 8, 0)) drop-shadow(0px 0px 0px rgba(0, 255, 234, 0))',
		],
		transition: {
			duration: 0.15,
		},
	},
	hover: {
		skew: [1, 50, -50, 1],
		x: [0, 2, 0, 5, -5, 0, -2, 0],
		y: [0, -2, 0, -5, 5, 0, 2, 0],
		filter: [
			'drop-shadow(0px 0px 0px rgba(238, 42, 8, 0)) drop-shadow(0px 0px 0px rgba(0, 255, 234, 0))',
			'drop-shadow(5px 5px 0px rgba(238, 42, 8, 0.8)) drop-shadow(5px 5px 0px rgba(0, 255, 234, 0.8))',
			'drop-shadow(-1px 1px 0px rgba(238, 42, 8, 0)) drop-shadow(1px -1px 0px rgba(0, 255, 234, 0))',
			'drop-shadow(-5px -5px 0px rgba(238, 42, 8, 0.8)) drop-shadow(-5px -5px 0px rgba(0, 255, 234, 0.8))',
			'drop-shadow(0px 0px 0px rgba(238, 42, 8, 0)) drop-shadow(0px 0px 0px rgba(0, 255, 234, 0))',
		],
		transition: {
			duration: 0.15,
			repeatDelay: 2.5,
			repeatType: 'mirror',
			repeat: Infinity,
		},
	},
};
