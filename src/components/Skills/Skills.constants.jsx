import reactIcon from '../../Assets/images/skills/react.png';
import htmlIcon from '../../Assets/images/skills/html.png';
import cssIcon from '../../Assets/images/skills/css.png';
import bootstrapIcon from '../../Assets/images/skills/bootstrap.png';
import dotnetIcon from '../../Assets/images/skills/dotnet.png';
import sqlIcon from '../../Assets/images/skills/db.png';
import jsIcon from '../../Assets/images/skills/js.png';
import csharpIcon from '../../Assets/images/skills/csharp.png';

import unityIcon from '../../Assets/images/skills/unity.png';
import vuforiaIcon from '../../Assets/images/skills/vuforia.png';

import psIcon from '../../Assets/images/skills/ps.png';
import figmaIcon from '../../Assets/images/skills/figma.png';

const web = [
	{ skillName: 'HTML', xp: '8 YRS', icon: htmlIcon },
	{ skillName: 'CSS', xp: '8 YRS', icon: cssIcon },
	{ skillName: 'Javascript', xp: '4 YRS', icon: jsIcon },
	{ skillName: 'Bootstrap', xp: '5 YRS', icon: bootstrapIcon },
	{ skillName: 'C#', xp: '3 YRS', icon: csharpIcon },
	{ skillName: 'react js', xp: '2 YRS', icon: reactIcon },
	{ skillName: 'sql', xp: '2 YRS', icon: sqlIcon },
	{ skillName: '.net', xp: '2 YRS', icon: dotnetIcon },
];

const game = [
	{ skillName: 'Unity', xp: '5 YRS', icon: unityIcon },
	{ skillName: 'C#', xp: '3 YRS', icon: csharpIcon },
	{ skillName: 'Vuforia', xp: '3 YRS', icon: vuforiaIcon },
];

const design = [
	{ skillName: 'Photoshop', xp: '15 YRS', icon: psIcon },
	{ skillName: 'Figma', xp: '1 YR', icon: figmaIcon },
];

const skill = [
	{ name: ['Creative', 'Perseverant', 'Patient', 'Enthusiastic', 'Hardworking', 'Amusing'], percentage: 100 },
	{ name: 'Web Dev', percentage: 50 },
	{ name: 'Game Dev', percentage: 20 },
	{ name: 'Design', percentage: 30 },
];

export { web, game, design, skill };
