import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Location } from './Location/Location';
import { SocialIcons } from './SocialIcons/SocialIcons';
import { menuWrapperAnim, buttonIconAnim, menuButtonAnim, menuAnim } from './Menu.anim';

export default function Menu({ currentPage, selectPage }) {
	const [hoverPage, setHoverPage] = useState(currentPage);

	return (
		<motion.section className='menuSection' variants={menuAnim} initial='init' animate='anim'>
			<Location />

			<motion.div className='menuContainer' initial='close' animate='close' whileHover='open'>
				<motion.div className='menuButton' variants={menuButtonAnim}>
					<motion.div className='top' variants={buttonIconAnim} custom={1}></motion.div>
					<motion.div className='left' variants={buttonIconAnim} custom={2}></motion.div>
					<motion.div className='right' variants={buttonIconAnim} custom={3}></motion.div>
					<motion.div className='bottom' variants={buttonIconAnim} custom={4}></motion.div>
				</motion.div>
				<motion.div variants={menuWrapperAnim} className='menuWrapper'>
					<div className='menu'>
						<ul className='menuList'>
							<motion.li
								onTap={() => selectPage(0)}
								onHoverStart={() => setHoverPage(0)}
								onHoverEnd={() => setHoverPage(currentPage)}
								key={0}
							>
								<NavLink to='/'>ABOUT ME</NavLink>
								{hoverPage === 0 && (
									<>
										<motion.div className='selectedBack' layoutId='ss'></motion.div>
										<motion.div className='selectedFront' layoutId='underline'></motion.div>
									</>
								)}
							</motion.li>
							<motion.li
								onTap={() => selectPage(1)}
								onHoverStart={() => setHoverPage(1)}
								onHoverEnd={() => setHoverPage(currentPage)}
								key={1}
							>
								<NavLink to='/skills'>SKILLS</NavLink>
								{hoverPage === 1 && (
									<>
										<motion.div className='selectedBack' layoutId='ss'></motion.div>
										<motion.div className='selectedFront' layoutId='underline'></motion.div>
									</>
								)}
							</motion.li>
							<motion.li
								onTap={() => selectPage(2)}
								onHoverStart={() => setHoverPage(2)}
								onHoverEnd={() => setHoverPage(currentPage)}
								key={2}
							>
								<NavLink to='/projects'>PROJECTS</NavLink>
								{hoverPage === 2 && (
									<>
										<motion.div className='selectedBack' layoutId='ss'></motion.div>
										<motion.div className='selectedFront' layoutId='underline'></motion.div>
									</>
								)}
							</motion.li>
						</ul>
					</div>
				</motion.div>
			</motion.div>

			<SocialIcons />
		</motion.section>
	);
}
