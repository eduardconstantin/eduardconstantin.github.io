import {
	backgroundIcons,
	MIN_SCREEN_WIDTH,
	MAX_SCREEN_WIDTH,
	MIN_ICON_SIZE,
	MAX_ICON_SIZE,
	WINDOW_HEIGHT,
	WINDOW_WIDTH,
} from './ProjectBackground.constants';
import { rangeNumber, normalizeNumber } from '../../helpers';

export const generateBackgroundIcons = () => {
	const iconsData = [];

	const normalizedWidth = normalizeNumber(WINDOW_WIDTH, MIN_SCREEN_WIDTH, MAX_SCREEN_WIDTH);
	const iconSize = rangeNumber(normalizedWidth, MIN_ICON_SIZE, MAX_ICON_SIZE);

	const noOfRows = Math.floor(WINDOW_HEIGHT / iconSize);
	const noOfColumns = Math.floor(WINDOW_WIDTH / iconSize);
	const noOfIcons = noOfRows * noOfColumns;

	for (let i = 0; i < noOfIcons; i++) {
		const randomIcon = backgroundIcons[rangeNumber(null, 0, backgroundIcons.length)];
		iconsData.push({
			iconId: `${randomIcon.name}_icon_${i}`,
			iconSrc: randomIcon.src,
			iconSize,
			iconSeed: Math.random(),
		});
	}

	return iconsData;
};
