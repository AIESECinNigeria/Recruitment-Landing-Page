import { FC } from 'react';
import { BsArrowUpRight } from 'react-icons/bs';

import BorderBottomLong from '../../assets/Svgs/BorderBottomLong';
import Wiggly from '../../assets/Svgs/Wiggly';
import './homeabout.styles.scss';

const HomeAbout: FC = () => {
	return (
		<section id='home__about'>
			<div className='home__about__content'>
				<div className='wiggly'>
					<Wiggly />
				</div>

				<div className='home__about__content__desc'>
					<h2 className='title'>ABOUT AIESEC</h2>
					<p className='text'>
						AIESEC is a global platform for young people to develop their
						leadership potential through international internships and volunteer
						opportunities. We facilitate and promote cultural understanding and
						develop socially responsible, proactive agents of change with a view
						of making a positive impact in the world through our International
						Exchange and Membership Program.
					</p>
				</div>

				<div className='home__about__products'>
					<div className='product'>
						<h2 className='product__title'>I’m a Student</h2>
						<p className='product__cta'>
							Gain experience volunteering with AIESEC.
						</p>

						<a href='##' className='learn__more'>
							<p>
								Learn More
								<BsArrowUpRight />
							</p>
							<div className='border__bottom'>
								<BorderBottomLong />
							</div>
						</a>
					</div>

					<div className='product'>
						<h2 className='product__title'>I’m a Graduate</h2>
						<p className='product__cta'>
							Kickstart your career by interning with AIESEC.
						</p>

						<a href='##' className='learn__more'>
							<p>
								Learn More
								<BsArrowUpRight />
							</p>
							<div className='border__bottom'>
								<BorderBottomLong />
							</div>
						</a>
					</div>

					<div className='product'>
						<h2 className='product__title'>I’m an Organization</h2>
						<p className='product__cta'>
							Create life changing opportunities with AIESEC
						</p>

						<a href='##' className='learn__more'>
							<p>
								Learn More
								<BsArrowUpRight />
							</p>
							<div className='border__bottom'>
								<BorderBottomLong />
							</div>
						</a>
					</div>
				</div>

				<div className='home__about__partners'>
					<div className='partners__logos'>
						<div className='pwc'>
							<img
								src='https://res.cloudinary.com/dkaflz24l/image/upload/v1637802500/AiN%20Website%20Assets/pwc-logo_nera8m.png'
								alt='pwc-logo'
							/>
						</div>
						<div className='cc__hub'>
							<img
								src='https://res.cloudinary.com/dkaflz24l/image/upload/v1637802500/AiN%20Website%20Assets/cchub-logo_w9zmwk.png'
								alt='cchub-logo'
							/>
						</div>
						<div className='JCI'>
							<img
								src='https://res.cloudinary.com/dkaflz24l/image/upload/v1637802500/AiN%20Website%20Assets/jci-logo_qjj6zl.png'
								alt='jci-logo'
							/>
						</div>
						<div className='sahel'>
							<img
								src='https://res.cloudinary.com/dkaflz24l/image/upload/v1637802500/AiN%20Website%20Assets/saheal-logo_jfnre2.png'
								alt='sahel-logo'
							/>
						</div>
						<div className='study__free'>
							<img
								src='https://res.cloudinary.com/dkaflz24l/image/upload/v1637802501/AiN%20Website%20Assets/study-free-logo_jt6dae.png'
								alt='study-free-logo'
							/>
						</div>
						<div className='my__farmbase'>
							<img
								src='https://res.cloudinary.com/dkaflz24l/image/upload/v1637802500/AiN%20Website%20Assets/My-farmbase-logo_kddd5e.png'
								alt='my-farmbase-logo'
							/>
						</div>
						<div className='cowrywise'>
							<img
								src='https://res.cloudinary.com/dkaflz24l/image/upload/v1637802500/AiN%20Website%20Assets/cowrywise-logo_yvnwrk.png'
								alt='cowrywise-logo'
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HomeAbout;
