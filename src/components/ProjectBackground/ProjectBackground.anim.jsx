export const iconContainerAnim = {
	init: {
		filter: 'blur(0px)',
	},
	anim: {
		filter: 'blur(0px)',
	},
	end: {
		filter: 'blur(5px)',
		transition: {
			delay: 1.5,
			type: 'spring',
			damping: 15,
		},
	},
};

export const iconsAnim = {
	init: {
		scale: 0,
	},
	anim: (i) => ({
		scale: 1,
		transition: {
			delay: i * 1.2,
			type: 'spring',
			damping: 11,
		},
	}),
	end: {
		scale: 1,
	},
};
