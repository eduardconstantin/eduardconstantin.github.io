import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './assets/styles/main.scss';
import App from './App';

ReactDOM.render(
	<React.StrictMode>
		<MemoryRouter>
			<App />
		</MemoryRouter>
	</React.StrictMode>,
	document.getElementById('root')
);
