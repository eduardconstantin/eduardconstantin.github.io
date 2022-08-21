export const welcomeAnim = {
	init: {
		opacity: 0,
		scale: 3,
		color: 'rgb(29,12,112)',
		letterSpacing: '90px',
		filter: 'blur(10px) drop-shadow(0px 0px 0px black)',
	},
	anim: {
		opacity: 1,
		scale: 1,
		color: ['rgb(29,12,112)', '#FFFFFF'],
		letterSpacing: '5px',
		filter: 'blur(0px) drop-shadow(0px 0px 30px black)',
		transition: {
			ease: [0.44, 0.1, 0.15, 1],
			duration: 2,
			delay: 0.5,
		},
	},
	end: {
		opacity: 0,
		scale: 1.5,
		letterSpacing: '5px',
		filter: 'blur(20px) drop-shadow(0px 0px 0px black)',
		transition: {
			delay: 1.5,
			type: 'spring',
			damping: 15,
		},
	},
};
