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
		'--deg': '45deg',
	},
	anim: {
		'--deg': '180deg',
		opacity: 1,
		y: 0,
		backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
		transition: {
			'--deg': { repeat: Infinity, repeatType: 'mirror', duration: 10 },
			backgroundPosition: { duration: 40, repeat: Infinity },
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
