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
			bounce: 0.36,
		},
	},
	close: {
		scale: 0,
		rotateY: -80,
		translateZ: -350,
		transition: {
			rotateY: { delay: 0.3, type: 'spring', mass: 0.2 },
			duration: 0.3,
			delay: 0.1,
		},
	},
};

export const buttonIconAnim = {
	open: {
		scale: [1, 0.5, 0.9],
		rotate: 45,
		transition: {
			duration: 0.45,
			ease: 'easeInOut',
			repeatDelay: 3,
			repeat: Infinity,
		},
	},
	close: {
		scale: [0.9, 0.5, 1],
		rotate: 45,
		transition: {
			ease: 'easeInOut',
			duration: 0.45,
			repeatDelay: 3,
			repeat: Infinity,
		},
	},
	hover: {
		scale: [1, 0.5, 0.9],
		rotate: 45,
		transition: {
			ease: 'easeInOut',
			duration: 0.45,
			repeatDelay: 3,
			repeat: Infinity,
		},
	},
	tap: {
		scale: [1, 1, 1],
		rotate: 45,
		transition: {
			ease: 'easeInOut',
			duration: 0.45,
		},
	},
};

export const menuButtonAnim = {
	open: {
		scale: 0.88,
		transition: {
			type: 'spring',
			staggerChildren: 0.12,
		},
	},
	close: {
		scale: 1,
		transition: {
			type: 'spring',
			staggerDirection: -1,
			staggerChildren: 0.12,
		},
	},
	hover: {
		scale: 1.1,
		transition: {
			type: 'spring',
			staggerDirection: -1,
			staggerChildren: 0.12,
		},
	},
	tap: {
		scale: 0.8,
		transition: {
			type: 'spring',
			staggerChildren: 0.12,
		},
	},
};
