import { FC } from 'react';

import HomeHero from '../../Components/HomeHero';
import Testimonials from '../../Components/Testimonials';
import './home.styles.scss';

const Home: FC = () => {
    return (
        <main id='home'>
            <HomeHero />
            <Testimonials />
        </main>
    );
};

export default Home;