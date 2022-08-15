const projectsAnim = {
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

const titleAnim = {
	hidden: {
		height: 0,
		padding: 0,
		fontSize: 0,
		backgroundColor: '#fff',
		transition: {
			duration: 0.2,
			delay: 0.1,
		},
	},
	hover: {
		height: 40,
		padding: '10px 0px',
		fontSize: '14px',
		backgroundColor: '#AFEB70',
		transition: {
			type: 'spring',
			mass: 0.5,
			stiffness: 150,
		},
	},
};

const linksContainerAnim = {
	hidden: {
		opacity: 0,
		transition: {
			duration: 0.2,
			delay: 0.1,
		},
	},
	hover: {
		opacity: 1,
		transition: {
			type: 'spring',
			mass: 0.5,
			stiffness: 150,
		},
	},
};

const linksAnim = {
	hidden: {
		opacity: 0,
		y: 200,
		transition: {
			duration: 0.2,
			delay: 0.1,
		},
	},
	hover: {
		opacity: 1,
		y: 36,
		transition: {
			type: 'spring',
			mass: 0.5,
			stiffness: 150,
		},
	},
};

const sliderAnim = {
	hidden: {
		borderColor: '#fff',
		transition: {
			duration: 0.2,
			delay: 0.1,
		},
	},
	hover: {
		borderColor: '#AFEB70',
		transition: {
			duration: 0.2,
		},
	},
};

const projCatAnim = {
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

export { projectsAnim, titleAnim, sliderAnim, projCatAnim, linksContainerAnim, linksAnim };
