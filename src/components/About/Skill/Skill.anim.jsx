export const skillNameAnim = {
	hover: {
		rotateX: 0,
		rotateY: 0,
		translateX: [0, 0, 0, 0],
		opacity: [0, 0, 1, 1],
		transition: {
			rotateX: { delay: 0.15 },
			translateX: { duration: 0.1 },
			duration: 0.3,
		},
	},
	init: {
		rotateX: 90,
		rotateY: [0, Math.random() * 10, Math.random() * -10, 0],
		translateX: [0, Math.random() * 10, Math.random() * -10, 0],
		opacity: [1, Math.random(), 0, 0],
		transition: {
			translateX: { duration: 0.1 },
			duration: 0.3,
		},
	},
};

export const skillIconAnim = {
	init: {
		rotateX: 0,
		rotateY: 0,
		translateX: [0, 0, 0, 0],
		opacity: [0, 0, 1, 1],
		transition: {
			rotateX: { delay: 0.15 },
			translateX: { duration: 0.1 },
			duration: 0.3,
		},
	},
	hover: {
		rotateX: 90,
		rotateY: [0, Math.random() * 10, Math.random() * -10, 0],
		translateX: [0, Math.random() * 10, Math.random() * -10, 0],
		opacity: [1, Math.random(), 0, 0],
		transition: {
			translateX: { duration: 0.1 },
			duration: 0.3,
		},
	},
};

export const skillBgAnim = {
	init: {
		x: [0, 0, 0, 0, 0, 0, 0],
		filter: [
			'drop-shadow(0px 0px 0px rgba(238, 42, 8, 0)) drop-shadow(0px 0px 0px rgba(0, 255, 234, 0))',
			'drop-shadow(0px 0px 0px rgba(238, 42, 8, 0)) drop-shadow(0px 0px 0px rgba(0, 255, 234, 0))',
			'drop-shadow(0px 0px 0px rgba(238, 42, 8, 0)) drop-shadow(0px 0px 0px rgba(0, 255, 234, 0))',
			'drop-shadow(0px 0px 0px rgba(238, 42, 8, 0)) drop-shadow(0px 0px 0px rgba(0, 255, 234, 0))',
			'drop-shadow(0px 0px 0px rgba(238, 42, 8, 0)) drop-shadow(0px 0px 0px rgba(0, 255, 234, 0))',
		],
		opacity: 1,
		rotateZ: 45,
		backgroundSize: '90%',
		transition: {
			duration: 0.15,
		},
	},
	hover: {
		x: [0, 6, 0, 10, -10, 0, -6, 0],
		filter: [
			'drop-shadow(0px 0px 0px rgba(238, 42, 8, 0)) drop-shadow(0px 0px 0px rgba(0, 255, 234, 0))',
			'drop-shadow(8px -8px 0px rgba(238, 42, 8, 1)) drop-shadow(-8px 8px 0px rgba(0, 255, 234, 1))',
			'drop-shadow(-2px 2px 0px rgba(238, 42, 8, 0)) drop-shadow(2px -2px 0px rgba(0, 255, 234, 0))',
			'drop-shadow(-8px 8px 0px rgba(238, 42, 8, 1)) drop-shadow(8px -8px 0px rgba(0, 255, 234, 1))',
			'drop-shadow(0px 0px 0px rgba(238, 42, 8, 0)) drop-shadow(0px 0px 0px rgba(0, 255, 234, 0))',
		],
		rotateZ: 45,
		backgroundSize: '70%',
		opacity: 1,
		transition: {
			duration: 0.15,
			repeatDelay: 2.5,
			repeatType: 'mirror',
			repeat: Infinity,
		},
	},
};
