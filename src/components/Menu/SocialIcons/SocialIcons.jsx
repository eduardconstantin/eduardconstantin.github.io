import React from 'react';
import { motion } from 'framer-motion';
import { socialAnim, socialIconAnim } from './SocialIcons.anim';
import { socialLinks } from './SocialIcons.constants';

export const SocialIcons = () => {
	return (
		<div className='socialContainer'>
			<ul>
				{socialLinks.map(({ name, link }) => {
					return (
						<motion.li key={name} variants={socialAnim} whileHover='hover' initial='init' animate='init'>
							<motion.a href={link} target='_blank' rel='noreferrer' variants={socialIconAnim}>
								{name}
							</motion.a>
						</motion.li>
					);
				})}
			</ul>
		</div>
	);
};
