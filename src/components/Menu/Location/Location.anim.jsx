export const mapAnim = {
	init: {
		opacity: 0,
		skewY: [0, 0, 0, 0, 0],
		skewX: [0, 0, 0, 0, 0],
		x: [0, 0, 0, 0, 0],
		filter: [
			'drop-shadow(0px 0px 0px rgba(238, 42, 8, 0)) drop-shadow(0px 0px 0px rgba(0, 255, 234, 0))',
			'drop-shadow(0px 0px 0px rgba(238, 42, 8, 0)) drop-shadow(0px 0px 0px rgba(0, 255, 234, 0))',
			'drop-shadow(0px 0px 0px rgba(238, 42, 8, 0)) drop-shadow(0px 0px 0px rgba(0, 255, 234, 0))',
			'drop-shadow(0px 0px 0px rgba(238, 42, 8, 0)) drop-shadow(0px 0px 0px rgba(0, 255, 234, 0))',
			'drop-shadow(0px 0px 0px rgba(238, 42, 8, 0)) drop-shadow(0px 0px 0px rgba(0, 255, 234, 0))',
		],
		transition: {
			duration: 0.1,
		},
	},
	hover: {
		opacity: 1,
		skewY: [0, 30, 0, -20, 0],
		skewX: [0, -30, 0, 20, 0],
		x: [0, 8, 0, -8, 0],
		filter: [
			'drop-shadow(0px 0px 0px rgba(238, 42, 8, 0)) drop-shadow(0px 0px 0px rgba(0, 255, 234, 0))',
			'drop-shadow(0px 5px 0px rgba(238, 42, 8, 1)) drop-shadow(0px -5px 0px rgba(0, 255, 234, 1))',
			'drop-shadow(-5px 0px 0px rgba(238, 42, 8, 0)) drop-shadow(5px 0px 0px rgba(0, 255, 234, 0))',
			'drop-shadow(0px -5px 0px rgba(238, 42, 8, 1)) drop-shadow(0px 5px 0px rgba(0, 255, 234, 1))',
			'drop-shadow(0px 0px 0px rgba(238, 42, 8, 0)) drop-shadow(0px 0px 0px rgba(0, 255, 234, 0))',
		],
		transition: {
			opacity: { duration: 0.1 },
			duration: 0.1,
			repeatDelay: 2.5,
			repeatType: 'mirror',
			repeat: Infinity,
		},
	},
};
