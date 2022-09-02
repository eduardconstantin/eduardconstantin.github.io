export const aboutAnim = {
	init: {
		opacity: 0,
		transition: {
			staggerChildren: 0.3,
		},
	},
	anim: {
		opacity: 1,
		transition: {
			delay: 0.2,
			staggerChildren: 0.3,
		},
	},
	end: {
		opacity: 0,
		transition: {
			duration: 0.5,
		},
	},
};

export const nameAnim = {
	init: {
		opacity: 0,
		y: 10,
	},
	anim: {
		opacity: 1,
		y: 0,
		backgroundColor: [
			'linear-gradient(45deg, rgba(0, 221, 181, 1) 0%, rgba(29, 12, 112, 1) 100%)',
			'linear-gradient(-45deg, rgba(0, 221, 181, 1) 0%, rgba(29, 12, 112, 1) 100%)',
			'linear-gradient(45deg, rgba(0, 221, 181, 1) 0%, rgba(29, 12, 112, 1) 100%)',
		],
		transition: {
			background: { duration: 40, repeat: Infinity },
		},
	},
};

export const iconsAnim = {
	init: {
		opacity: 0,
		y: 10,
	},
	anim: {
		opacity: 1,
		y: 0,
		transition: {
			type: 'spring',
		},
	},
};
