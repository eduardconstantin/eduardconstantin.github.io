import React from 'react';

export const SkillItem = ({ icon, title, xp }) => {
	return (
		<div className='skill'>
			<i className='iconContainer'>
				<img src={icon} alt='icon' />
			</i>

			<div className='skillContent'>
				<p>{title}</p>
				<p>XP: {xp}</p>
			</div>
		</div>
	);
};
