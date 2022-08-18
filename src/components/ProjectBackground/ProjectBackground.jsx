import React from 'react';
import { motion } from 'framer-motion';
import { backgroundIcons } from './ProjectBackground.constants';
import { iconContainerAnim, iconsAnim } from './ProjectBackground.anim';

export const generateBackground = () => {
	const iconsArray = [];
	const iconSize = 100;
	const windowHeight = window.innerHeight;
	const windowWidth = window.innerWidth;

	const rows = Math.floor(windowHeight / iconSize);
	const columns = Math.floor(windowWidth / iconSize);
	const icons = rows * columns;

	for (let i = 0; i < icons; i++) {
		iconsArray.push({
			id: i,
			src: backgroundIcons[Math.floor(Math.random() * backgroundIcons.length)],
			opacity: Math.random(),
			iconSize,
		});
	}

	return iconsArray;
};

export default function ProjectBackground({ background, hasLoaded }) {
	return (
		<motion.div
			variants={iconContainerAnim}
			initial={!hasLoaded ? 'init' : 'end'}
			animate={!hasLoaded ? 'anim' : ''}
			exit='end'
			className='iconsContainer'
		>
			{background.map(({ id, src, opacity, iconSize }) => (
				<motion.div
					variants={iconsAnim}
					custom={Math.random()}
					key={id}
					className='iconWrapper'
					style={{ width: iconSize, height: iconSize }}
				>
					<img alt='icon' src={src} width={52} style={{ opacity: opacity }} />
				</motion.div>
			))}
		</motion.div>
	);
}
