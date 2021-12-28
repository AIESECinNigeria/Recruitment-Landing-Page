import React, { FC } from 'react';

import AboutTips from '../../Components/AboutTips';
import AboutFAQs from '../../Components/AboutFAQs';
import './about.styles.scss';

const About: FC = () => {
    return (
        <main id='about'>
            <AboutTips />
            <AboutFAQs />
        </main>
    );
};

export default About