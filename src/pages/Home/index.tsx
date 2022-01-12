import { FC } from 'react';

import HomeHero from '../../Components/HomeHero';
import HomeAbout from '../../Components/HomeAbout';
import OpportunityPortal from '../../Components/OpportunityPortal';
import Testimonials from '../../Components/Testimonials';
import JoinSteps from '../../Components/JoinSteps';
import AboutFAQs from '../../Components/AboutFAQs';
import './home.styles.scss';

const Home: FC = () => {
	return (
		<main id='home'>
			<HomeHero />
			<HomeAbout />
			<OpportunityPortal
				id={1}
				logoUrl={
					'https://res.cloudinary.com/dkaflz24l/image/upload/v1637840016/AiN%20Website%20Assets/membership-logo_mnvakp.svg'
				}
				logoAlt={'Gta logo'}
			/>
			<AboutFAQs />
			<Testimonials />
			<JoinSteps />
			<OpportunityPortal
				id={2}
				logoUrl={
					'https://res.cloudinary.com/dkaflz24l/image/upload/v1637840016/AiN%20Website%20Assets/membership-logo_mnvakp.svg'
				}
				logoAlt={'Gta logo'}
			/>
		</main>
	);
};

export default Home;
