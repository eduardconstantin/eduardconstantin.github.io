import { useEffect } from 'react';
import ReactGA from 'react-ga4';

export const useGaTracker = (location) => {
	useEffect(() => {
		ReactGA.send({ hitType: 'pageview', page: location.pathname });
	}, [location]);
};
