import { FC } from 'react';

import BorderBottomLongThick from '../../assets/Svgs/BorderBottomLongThick';
import './abouthero.styles.scss';

const AboutHero: FC = () => {
	return (
		<section id='about__hero'>
			<div className='about__hero__content'>
				<h1 className='hero__title'>
					A{' '}
					<span>
						{' '}
						youth <BorderBottomLongThick />{' '}
					</span>{' '}
					organisation on a mission
				</h1>

				<div className='year__follow'>
					<p className='year__founded'>1948</p>

					<p className='follow__up__text'>
						AIESEC was founded way back in 1948 in 7 countries in Europe. Now,
						more than 65 years later we’re present in over 126 countries and
						territories and are still growing.
					</p>
				</div>
			</div>
		</section>
	);
};

export default AboutHero;
