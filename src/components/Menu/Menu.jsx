import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Location } from './Location/Location';
import { SocialIcons } from './SocialIcons/SocialIcons';
import { MenuLink } from './MenuLink/MenuLink';
import { MENU_LINKS } from './Menu.constants';
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
							{MENU_LINKS.map(({ name, link }, i) => {
								return (
									<MenuLink
										key={i}
										index={i}
										name={name}
										navLink={link}
										hoverPageNo={hoverPage}
										onTap={() => selectPage(i)}
										onHoverStart={() => setHoverPage(i)}
										onHoverEnd={() => setHoverPage(currentPage)}
									/>
								);
							})}
						</ul>
					</div>
				</motion.div>
			</motion.div>

			<SocialIcons />
		</motion.section>
	);
}
