import React from 'react';
import { motion } from 'framer-motion';
import Flicking, { ViewportSlot } from '@egjs/react-flicking';
import { Arrow } from '@egjs/flicking-plugins';
import '@egjs/react-flicking/dist/flicking.css';
import '@egjs/flicking-plugins/dist/arrow.css';

import { titleAnim, sliderAnim, projCatAnim, linksContainerAnim, linksAnim } from '../Projects.anim';

export default function ProjectsSlider({ category, data }) {
	const _plugins = [new Arrow()];
	return (
		<motion.div variants={projCatAnim}>
			<h1>{category}</h1>
			<Flicking
				plugins={_plugins}
				moveType='snap'
				circularFallback='bound'
				align={'center'}
				deceleration={0.02}
				circular={true}
				renderOnlyVisible
			>
				{data
					.sort((a, d) => (a.date > d.date ? -1 : 1))
					.map((el) => {
						return (
							<motion.div
								key={el.name}
								className='slide'
								variants={sliderAnim}
								whileHover='hover'
								initial='hidden'
								animate='hidden'
							>
								<img src={el.cover} alt='cover' />
								<motion.div className='links' variants={linksContainerAnim}>
									{el.links.map((el) => (
										<motion.a
											key={el.link}
											href={el.link}
											style={{ backgroundImage: `url("${el.icon}")` }}
											variants={linksAnim}
										></motion.a>
									))}
								</motion.div>
								<motion.p variants={titleAnim}>{el.name}</motion.p>
							</motion.div>
						);
					})}
				<ViewportSlot>
					<span className='flicking-arrow-prev custom-arrow'></span>
					<span className='flicking-arrow-next custom-arrow'></span>
				</ViewportSlot>
			</Flicking>
		</motion.div>
	);
}
