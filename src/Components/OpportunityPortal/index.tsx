import { FC } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { BsArrowUpRight } from 'react-icons/bs';

import OpportunityCarousel from './OpportunityCarousel';
import ArrowRightIcon from '../../assets/Svgs/ArrowRight';
import BorderBottomLongWhite from '../../assets/Svgs/BorderBottomLongWhite';
import './opportunityportal.styles.scss';

interface OpportunityPortalProps {
	id: string;
	logoUrl: string;
	logoAlt: string;
	opportunityTitle: string;
	opportunityText: string;
	organizationsText: string;
	durationText: string;
	learnMoreLink: string;
	topText: string | undefined;
	viewMoreOpportunitiesLink: string;
	opportunities: {
		id: string;
		imgUrl: string;
		opportunityTitle: string;
		location: string;
	}[];
}

const OpportunityPortal: FC<OpportunityPortalProps> = ({
	id,
	logoUrl,
	logoAlt,
	opportunityTitle,
	opportunityText,
	organizationsText,
	durationText,
	learnMoreLink,
	topText,
	viewMoreOpportunitiesLink,
	opportunities,
}) => {
	return (
		<section className='opportunity__portal'>
			<div className={`opportunity__details ${id}`}>
				<div className='opportunity__details__content'>
					<ScrollAnimation
						className='opportunity__logo'
						animateIn='animate__flipInX'
					>
						<img src={logoUrl} alt={logoAlt} />
					</ScrollAnimation>
					<div className='opportunity__cta'>
						<div className='opportunity__desc'>
							<h1 className='title'>{opportunityTitle}</h1>
							<p className='text'>{opportunityText}</p>
							<div className='other__desc'>
								<div className='desc'>
									<span className='box'></span>
									<div>
										<p className='p'>Organizations</p>
										<p>{organizationsText}</p>
									</div>
								</div>
								<div className='desc'>
									<span className='box'></span>
									<div>
										<p className='p'>Duration</p>
										<p>{durationText}</p>
									</div>
								</div>
							</div>
						</div>

						<a href={learnMoreLink} className='learn__more'>
							<p>
								Learn More
								<BsArrowUpRight />
							</p>
							<div className='border__bottom'>
								<BorderBottomLongWhite />
							</div>
						</a>
					</div>
				</div>
			</div>

			<div className='opportunity__carousel'>
				<div className='opportunity__carousel__content'>
					<div className='top'>
						<p className='popular__opportunities'>
							{topText ? topText : 'Popular Opportunities'}
						</p>
						<a href={viewMoreOpportunitiesLink} className='view__more'>
							<p>
								View more opportunities
								<ArrowRightIcon />
							</p>
						</a>
					</div>
					<OpportunityCarousel parentId={id} opportunities={opportunities} />
				</div>
			</div>
		</section>
	);
};

export default OpportunityPortal;
