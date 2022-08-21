import webLink from '../../assets/images/links/globe2.svg';
import dribbbleLink from '../../assets/images/links/dribbble.svg';
import gitLink from '../../assets/images/links/github.svg';

import portfolio from '../../assets/images/projects/portfolio.png';
import livrator from '../../assets/images/projects/livrator.png';
import ghicicuvantul from '../../assets/images/projects/gc.png';
import cryptocurrency from '../../assets/images/projects/cc.png';
import traveldeck from '../../assets/images/projects/td.png';
import xboxdash from '../../assets/images/projects/xd.png';

import geex from '../../assets/images/projects/geex.png';
import tla from '../../assets/images/projects/tla.png';
import arbachelor from '../../assets/images/projects/bachelor.png';
import arlgtv from '../../assets/images/projects/arlg.png';
import ardissertation from '../../assets/images/projects/dissertation.png';
import arop7 from '../../assets/images/projects/arop7.png';
import castleescape from '../../assets/images/projects/castleescape.png';

import smarthome from '../../assets/images/projects/smarthome.png';
import godofwar from '../../assets/images/projects/godofwar.png';
import itlogo from '../../assets/images/projects/intimelogo.png';
import nyoologo from '../../assets/images/projects/ntoologo.png';
import btnanim from '../../assets/images/projects/btnAnim.png';
import navui from '../../assets/images/projects/navui.png';
// import mplogo from '../../assets/images/projects/mplogo.png';

const web = [
	{
		name: 'Portfolio',
		date: '2022-05-08',
		cover: portfolio,
		links: [{ icon: gitLink, link: 'https://github.com/eduardconstantin/eduardconstantin.github.io' }],
	},
	{
		name: 'Livrator.ro',
		date: '2022-04-30',
		cover: livrator,
		links: [{ icon: webLink, link: 'https://www.livrator.ro' }],
	},
	{ name: 'Ghiceste cuvantul', date: '2022-03-20', cover: ghicicuvantul, links: [{ icon: webLink, link: '#' }] },
	{
		name: 'Xbox Dashboard',
		date: '2022-03-06',
		cover: xboxdash,
		links: [{ icon: dribbbleLink, link: 'https://dribbble.com/shots/17656116-Xbox-Dashboard-Animation' }],
	},
	{
		name: 'Crypto Currencies',
		date: '2021-10-21',
		cover: cryptocurrency,
		links: [
			{ icon: gitLink, link: 'https://github.com/eduardconstantin/Top-three-crypto' },
			{ icon: dribbbleLink, link: 'https://dribbble.com/shots/16701637-Top-three-cryptocurrencies' },
		],
	},
	{
		name: 'Travel Deck',
		date: '2021-11-16',
		cover: traveldeck,
		links: [{ icon: dribbbleLink, link: 'https://dribbble.com/shots/16874996-Travel-Deck' }],
	},
];
const design = [
	{
		name: 'Xbox Dashboard UI',
		date: '2022-02-13',
		cover: xboxdash,
		links: [{ icon: dribbbleLink, link: 'https://dribbble.com/shots/17656116-Xbox-Dashboard-Animation' }],
	},
	{
		name: 'Smart Home Dashboard UI',
		date: '2022-04-03',
		cover: smarthome,
		links: [{ icon: dribbbleLink, link: 'https://dribbble.com/shots/17912071-Smart-Home-Dashboard-UI' }],
	},
	{
		name: 'God of War Concept UI',
		date: '2022-03-13',
		cover: godofwar,
		links: [{ icon: dribbbleLink, link: 'https://dribbble.com/shots/17710279-God-of-War-Website-design' }],
	},
	{
		name: 'In time Logo',
		date: '2020-04-20',
		cover: itlogo,
		links: [{ icon: dribbbleLink, link: 'https://dribbble.com/shots/16788202-IN-TIME-Logo-design' }],
	},
	{
		name: 'NY Open Offices Logo',
		date: '2018-05-12',
		cover: nyoologo,
		links: [{ icon: dribbbleLink, link: 'https://dribbble.com/shots/18038998-New-York-Open-Offices-Logo-design' }],
	},
	{
		name: 'Navigation Menu Animation',
		date: '2022-03-20',
		cover: navui,
		links: [{ icon: dribbbleLink, link: 'https://dribbble.com/shots/17766382-Navigation-menu-Animation-concept' }],
	},
	{
		name: 'Button Animation',
		date: '2022-05-01',
		cover: btnanim,
		links: [
			{ icon: gitLink, link: 'https://github.com/eduardconstantin/Comic-book-button-anim' },
			{ icon: dribbbleLink, link: 'https://dribbble.com/shots/18145123-Button-Animation' },
		],
	},
	// {name: "Midnight Pulse Logo", date: "2018-07-17", cover: mplogo, links:[{icon: dribbbleLink, link:"#"}]}
];
const game = [
	{ name: 'Ge Ex', date: '2014-09-01', cover: geex, links: [] },
	{
		name: 'The Last Ancient',
		date: '2017-05-01',
		cover: tla,
		links: [{ icon: webLink, link: 'https://halfroundgames.itch.io/the-last-ancient' }],
	},
	{ name: "Bachelor's degree AR project", date: '2018-07-20', cover: arbachelor, links: [] },
	{ name: "Master's degree AR project", date: '2020-07-20', cover: ardissertation, links: [] },
	{ name: 'LG Rollable TV AR project', date: '2019-01-23', cover: arlgtv, links: [] },
	{ name: 'Oneplus 7 AR project', date: '2019-05-21', cover: arop7, links: [] },
	{ name: 'Castle Escape', date: '2018-12-20', cover: castleescape, links: [] },
];

export { web, game, design };
