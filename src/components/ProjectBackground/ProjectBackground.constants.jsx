import { importAllImages } from '../../helpers';

export const MIN_SCREEN_WIDTH = 320;
export const MAX_SCREEN_WIDTH = 4096;

export const MIN_ICON_SIZE = 60;
export const MAX_ICON_SIZE = 150;

export const WINDOW_HEIGHT = window.innerHeight;
export const WINDOW_WIDTH = window.innerWidth;

export const backgroundIcons = importAllImages(
	require.context('../../assets/images/bgIcons', false, /\.(png|jpe?g|svg)$/)
);
