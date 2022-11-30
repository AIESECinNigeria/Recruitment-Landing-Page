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
					'/assets/images/AIESEC_member.svg'
				}
				logoAlt={'Gta logo'}
			/>
			<AboutFAQs />
			<Testimonials />
			<JoinSteps />
			<OpportunityPortal
				id={2}
				logoUrl={
					'/assets/images/AIESEC_member.svg'
				}
				logoAlt={'Gta logo'}
			/>
		</main>
	);
};

export default Home;
