import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { web, game, design, skill } from './Skills.constants';
import Counter from '../Counter/Counter';
import SkillItem from './SkillItem/SkillItem';
import { skillsAnim, leftAnim, rightAnim, skillCatAnim } from './Skills.anim';

export default function Skills() {
	const skillCat = [web, game, design];

	const skillInterval = useRef(0);
	const skillTimeout = useRef(0);

	const [hardSkillIndex, setHardSkillIndex] = useState(0);
	const [softSkillIndex, setSoftSkillIndex] = useState(0);

	const skillCatChange = () => {
		skillInterval.current = setInterval(() => {
			setSoftSkillIndex((prev) => (prev + 1) % skill[0].name.length);
		}, 4500);
	};

	const skillMouseEnter = (index) => {
		setHardSkillIndex(index + 1);
		clearInterval(skillInterval.current);
		clearTimeout(skillTimeout.current);
	};

	const skillMouseLeave = () => {
		skillTimeout.current = setTimeout(() => {
			setHardSkillIndex(0);
			skillCatChange();
		}, 150);
	};

	useEffect(() => {
		skillCatChange();
		return () => clearInterval(skillInterval.current);
	}, []);

	return (
		<motion.section className='skills' variants={skillsAnim} initial='init' animate='anim'>
			<motion.div className='leftSide' variants={leftAnim}>
				{skillCat.map((skill, i) => {
					return (
						<div
							key={i}
							className='skillsContainer'
							onMouseEnter={() => skillMouseEnter(i)}
							onMouseLeave={() => skillMouseLeave()}
						>
							{skill.map((el) => (
								<SkillItem key={el.skillName} icon={el.icon} title={el.skillName} xp={el.xp} />
							))}
						</div>
					);
				})}
			</motion.div>

			<motion.div className='rightSide' variants={rightAnim}>
				<AnimatePresence initial={false}>
					{hardSkillIndex === 0 ? (
						<motion.h1
							key={`s${softSkillIndex}`}
							className='catName'
							variants={skillCatAnim}
							initial='hidden'
							animate='visible'
							exit='exit'
						>
							{skill[0].name[softSkillIndex]}
						</motion.h1>
					) : (
						<motion.h1
							key={`h${hardSkillIndex}`}
							className='catName'
							variants={skillCatAnim}
							initial='hidden'
							animate='visible'
							exit='exit'
						>
							{skill[hardSkillIndex].name}
						</motion.h1>
					)}
				</AnimatePresence>
				<div className='percentage'>
					<Counter numberValue={skill[hardSkillIndex].percentage} decimalDigits={0} />
				</div>
			</motion.div>
		</motion.section>
	);
}
