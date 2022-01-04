import { FC } from 'react';

import HomeHero from '../../Components/HomeHero';
import HomeAbout from '../../Components/HomeAbout';
import OpportunityPortal from '../../Components/OpportunityPortal';
import Testimonials from '../../Components/Testimonials';
import BlogPreview from '../../Components/BlogPreview';
import opportunityPortalData from '../../data/opportunityPortalData';
import SubscribeEmail from '../../Components/SubscribeEmail';
import './home.styles.scss';

const Home: FC = () => {
	return (
		<main id='home'>
			<HomeHero />
			<HomeAbout />
			{opportunityPortalData.map((opportunityPortal) => (
				<OpportunityPortal
					key={opportunityPortal.id}
					id={opportunityPortal.id}
					logoUrl={opportunityPortal.logoUrl}
					logoAlt={opportunityPortal.logoAlt}
					opportunityTitle={opportunityPortal.opportunityTitle}
					opportunityText={opportunityPortal.opportunityText}
					organizationsText={opportunityPortal.organizationsText}
					durationText={opportunityPortal.durationText}
					learnMoreLink={opportunityPortal.learnMoreLink}
					topText={opportunityPortal.topText}
					viewMoreOpportunitiesLink={
						opportunityPortal.viewMoreOpportunitiesLink
					}
					opportunities={opportunityPortal.opportunities}
				/>
			))}
			<Testimonials />
			<BlogPreview />
			<SubscribeEmail />
		</main>
	);
};

export default Home;
