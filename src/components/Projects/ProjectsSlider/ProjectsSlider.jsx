import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Flicking from '@egjs/react-flicking';
import { Arrow } from '@egjs/flicking-plugins';
import '@egjs/react-flicking/dist/flicking.css';
import '@egjs/flicking-plugins/dist/arrow.css';

import { titleAnim, sliderAnim, projCatAnim, linksContainerAnim, linksAnim } from '../Projects.anim';

export default function ProjectsSlider({ category, data }) {
	const [getElement, setGetElement] = useState(null);
	const ref = useRef(null);

	useEffect(() => {
		setGetElement(ref.current);
	}, []);

	return (
		<motion.div variants={projCatAnim} style={{ position: 'relative' }}>
			<h1>{category}</h1>
			<div className='carouselContainer' ref={ref}>
				<Flicking
					plugins={[
						new Arrow({
							parentEl: getElement,
						}),
					]}
					moveType='snap'
					circularFallback='bound'
					align={'center'}
					deceleration={0.02}
					circular={true}
					renderOnlyVisible
				>
					{data
						.sort((a, d) => (a.date > d.date ? -1 : 1))
						.map(({ name, cover, links }) => {
							return (
								<motion.div
									key={name}
									className='slide'
									variants={sliderAnim}
									whileHover='hover'
									initial='hidden'
									animate='hidden'
								>
									<img src={cover} alt='cover' />
									<motion.div className='links' variants={linksContainerAnim}>
										{links.map(({ link, icon }) => (
											<motion.a
												key={link}
												href={link}
												style={{ backgroundImage: `url("${icon}")` }}
												variants={linksAnim}
											></motion.a>
										))}
									</motion.div>
									<motion.p variants={titleAnim}>{name}</motion.p>
								</motion.div>
							);
						})}
				</Flicking>
				<span className='flicking-arrow-prev custom-arrow'></span>
				<span className='flicking-arrow-next custom-arrow'></span>
			</div>
		</motion.div>
	);
}
