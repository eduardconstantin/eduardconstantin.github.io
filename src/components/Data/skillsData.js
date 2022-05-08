import reactIcon from '../../images/skills/react.png'
import htmlIcon from '../../images/skills/html.png'
import cssIcon from '../../images/skills/css.png'
import bootstrapIcon from '../../images/skills/bootstrap.png'
import dotnetIcon from '../../images/skills/dotnet.png'
import sqlIcon from '../../images/skills/db.png'
import jsIcon from '../../images/skills/js.png'
import csharpIcon from '../../images/skills/csharp.png'

import unityIcon from '../../images/skills/unity.png'
import vuforiaIcon from '../../images/skills/vuforia.png'

import psIcon from '../../images/skills/ps.png'
import figmaIcon from '../../images/skills/figma.png'

const web = [
    {skillName: "HTML", xp: "8 YRS", icon: htmlIcon},
    {skillName: "CSS", xp: "8 YRS", icon: cssIcon},
    {skillName: "Javascript", xp: "4 YRS", icon: jsIcon},
    {skillName: "Bootstrap", xp: "5 YRS", icon: bootstrapIcon},
    {skillName: "C#", xp: "3 YRS", icon: csharpIcon},
    {skillName: "react js", xp: "2 YRS", icon: reactIcon},
    {skillName: "sql", xp: "2 YRS", icon: sqlIcon},
    {skillName: ".net", xp: "2 YRS", icon: dotnetIcon},
];

const game = [
    {skillName: "Unity", xp: "5 YRS", icon: unityIcon},
    {skillName: "C#", xp: "3 YRS", icon: csharpIcon},
    {skillName: "Vuforia", xp: "3 YRS", icon: vuforiaIcon}
];

const design = [
    {skillName: "Photoshop", xp: "15 YRS", icon: psIcon},
    {skillName: "Figma", xp: "1 YR", icon: figmaIcon}
];

const skill = [
    {name: ["Creative", "Perseverant", "Patient", "Enthusiastic", "Hardworking", "Amusing"], percentage: 100},
    {name: "Web Dev", percentage: 50},
    {name: "Game Dev", percentage: 20},
    {name: "Design", percentage: 30},
];

export {web, game, design, skill}