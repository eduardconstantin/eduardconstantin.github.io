import React from 'react';
import { motion } from 'framer-motion';
import { socialAnim } from './SocialIcons.anim';
import { socialLinks } from './SocialIcons.constants';

export const SocialIcons = () => {
	return (
		<div className='socialContainer'>
			<ul>
				{socialLinks.map(({ name, link }) => {
					return (
						<motion.li key={name} variants={socialAnim} whileHover='hover'>
							<a href={link} target='_blank' rel='noreferrer'>
								{name}
							</a>
						</motion.li>
					);
				})}
			</ul>
		</div>
	);
};
