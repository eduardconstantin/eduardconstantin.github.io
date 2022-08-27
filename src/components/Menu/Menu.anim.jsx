export const menuAnim = {
	init: {
		opacity: 0,
		y: 50,
	},
	anim: {
		opacity: 1,
		y: 0,
		transition: {
			delay: 1,
		},
	},
};

export const menuWrapperAnim = {
	open: {
		scale: 1,
		rotateY: 0,
		translateZ: 0,
		transition: {
			type: 'spring',
			mass: 0.5,
			stiffness: 120,
		},
	},
	close: {
		scale: 0,
		rotateY: -80,
		translateZ: -350,
		transition: {
			rotateY: { delay: 0.25, type: 'spring', mass: 0.5 },
			duration: 0.3,
			delay: 0.1,
		},
	},
};

export const buttonIconAnim = {
	open: (i) => ({
		scale: 1,
		rotate: 45,
	}),
	close: {
		scale: 1,
		rotate: 45,
	},
};

export const menuButtonAnim = {
	open: {
		scale: 0.85,
		transition: {
			type: 'spring',
			stiffness: 350,
		},
	},
	closed: {
		scale: 1,
		transition: {
			type: 'spring',
			stiffness: 350,
		},
	},
};
