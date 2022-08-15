import React from 'react';
import { motion } from 'framer-motion';
import NumberColumn from './NumberColumn/NumberColumn';
import { digitCont } from './Counter.anim';

export default function Counter({ numberValue }) {
	const numArray = new Intl.NumberFormat().format(numberValue).split('').reverse();

	return (
		<motion.div layout='position' variants={digitCont} initial='hidden' animate='show' className='counterView'>
			%
			{numArray.map((no, i) => (
				<NumberColumn key={`d${i}`} digit={no} />
			))}
		</motion.div>
	);
}
