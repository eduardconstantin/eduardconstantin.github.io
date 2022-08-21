import React from 'react';
import { motion } from 'framer-motion';
import { iconContainerAnim, iconsAnim } from './ProjectBackground.anim';

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
