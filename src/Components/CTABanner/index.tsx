import { FC } from 'react';

import './ctabanner.styles.scss';

type CTABannerProps = {
	bannerFor: string;
	bannerText: string;
	ctaLink: string
};

const CTABanner: FC<CTABannerProps> = ({ bannerFor, bannerText, ctaLink }) => {
	return (
		<section id='cta__banner' className={bannerFor}>
			<div className='cta__banner__content'>
				<h1 className='cta__banner__content__text'>
					{bannerText}
				</h1>
                <button className={bannerFor}>Get Started</button>
			</div>
		</section>
	);
};

export default CTABanner;
