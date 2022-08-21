import React from 'react';
import { motion } from 'framer-motion';
import { backgroundIcons } from './ProjectBackground.constants';
import { iconContainerAnim, iconsAnim } from './ProjectBackground.anim';

const MIN_SCREEN_WIDTH = 320;
const MAX_SCREEN_WIDTH = 4096;

const MIN_ICON_SIZE = 60;
const MAX_ICON_SIZE = 150;

export const generateBackground = () => {
	const iconsData = [];

	const windowHeight = window.innerHeight;
	const windowWidth = window.innerWidth;

	const normalizedWidth = Math.fround((windowWidth - MIN_SCREEN_WIDTH) / (MAX_SCREEN_WIDTH - MIN_SCREEN_WIDTH));
	const iconSize = MIN_ICON_SIZE + Math.floor(normalizedWidth * (MAX_ICON_SIZE - MIN_ICON_SIZE));

	const noOfRows = Math.floor(windowHeight / iconSize);
	const noOfColumns = Math.floor(windowWidth / iconSize);
	const noOfIcons = noOfRows * noOfColumns;

	for (let i = 0; i < noOfIcons; i++) {
		const randomIcon = backgroundIcons[Math.floor(Math.random() * backgroundIcons.length)];
		iconsData.push({
			iconId: `${randomIcon.name}_icon_${i}`,
			iconSrc: randomIcon.src,
			iconSize,
			iconSeed: Math.random(),
		});
	}

	return iconsData;
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
			{background.map(({ iconId, iconSrc, iconSeed, iconSize }) => (
				<motion.div
					variants={iconsAnim}
					custom={iconSeed}
					key={iconId}
					id={iconId}
					className='iconWrapper'
					style={{ width: iconSize, height: iconSize }}
				>
					<img alt='icon' src={iconSrc} style={{ width: iconSize / 1.9, opacity: iconSeed }} />
				</motion.div>
			))}
		</motion.div>
	);
}
