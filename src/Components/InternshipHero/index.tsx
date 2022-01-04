import { FC } from 'react';

import './internshiphero.styles.scss';

interface InternshipHeroProps {
	id: string;
	logo: string;
	logoAlt: string;
	organizationsText: string;
	durationText: string;
	heroTitleText: HTMLParagraphElement;
}

const InternshipHero: FC<InternshipHeroProps> = ({
	id,
	logo,
	logoAlt,
	organizationsText,
	durationText,
	heroTitleText,
}) => {
	return (
		<section id='internship__hero'>
			<div className='internship__hero__content'>
				<div className='hero__banner'>
					<picture>
						<source
							media='(min-width:650px)'
							srcSet='https://res.cloudinary.com/dkaflz24l/image/upload/v1641264232/AiN%20Website%20Assets/internship-hero-bg-big_plj72c.png'
						/>
						<source
							media='(min-width:320px)'
							srcSet='https://res.cloudinary.com/dkaflz24l/image/upload/v1641264223/AiN%20Website%20Assets/internship-hero-bg-small_orucp7.png'
						/>
						<img
							src='https://res.cloudinary.com/dkaflz24l/image/upload/v1641264232/AiN%20Website%20Assets/internship-hero-bg-big_plj72c.png'
							alt='internship hero bg'
							style={{ width: '100%' }}
						/>
					</picture>
				</div>

				<div className='hero__title'>
					<h1 className='hero__title__text'>{heroTitleText}</h1>

					<img src={logo} alt={logoAlt} className='hero__title__logo' />
				</div>

				<div className='about__internship'>
					<div className='about__internship__content'>
						<div className='organizations'>
							<p>Organizations</p>
							<p>{organizationsText}</p>
						</div>

						<div className='duration'>
							<p>Duration</p>
							<p>{durationText}</p>
						</div>

						<button className={id}>Get Started</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default InternshipHero;
