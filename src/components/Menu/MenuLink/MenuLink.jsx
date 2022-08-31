import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

export const MenuLink = ({ index, name, navLink, hoverPageNo, onTap, onHoverStart, onHoverEnd }) => {
	return (
		<motion.li onTap={onTap} onHoverStart={onHoverStart} onHoverEnd={onHoverEnd}>
			<NavLink to={navLink}>{name}</NavLink>
			{hoverPageNo === index && (
				<>
					<motion.div className='selectedBack' layoutId='backColor'></motion.div>
					<motion.div className='selectedFront' layoutId='underline'></motion.div>
				</>
			)}
		</motion.li>
	);
};

MenuLink.defaultProps = {
	index: 0,
	name: 'Menu link',
	navLink: '/',
	hoverPageNo: 0,
	onTap: () => {},
	onHoverStart: () => {},
	onHoverEnd: () => {},
};

MenuLink.propTypes = {
	index: PropTypes.number,
	name: PropTypes.string,
	navLink: PropTypes.string,
	hoverPageNo: PropTypes.number,
	onTap: PropTypes.func,
	onHoverStart: PropTypes.func,
	onHoverEnd: PropTypes.func,
};
