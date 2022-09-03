import React from 'react';
import { motion } from 'framer-motion';
import { skillIconAnim, skillNameAnim, skillBgAnim } from './Skill.anim';

export const Skill = ({ name, icon }) => {
	return (
		<motion.div className='skill' initial='init' animate='init' whileHover='hover' whileTap='hover'>
			<motion.div className='skillBg' variants={skillBgAnim}></motion.div>
			<motion.div className='icon' variants={skillIconAnim} style={{ backgroundImage: `url(${icon})` }}></motion.div>
			<motion.p className='skillName' variants={skillNameAnim}>
				{name}
			</motion.p>
		</motion.div>
	);
};
