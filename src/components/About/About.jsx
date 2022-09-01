import React from 'react';
import { motion } from 'framer-motion';
import { Skill } from './Skill/Skill';
import { aboutAnim, iconsAnim, nameAnim } from './About.anim';
import { SKILL_NAME } from './About.constants';

export default function About() {
	return (
		<motion.section className='about' variants={aboutAnim} initial='init' animate='anim' exit='end'>
			<motion.h3 variants={iconsAnim}>Hello there, my name is</motion.h3>
			<motion.h2 variants={nameAnim}>Eduard Ibinceanu</motion.h2>
			<motion.h5 variants={iconsAnim}>- Application Developer @ IBM Romania -</motion.h5>

			<motion.div className='skillsContainer' variants={iconsAnim}>
				{SKILL_NAME.map((skill) => (
					<Skill key={skill} text={skill} />
				))}
			</motion.div>
		</motion.section>
	);
}
