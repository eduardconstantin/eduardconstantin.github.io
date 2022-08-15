export const item = {
	hidden: {
		y: '120%',
		scale: 2,
		opacity: 0,
		color: '#FF6A88',
		transition: {
			ease: [0.455, 0.03, 0.515, 0.955],
			duration: 0.8,
		},
	},
	visible: {
		y: 0,
		opacity: 1,

		scale: [2, 0.7, 1],
		color: ['#85FFBD', '#FF6A88', '#FFFAFF'],
		transition: {
			type: 'spring',
			damping: 13,
		},
	},
};

export const letter = {
	hidden: {
		y: '200%',
		opacity: 0,
		scale: 2,
		color: '#009FB7',
		transition: {
			duration: 0.2,
		},
	},
	visible: {
		y: 0,
		opacity: 1,
		scale: [1.5, 0.9, 1],
		color: ['#00D4F5', 'rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0)'],
		transition: {
			staggerChildren: 0.04,
			type: 'spring',
			bounce: 0.3,
		},
	},
};
