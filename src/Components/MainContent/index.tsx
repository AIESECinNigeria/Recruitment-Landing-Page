import { FC, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import HeaderDesktop from '../HeaderDesktop';
import SubscribeEmail from '../SubscribeEmail';
import Footer from '../Footer';
import './maincontent.styles.scss'

const Home = lazy<FC>(() => import('../../pages/Home'));

const MainContent: FC = () => {
	return (
        <section id='main__content'>
            <HeaderDesktop />
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='*' element={<p>Not found</p>}/>
            </Routes>
            <SubscribeEmail />
            <Footer />
        </section>
    );
};

export default MainContent;
