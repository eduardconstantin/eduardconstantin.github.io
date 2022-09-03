import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion';
import { Background, generateBackgroundIcons, Menu, Welcome, About, Skills, Projects } from './components';

const App = () => {
	const location = useLocation();
	const [hasLoaded, setHasLoaded] = useState(false);
	const [bg, setBg] = useState([]);
	const [currentPage, setCurrentPage] = useState(0);

	useEffect(() => {
		setBg(generateBackgroundIcons());
	}, []);

	return (
		<div className='App'>
			<AnimateSharedLayout>
				<AnimatePresence exitBeforeEnter>
					{hasLoaded ? (
						<motion.div key='content' className='content'>
							<Background background={bg} hasLoaded={hasLoaded} />
							<AnimatePresence exitBeforeEnter>
								<Routes location={location} key={location.pathname}>
									<Route path='/' element={<About />} />
									<Route path='/skills' element={<Skills />} />
									<Route path='/projects' element={<Projects />} />
								</Routes>
							</AnimatePresence>
							<Menu selectPage={setCurrentPage} currentPage={currentPage} />
						</motion.div>
					) : (
						<motion.div key='loader' className='loader'>
							<Background background={bg} hasLoaded={hasLoaded} />
							<Welcome setLoading={setHasLoaded} />
						</motion.div>
					)}
				</AnimatePresence>
			</AnimateSharedLayout>
		</div>
	);
};

export default hot(App);
