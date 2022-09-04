import { useEffect } from 'react';
import ReactGA from 'react-ga';

export const useGaTracker = (location) => {
	const TRACKING_ID = process.env.REACT_APP_TRACKING_ID;

	ReactGA.initialize(TRACKING_ID);
	console.log(TRACKING_ID);
	useEffect(() => {
		ReactGA.pageview(location.pathname + location.search);
	}, [location]);
};
