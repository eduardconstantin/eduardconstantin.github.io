import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue } from 'framer-motion';

import { menuContentAnim, menuIconElemAnim, socialAnim, menuIcon, menuAnim } from './Menu.anim';
import socialLinks from '../Data/socialLinks';

export default function Menu({ pageNo, selectPage }) {
	const [isOpen, setIsOpen] = useState(false);

	const x = useMotionValue(0);
	const aboutRef = useRef();
	const skillRef = useRef();
	const projRef = useRef();

	const menuHover = (target) => {
		x.set(target.offsetLeft + (target.offsetWidth - 100) / 2);
	};

	const activeMenu = () => {
		if (pageNo === 0) {
			menuHover(aboutRef.current);
		} else if (pageNo === 1) {
			menuHover(skillRef.current);
		} else {
			menuHover(projRef.current);
		}
	};

	useEffect(() => {
		activeMenu();
	}, []);

	return (
		<motion.section className='menuSection' variants={menuAnim} initial='init' animate='anim'>
			<div className='locationContainer'>
				<p>
					Located in <span>Romania</span>
				</p>
			</div>

			<motion.div className='menuContainer'>
				<motion.div
					className='menuIcon'
					onMouseEnter={() => setIsOpen(true)}
					onMouseLeave={() => setIsOpen(false)}
					variants={menuIcon}
					initial='closed'
					animate={isOpen ? 'open' : 'closed'}
				>
					<motion.div className='top' variants={menuIconElemAnim} custom={1}></motion.div>
					<motion.div className='left' variants={menuIconElemAnim} custom={2}></motion.div>
					<motion.div className='right' variants={menuIconElemAnim} custom={3}></motion.div>
					<motion.div className='bottom' variants={menuIconElemAnim} custom={4}></motion.div>
				</motion.div>
				<motion.div
					variants={menuContentAnim}
					initial='closed'
					animate={isOpen ? 'open' : 'closed'}
					onMouseEnter={() => setIsOpen(true)}
					onMouseLeave={() => setIsOpen(false)}
				>
					<motion.div className='selectedBack' style={{ translateX: x }}></motion.div>
					<div className='menu'>
						<ul className='menuList'>
							<li>
								<p
									ref={aboutRef}
									onMouseEnter={(event) => menuHover(event.currentTarget)}
									onMouseLeave={activeMenu}
									onClick={() => selectPage(0)}
								>
									ABOUT ME
								</p>
							</li>
							<li>
								<p
									ref={skillRef}
									onMouseEnter={(event) => menuHover(event.currentTarget)}
									onMouseLeave={activeMenu}
									onClick={() => selectPage(1)}
								>
									SKILLS
								</p>
							</li>
							<li>
								<p
									ref={projRef}
									onMouseEnter={(event) => menuHover(event.currentTarget)}
									onMouseLeave={activeMenu}
									onClick={() => selectPage(2)}
								>
									PROJECTS
								</p>
							</li>
						</ul>
					</div>
					<motion.div className='selectedFront' style={{ translateX: x }}></motion.div>
				</motion.div>
			</motion.div>

			<div className='socialContainer'>
				<ul>
					{socialLinks.map((el) => {
						return (
							<motion.li key={el.name} variants={socialAnim} whileHover='hover'>
								<a href={el.link} target='_blank' rel='noreferrer'>
									{el.name}
								</a>
							</motion.li>
						);
					})}
				</ul>
			</div>
		</motion.section>
	);
}
