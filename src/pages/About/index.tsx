import { FC } from 'react';

import AboutHero from '../../Components/AboutHero';
import AboutWhatWeDo from '../../Components/AboutWhatWeDo';
import AboutTips from '../../Components/AboutTips';
import AboutFAQs from '../../Components/AboutFAQs';
import SubscribeEmail from '../../Components/SubscribeEmail';
import './about.styles.scss';

const About: FC = () => {
    return (
        <main id='about'>
            <AboutHero />
            <AboutWhatWeDo />
            <AboutTips />
            <AboutFAQs />
			<SubscribeEmail />
        </main>
    );
};

export default About