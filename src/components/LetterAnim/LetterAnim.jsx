import React from 'react';
import { motion } from 'framer-motion';
import { item, letter } from './LetterAnim.anim';

const Wrapper = (props) => {
	return <span className='word-wrapper'>{props.children}</span>;
};

export default LetterAnim = (props) => {
	const splitWords = props.text.split(' ');

	const words = [];

	for (const [, item] of splitWords.entries()) {
		words.push(item.split(''));
	}

	words.map((word, i, arr) => {
		if (arr.length - 1 !== i) return word.push('\u00A0');
		else return null;
	});

	return (
		<props.tag>
			{words.map((word, index) => {
				return (
					<Wrapper key={index}>
						{words[index].flat().map((element, index) => {
							return (
								<motion.span key={index} variants={letter} style={{ position: 'relative' }}>
									<motion.span key={index} style={{ position: 'absolute', left: '0' }} variants={letter}>
										{element}
									</motion.span>
									<motion.span key={index + 1} style={{ position: 'absolute', left: '0' }} variants={letter}>
										{element}
									</motion.span>

									<motion.span key={index + 3} style={{ display: 'inline-block' }} variants={item}>
										{element}
									</motion.span>

									<motion.span key={index + 2} style={{ position: 'absolute', left: '0' }} variants={letter}>
										{element}
									</motion.span>
								</motion.span>
							);
						})}
					</Wrapper>
				);
			})}
		</props.tag>
	);
};
