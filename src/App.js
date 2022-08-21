import { useEffect, useState } from 'react';
import { hot } from 'react-hot-loader/root';
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion';
import { Background, generateBackgroundIcons, Menu, Welcome, About, Skills, Projects } from './components';
import { pageTransitionAnim } from './App.anim';

const switchPage = (pageNo) => {
	switch (pageNo) {
		case 0:
			return <About />;
		case 1:
			return <Skills />;
		case 2:
			return <Projects />;
		default:
			return <Welcome />;
	}
};

const App = () => {
	const [hasLoaded, setHasLoaded] = useState(false);
	const [page, setPage] = useState(0);
	const [bg, setBg] = useState([]);

	useEffect(() => {
		setBg(generateBackgroundIcons());
	}, []);

	return (
		<div className='App'>
			<AnimateSharedLayout>
				<AnimatePresence exitBeforeEnter>
					{hasLoaded ? (
						<motion.div key='content'>
							<Background background={bg} hasLoaded={hasLoaded} />
							<AnimatePresence exitBeforeEnter>
								<motion.div key={page} variants={pageTransitionAnim} initial='init' animate='anim' exit='end'>
									{switchPage(page)}
								</motion.div>
							</AnimatePresence>
							<Menu selectPage={setPage} pageNo={page} />
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
