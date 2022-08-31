import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Location } from './Location/Location';
import { SocialIcons } from './SocialIcons/SocialIcons';
import { MenuLink } from './MenuLink/MenuLink';
import { MENU_LINKS } from './Menu.constants';
import { menuWrapperAnim, buttonIconAnim, menuButtonAnim, menuAnim } from './Menu.anim';

export default function Menu({ currentPage, selectPage }) {
	const [hoverPage, setHoverPage] = useState(currentPage);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<motion.section className='menuSection' variants={menuAnim} initial='init' animate='anim'>
			<Location />

			<div className='menuContainer'>
				<motion.div
					className='menuButton'
					variants={menuButtonAnim}
					initial='close'
					animate={isMenuOpen ? 'open' : 'close'}
					onMouseEnter={() => setIsMenuOpen(true)}
					onMouseLeave={() => setIsMenuOpen(false)}
				>
					<motion.div className='top' variants={buttonIconAnim}></motion.div>
					<motion.div className='left' variants={buttonIconAnim}></motion.div>
					<motion.div className='right' variants={buttonIconAnim}></motion.div>
					<motion.div className='bottom' variants={buttonIconAnim}></motion.div>
				</motion.div>
				<motion.div
					variants={menuWrapperAnim}
					className='menuWrapper'
					initial='close'
					animate={isMenuOpen ? 'open' : 'close'}
					onMouseEnter={() => setIsMenuOpen(true)}
					onMouseLeave={() => setIsMenuOpen(false)}
				>
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
			</div>

			<SocialIcons />
		</motion.section>
	);
}
