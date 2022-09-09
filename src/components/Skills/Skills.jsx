import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skillCat } from './Skills.constants';
import Counter from '../Counter/Counter';
import { SkillItem } from './SkillItem/SkillItem';
import { skillsAnim, leftAnim, rightAnim, skillCatAnim } from './Skills.anim';
import { useChangeDocumentTitle } from '../../helpers/useChangeDocumentTitle';

export default function Skills({ pageTitle }) {
	const { soft, ...hardSkills } = skillCat;

	const skillInterval = useRef(0);
	const skillTimeout = useRef(0);

	const [softSkillIndex, setSoftSkillIndex] = useState(0);
	const [skillCategory, setSkillCategory] = useState('soft');

	useChangeDocumentTitle(pageTitle);

	const softSkillChange = () => {
		skillInterval.current = setInterval(() => {
			setSoftSkillIndex((prev) => (prev + 1) % skillCat['soft'].categoryName.length);
		}, 4500);
	};

	const skillMouseEnter = (name) => {
		setSkillCategory(name);
		clearInterval(skillInterval.current);
		clearTimeout(skillTimeout.current);
	};

	const skillMouseLeave = () => {
		skillTimeout.current = setTimeout(() => {
			setSkillCategory('soft');
			softSkillChange();
		}, 150);
	};

	useEffect(() => {
		softSkillChange();
		return () => clearInterval(skillInterval.current);
	}, []);

	return (
		<motion.section className='skills' variants={skillsAnim} initial='init' animate='anim' exit='end'>
			<motion.div className='leftSide' variants={leftAnim}>
				{Object.entries(hardSkills).map((skill) => {
					return (
						<div
							key={skill[0]}
							className='skillsContainer'
							onMouseEnter={() => skillMouseEnter(skill[0])}
							onMouseLeave={() => skillMouseLeave()}
						>
							{skill[1].skillList.map(({ name, icon, xp }) => (
								<SkillItem key={name} icon={icon} title={name} xp={xp} />
							))}
						</div>
					);
				})}
			</motion.div>

			<motion.div className='rightSide' variants={rightAnim}>
				<AnimatePresence initial={true} exitBeforeEnter>
					{skillCategory === 'soft' ? (
						<motion.h1
							key={`s${softSkillIndex}`}
							className='catName'
							variants={skillCatAnim}
							initial='hidden'
							animate='visible'
							exit='exit'
						>
							{skillCat['soft'].categoryName[softSkillIndex]}
						</motion.h1>
					) : (
						<motion.h1
							key={`h${skillCategory}`}
							className='catName'
							variants={skillCatAnim}
							initial='hidden'
							animate='visible'
							exit='exit'
						>
							{skillCat[skillCategory].categoryName}
						</motion.h1>
					)}
				</AnimatePresence>
				<div className='percentage'>
					<Counter numberValue={skillCat[skillCategory].percentage} decimalDigits={0} />
				</div>
			</motion.div>
		</motion.section>
	);
}
