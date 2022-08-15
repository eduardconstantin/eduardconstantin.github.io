import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { digitAnim, digitCont } from './NumberColumn.anim';

export default function NumberColumn({ digit }) {
	const [pos, setPos] = useState(0);
	const container = useRef();

	const digitsArray = Array.from(Array(10).keys()).reverse();

	const setColumnToNumber = (number) => {
		setPos(container.current.clientHeight * parseInt(number, 10));
	};

	useEffect(() => setColumnToNumber(digit), [digit]);

	const Decimal = (d) => {
		return (
			<div className='counterDot'>
				<div className='digit'>
					<span>{d}</span>
				</div>
			</div>
		);
	};

	const Digit = () => {
		return (
			<>
				<motion.div variants={digitAnim} custom={pos} animate='anim' className='counterColumn'>
					{digitsArray.map((no) => (
						<div key={`n${no}`} className='digit'>
							<span>{no}</span>
						</div>
					))}
				</motion.div>
				<span className='digitPlaceholder'>0</span>
			</>
		);
	};

	return (
		<motion.div variants={digitCont} animate='show' className='counterContainer' ref={container}>
			{digit.match(/\D+/) ? Decimal(digit) : Digit()}
		</motion.div>
	);
}
