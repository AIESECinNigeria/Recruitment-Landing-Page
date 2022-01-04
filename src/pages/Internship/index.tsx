import { FC, ReactElement } from 'react';
import ArrowRightIcon from '../../assets/Svgs/ArrowRight';

import InternshipHero from '../../Components/InternshipHero';
import InternshipBenefits from '../../Components/InternshipBenefits';
import AboutFAQs from '../../Components/AboutFAQs';
import AboutTips from '../../Components/AboutTips';
import CTABanner from '../../Components/CTABanner';
import InternshipDataProp from '../../models/InternshipDataProp';
import OpportunityCarousel from '../../Components/OpportunityPortal/OpportunityCarousel';
import './internship.styles.scss';

export interface InternshipProps {
	bannerText: string;
	ctaLink: string;
	internshipData: InternshipDataProp;
    heroBgBig: string;
	heroBgSmall: string;
	heroTitleText: ReactElement<any, any>;
}

const Internship: FC<InternshipProps> = ({
	bannerText,
	ctaLink,
	internshipData,
    heroBgBig,
	heroBgSmall,
	heroTitleText,
}) => {
	return (
		<main id='internship'>
			<InternshipHero
				id={internshipData.id}
				logo={internshipData.logoUrl}
				logoAlt={internshipData.logoAlt}
				organizationsText={internshipData.organizationsText}
				durationText={internshipData.durationText}
				heroBgBig={heroBgBig}
				heroBgSmall={heroBgSmall}
				heroTitleText={heroTitleText}
			/>
            <InternshipBenefits />
			<AboutTips
				titleText='Develop your leadership while boosting your career prospects with an international internship in your field'
				tipsFor={internshipData.id}
			/>
			<div className='opportunity__carousel'>
				<div className='opportunity__carousel__content'>
					<div className='top'>
						<p className='popular__opportunities'>Popular Opportunities</p>
						<a
							href={internshipData.viewMoreOpportunitiesLink}
							className='view__more'
						>
							<p className={internshipData.id}>
								View more opportunities
								<ArrowRightIcon />
							</p>
						</a>
					</div>
					<OpportunityCarousel
						parentId={internshipData.id}
						opportunities={internshipData.opportunities}
					/>
				</div>
			</div>
			<AboutFAQs />
			<CTABanner
				bannerFor={internshipData.id}
				bannerText={bannerText}
				ctaLink={ctaLink}
			/>
		</main>
	);
};

export default Internship;
