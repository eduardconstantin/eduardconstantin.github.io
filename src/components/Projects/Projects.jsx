import React from 'react';
import { motion } from 'framer-motion';
import ProjectsSlider from './ProjectsSlider/ProjectsSlider';
import { web, game, design } from './Projects.constants';
import { projectsAnim } from './Projects.anim';

export default function Projects() {
	return (
		<motion.section className='projects' variants={projectsAnim} initial='init' animate='anim' exit='end'>
			<ProjectsSlider category='WEB DEV' data={web} />
			<ProjectsSlider category='GAME DEV' data={game} />
			<ProjectsSlider category='DESIGN' data={design} />
		</motion.section>
	);
}