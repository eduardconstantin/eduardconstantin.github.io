export const skillsAnim = {
	init: {
		opacity: 0,
	},
	anim: {
		opacity: 1,
		transition: {
			duration: 0.5,
		},
	},
	end: {
		opacity: 0,
		transition: {
			duration: 0.5,
		},
	},
};

export const leftAnim = {
	init: {
		rotateY: 90,
		opacity: 0,
	},
	anim: {
		rotateY: 15,
		opacity: 1,
		transition: {
			type: 'spring',
			bounce: 0.4,
			delay: 0.2,
		},
	},
};

export const rightAnim = {
	init: {
		x: 95,
		opacity: 0,
	},
	anim: {
		x: 0,
		opacity: 1,
		transition: {
			type: 'spring',
			bounce: 0.4,
			delay: 0.2,
		},
	},
};

export const skillCatAnim = {
	hidden: {
		opacity: 0,
		letterSpacing: '-30px',
		transition: {
			duration: 1,
		},
	},
	visible: {
		opacity: 1,
		letterSpacing: '1px',
		transition: {
			type: 'spring',
			bounce: 0.5,
		},
	},
	exit: {
		opacity: 0,
		letterSpacing: '-30px',
		transition: {
			duration: 0.2,
		},
	},
};
