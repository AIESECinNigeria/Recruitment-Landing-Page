import { FC, ReactElement } from 'react';

import './internshiphero.styles.scss';

interface InternshipHeroProps {
	id: string;
	logo: string;
	logoAlt: string;
	organizationsText: string;
	durationText: string;
	heroBgBig: string;
	heroBgSmall: string;
	heroTitleText: ReactElement<any, any>;
}

const InternshipHero: FC<InternshipHeroProps> = ({
	id,
	logo,
	logoAlt,
	organizationsText,
	durationText,
	heroBgBig,
	heroBgSmall,
	heroTitleText,
}) => {
	return (
		<section id='internship__hero'>
			<div className='internship__hero__content'>
				<div className='hero__banner'>
					<picture>
						<source
							media='(min-width:650px)'
							srcSet={heroBgBig}
						/>
						<source
							media='(min-width:320px)'
							srcSet={heroBgSmall}
						/>
						<img
							src={heroBgBig}
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
