import { FC } from 'react';

import EmpoweringIcon from '../../assets/Svgs/EmpoweringIcon';
import SolutionIcon from '../../assets/Svgs/SolutionIcon';
import WorldCitzenIcon from '../../assets/Svgs/WorldCitizen';
import SelfAwareIcon from '../../assets/Svgs/SelfAwareIcon';
import './awwd.styles.scss';

const AboutWhatWeDo: FC = () => {
	return (
		<section id='about__what__we__do'>
			<div className='about__what__we__do__content'>
				<p className='title'>WHAT WE DO</p>
				<p className='subtitle'>We develop youth leaders</p>
				<p className='follow__up__text'>
					We believe that youth are the key to shaping a better future. Through
					our experiences we strive to develop youth leaders with the following
					qualities.
				</p>

				<div className='illustration__container'>
					<div className='illustration__content first__last'>
						<div className='value justify__right'>
							<div className='value__title'>
								<EmpoweringIcon />
								<p>Empowering Others</p>
							</div>
							<p className='value__text'>
								Engage with all kinds of people towards achieving a purpose
								bigger than yourself. This is how you can empower others around
								you.
							</p>
						</div>

						<div className='value justify__right'>
							<div className='value__title'>
								<SelfAwareIcon />
								<p>Self Awareness</p>
							</div>
							<p className='value__text'>
								Going beyond what you know opens up new worlds for you. Find
								your values, explore your passions, and become more self-aware.
							</p>
						</div>
					</div>
					<div className='illustration__content last__first'>
						<div className='value'>
							<div className='value__title'>
								<SolutionIcon />
								<p>Solution Oriented</p>
							</div>
							<p className='value__text'>
								Volunteering abroad isn't easy, but surpassing challenges is
								what makes it worth it. You will learn how to be
								solution-oriented.
							</p>
						</div>

						<div className='value'>
							<div className='value__title'>
								<WorldCitzenIcon />
								<p>World Citizen</p>
							</div>
							<p className='value__text'>
								Making your contribution and seeing your impact in real-time
								will show you that you can indeed make a difference the world.
							</p>
						</div>
					</div>

					<div className='illustration__content__mid'>
						<div className='illustration__content first__last'>
							<div className='value justify__right'>
								<div className='value__title'>
									<EmpoweringIcon />
									<p>Empowering Others</p>
								</div>
								<p className='value__text'>
									Engage with all kinds of people towards achieving a purpose
									bigger than yourself. This is how you can empower others
									around you.
								</p>
							</div>

							<div className='value justify__right'>
								<div className='value__title'>
									<SelfAwareIcon />
									<p>Self Awareness</p>
								</div>
								<p className='value__text'>
									Going beyond what you know opens up new worlds for you. Find
									your values, explore your passions, and become more
									self-aware.
								</p>
							</div>
						</div>
						<div className='illustration__content last__first'>
							<div className='value'>
								<div className='value__title'>
									<SolutionIcon />
									<p>Solution Oriented</p>
								</div>
								<p className='value__text'>
									Volunteering abroad isn't easy, but surpassing challenges is
									what makes it worth it. You will learn how to be
									solution-oriented.
								</p>
							</div>

							<div className='value'>
								<div className='value__title'>
									<WorldCitzenIcon />
									<p>World Citizen</p>
								</div>
								<p className='value__text'>
									Making your contribution and seeing your impact in real-time
									will show you that you can indeed make a difference the world.
								</p>
							</div>
						</div>
					</div>

					<div className='illustration__image'>
						<img
							src='https://res.cloudinary.com/dkaflz24l/image/upload/v1641264013/AiN%20Website%20Assets/LDM_artboard_lju6lu.png'
							alt='AIESEC values'
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutWhatWeDo;
