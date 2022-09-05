import reactIcon from '../../assets/images/skills/react.png';
import htmlIcon from '../../assets/images/skills/html.png';
import cssIcon from '../../assets/images/skills/css.png';
import bootstrapIcon from '../../assets/images/skills/bootstrap.png';
import dotnetIcon from '../../assets/images/skills/dotnet.png';
import sqlIcon from '../../assets/images/skills/db.png';
import jsIcon from '../../assets/images/skills/js.png';
import csharpIcon from '../../assets/images/skills/csharp.png';

import unityIcon from '../../assets/images/skills/unity.png';
import vuforiaIcon from '../../assets/images/skills/vuforia.png';

import psIcon from '../../assets/images/skills/ps.png';
import figmaIcon from '../../assets/images/skills/figma.png';

export const skillCat = {
	web: {
		categoryName: 'Web Dev',
		percentage: 50,
		skillList: [
			{ name: 'HTML', xp: '8 YRS', icon: htmlIcon },
			{ name: 'CSS', xp: '8 YRS', icon: cssIcon },
			{ name: 'Javascript', xp: '4 YRS', icon: jsIcon },
			{ name: 'Bootstrap', xp: '5 YRS', icon: bootstrapIcon },
			{ name: 'C#', xp: '3 YRS', icon: csharpIcon },
			{ name: 'react js', xp: '2 YRS', icon: reactIcon },
			{ name: 'sql', xp: '2 YRS', icon: sqlIcon },
			{ name: '.net', xp: '2 YRS', icon: dotnetIcon },
		],
	},
	game: {
		categoryName: 'Game Dev',
		percentage: 20,
		skillList: [
			{ name: 'Unity', xp: '5 YRS', icon: unityIcon },
			{ name: 'C#', xp: '3 YRS', icon: csharpIcon },
			{ name: 'Vuforia', xp: '3 YRS', icon: vuforiaIcon },
		],
	},
	design: {
		categoryName: 'Design',
		percentage: 30,
		skillList: [
			{ name: 'Photoshop', xp: '15 YRS', icon: psIcon },
			{ name: 'Figma', xp: '1 YR', icon: figmaIcon },
		],
	},
	soft: {
		categoryName: ['Creative', 'Perseverant', 'Patient', 'Enthusiastic', 'Hardworking', 'Amusing'],
		percentage: 100,
	},
};
