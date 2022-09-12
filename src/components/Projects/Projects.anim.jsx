export const projectsAnim = {
	init: {
		opacity: 0,
	},
	anim: {
		opacity: 1,
		transition: {
			duration: 0.5,
			staggerChildren: 0.2,
		},
	},
	end: {
		opacity: 0,
		transition: {
			duration: 0.5,
		},
	},
};

export const projCatAnim = {
	init: {
		width: '100%',
		opacity: 0,
		y: 50,
	},
	anim: {
		opacity: 1,
		y: 0,
	},
};
