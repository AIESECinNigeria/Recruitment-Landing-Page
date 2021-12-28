import { FC } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';

import tipData from '../../data/tipsData';
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';
import './abouttips.styles.scss';

const AboutTips: FC = () => {
	return (
		<section id='about__tips'>
			<div className='about__tips__content'>
				<h1 className='title'>Be part of something bigger than yourself</h1>

				<div className='tips__container'>
					<Splide
						options={{
							autoplay: true,
							type: 'loop',
							gap: '1.5rem',
							arrows: false,
							focus: 'center',
							pagination: false,
							perPage: 4,
							breakpoints: {
								1290: {
									perPage: 3.5,
								},
								1150: {
									perPage: 2.5,
								},
								830: {
									perPage: 1.5,
								},
								460: {
									perPage: 1,
									gap: '1rem',
								},
							},
						}}
					>
						{tipData.map((tip) => (
							<SplideSlide key={tip.id}>
								<div className='tip'>
									<p className='tip__text'>{tip.tipText}</p>
									<div className='tip__author'>
										<img
											src={tip.tipAuthorAvatarUrl}
											alt={`${tip.tipAuthorName}'s avatar`}
											className='tip__author__avatar'
										/>
										<div className='tip__author__details'>
											<p className='tip__author__name'>{tip.tipAuthorName}</p>
											<p className='tip__author__lc'>{tip.tipAuthorLC}</p>
										</div>
									</div>
								</div>
							</SplideSlide>
						))}
					</Splide>
				</div>
			</div>
		</section>
	);
};

export default AboutTips;
