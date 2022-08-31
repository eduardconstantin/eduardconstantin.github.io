import React from 'react';
import { motion } from 'framer-motion';
import { mapAnim } from './Location.anim';

export const Location = () => {
	return (
		<div className='locationContainer'>
			<motion.p inital='init' animate='init' whileHover='hover'>
				Located in <span>Romania</span>
				<motion.span className='map' variants={mapAnim}></motion.span>
			</motion.p>
		</div>
	);
};
