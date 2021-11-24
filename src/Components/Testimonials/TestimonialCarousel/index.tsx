import { FC, useState } from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import ScrollAnimation from 'react-animate-on-scroll';

import testimonies from '../../../data/testimonies';
import './testimonialcarousel.styles.scss';
import 'animate.css/animate.min.css';

const TestimonialCarousel: FC = () => {
	const [currentTestimonyIndex, setCurrentTestimonyIndex] = useState<number>(0);
	const [testimoniesClass, setTesitmoniesClass] = useState<string>('next');

	return (
        <ScrollAnimation
            className='testimonial__carousel'
			animateIn='animate__bounceInLeft'
		>
			<div>
				<div className={`testimonies ${testimoniesClass}`}>
					{testimonies.map((testimony, idx) => (
						<div
							key={testimony.id}
							className={`testimony ${
								currentTestimonyIndex === idx ? 'current' : ''
							}`}
						>
							<blockquote className='testimony__quote'>
								{testimony.quote}
							</blockquote>

							<div className='testifier'>
								<p className='testifier__name'>{testimony.testifierName}</p>
								<span>&middot;</span>
								<p className='testifier__location'>
									{testimony.testifierAbout}
								</p>
							</div>
						</div>
					))}
				</div>

				<div className='controls'>
					<button
						className='left'
						onClick={() => {
							setTesitmoniesClass('prev');
							setCurrentTestimonyIndex((currentTestimonyIndex) => {
								return currentTestimonyIndex === 0
									? testimonies.length - 1
									: currentTestimonyIndex - 1;
							});
						}}
						disabled={currentTestimonyIndex.toString() === testimonies[0].id}
					>
						<BsChevronLeft
							className={
								currentTestimonyIndex.toString() === testimonies[0].id
									? 'inactive'
									: ''
							}
						/>
					</button>

					<button
						className='right'
						onClick={() => {
							setTesitmoniesClass('next');
							setCurrentTestimonyIndex((currentTestimonyIndex) => {
								return currentTestimonyIndex === testimonies.length - 1
									? 0
									: currentTestimonyIndex + 1;
							});
						}}
						disabled={
							currentTestimonyIndex.toString() ===
							testimonies[testimonies.length - 1].id
						}
					>
						<BsChevronRight
							className={
								currentTestimonyIndex.toString() ===
								testimonies[testimonies.length - 1].id
									? 'inactive'
									: ''
							}
						/>
					</button>
				</div>
			</div>
		</ScrollAnimation>
	);
};

export default TestimonialCarousel;
