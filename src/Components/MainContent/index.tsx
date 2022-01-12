import { FC, lazy, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import * as ROUTES from '../../ROUTES';
import HoverOverlay from '../HoverOverlay';
import HeaderDesktop from '../HeaderDesktop';
import Footer from '../Footer';
import './maincontent.styles.scss';

const Home = lazy<FC>(() => import('../../pages/Home'));
const MainContent: FC = () => {
	const [showOverlay, setShowOverlay] = useState<boolean>(false);

	return (
		<section id='main__content'>
			<HeaderDesktop setShowOverlay={setShowOverlay} />
			<HoverOverlay show={showOverlay} />
			<Routes>
				<Route path={ROUTES.HOME} element={<Home />} />
				<Route path='*' element={<p>Not found</p>} />
			</Routes>
			<Footer />
		</section>
	);
};

export default MainContent;
