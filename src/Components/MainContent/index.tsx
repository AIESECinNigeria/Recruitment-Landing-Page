import { FC, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import HeaderDesktop from '../HeaderDesktop';
import Footer from '../Footer';
import './maincontent.styles.scss'

const Home = lazy<FC>(() => import('../../pages/Home'));

const MainContent: FC = () => {
	return (
        <section id='main__content'>
            <HeaderDesktop />
            <Routes>
                <Route path='/' element={<Home />}/>
            </Routes>
            <Footer />
        </section>
    );
};

export default MainContent;
