import {FC} from 'react';

import TestimonialCarousel from './TestimonialCarousel';
import './testimonials.styles.scss';

const Testimonials: FC = () => {
    return (
        <section id='testimonials'>
            <TestimonialCarousel />
        </section>
    );
};

export default Testimonials;