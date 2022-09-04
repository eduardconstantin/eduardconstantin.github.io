import { useEffect } from 'react';

export const useChangeDocumentTitle = (pageTitle) => {
	useEffect(() => {
		document.title = `Eduard-Constantin Ibinceanu | Personal Portfolio - ${pageTitle}`;
	}, [pageTitle]);
};
