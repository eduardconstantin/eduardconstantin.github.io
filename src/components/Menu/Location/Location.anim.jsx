export const mapAnim = {
	init: {
		opacity: 0,
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
		x: [0, 8, 0, -8, 0],
		filter: [
			'drop-shadow(-2px 0px 0px rgba(238, 42, 8, 0)) drop-shadow(2px 0px 0px rgba(0, 255, 234, 0))',
			'drop-shadow(0px 5px 0px rgba(238, 42, 8, 1)) drop-shadow(0px -5px 0px rgba(0, 255, 234, 1))',
			'drop-shadow(-2px 0px 0px rgba(238, 42, 8, 0)) drop-shadow(2px 0px 0px rgba(0, 255, 234, 0))',
			'drop-shadow(0px -5px 0px rgba(238, 42, 8, 1)) drop-shadow(0px 5px 0px rgba(0, 255, 234, 1))',
			'drop-shadow(2px 0px 0px rgba(238, 42, 8, 0)) drop-shadow(-2px 0px 0px rgba(0, 255, 234, 0))',
		],
		transition: {
			duration: 0.1,
		},
	},
};
