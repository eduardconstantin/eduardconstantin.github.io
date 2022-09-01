import React from 'react';
import { motion } from 'framer-motion';
import { skillIconAnim, skillNameAnim } from './Skill.anim';

export const Skill = ({ text }) => {
	return (
		<motion.div className='skill' initial='leave' animate='leave' whileHover='hover'>
			<motion.div className='icon' variants={skillIconAnim} custom={Math.random()}></motion.div>
			<motion.p className='skillName' variants={skillNameAnim}>
				{text}
			</motion.p>
		</motion.div>
	);
};
