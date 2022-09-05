import React from 'react';

export const SkillItem = ({ icon, title, xp }) => {
	return (
		<div className='skill'>
			<i className='iconContainer'>
				<img src={icon} alt='icon' height='35px' />
			</i>

			<div className='skillContent'>
				<p>{title}</p>
				<p>XP: {xp}</p>
			</div>
		</div>
	);
};
