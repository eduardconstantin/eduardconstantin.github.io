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
	leave: {
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
	leave: {
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
