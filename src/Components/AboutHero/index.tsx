import { FC } from 'react';

import ScrollAnimation from 'react-animate-on-scroll';
import BorderBottomLongThick from '../../assets/Svgs/BorderBottomLongThick';
import 'animate.css/animate.min.css';
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

				<div className='hero__image__carousel'>
					<ScrollAnimation
						className='img__container'
						animateIn='animate__bounceInUp'
						animateOnce={true}
						duration={1}
					>
						<img
							src='https://res.cloudinary.com/dkaflz24l/image/upload/v1641384807/AiN%20Website%20Assets/about-hero-image1_afirkz.png'
							alt='about-hero-banner'
						/>
					</ScrollAnimation>

					<ScrollAnimation
						className='img__container'
						animateIn='animate__bounceInUp'
						animateOnce={true}
						duration={1.2}
					>
						<img
							src='https://res.cloudinary.com/dkaflz24l/image/upload/v1641384807/AiN%20Website%20Assets/about-hero-image2_drsdnr.png'
							alt='about-hero-banner'
						/>
					</ScrollAnimation>

					<ScrollAnimation
						className='img__container'
						animateIn='animate__bounceInUp'
						animateOnce={true}
						duration={1.4}
					>
						<img
							src='https://res.cloudinary.com/dkaflz24l/image/upload/v1641384807/AiN%20Website%20Assets/about-hero-image3_iy1jud.png'
							alt='about-hero-banner'
						/>
					</ScrollAnimation>

					<ScrollAnimation
						className='img__container'
						animateIn='animate__bounceInUp'
						animateOnce={true}
						duration={1.6}
					>
						<img
							src='https://res.cloudinary.com/dkaflz24l/image/upload/v1641384807/AiN%20Website%20Assets/about-hero-image4_jhnqnu.png'
							alt='about-hero-banner'
						/>
					</ScrollAnimation>

					<ScrollAnimation
						className='img__container'
						animateIn='animate__bounceInUp'
						animateOnce={true}
						duration={1.8}
					>
						<img
							src='https://res.cloudinary.com/dkaflz24l/image/upload/v1641384807/AiN%20Website%20Assets/about-hero-image5_srco9q.png'
							alt='about-hero-banner'
						/>
					</ScrollAnimation>
				</div>

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
