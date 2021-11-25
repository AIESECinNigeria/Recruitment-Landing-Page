import { FC, useRef } from 'react';
import { BsArrowUpRight, BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { Splide, SplideSlide } from '@splidejs/react-splide';

import '@splidejs/splide/dist/css/splide.min.css';

interface OpportunityCarouselProps {
	parentId: string;
	opportunities: {
		id: string;
		imgUrl: string;
		opportunityTitle: string;
		location: string;
	}[];
}

const OpportunityCarousel: FC<OpportunityCarouselProps> = ({
	parentId,
	opportunities,
}) => {
	const splideRef = useRef<Splide>(null);

	return (
		<div className='carousel__wrapper'>
			<Splide
				ref={splideRef}
				options={{
					autoplay: true,
					pagination: false,
					arrows: false,
					gap: '1.33rem',
					drag: 'free',
					focus: 'center',
					autoScroll: {
						speed: 1,
					},
				}}
				renderControls={() => (
					<div
						className='controls'
						onClick={() => console.log(splideRef.current)}
					>
						<button className='left' disabled={false}>
							<BsChevronLeft
								// className={
								// 	splideRef.current!.slides[0]!.className.includes('is__next')
								// 		? 'inactive'
								// 		: ''
								// }
							/>
						</button>

						<button className='right' disabled={false}>
							<BsChevronRight className={''} />
						</button>
					</div>
				)}
			>
				{opportunities.map((opportunity) => (
					<SplideSlide key={opportunity.id}>
						<div className='opportunity__role'>
							<img
								src={opportunity.imgUrl}
								alt={opportunity.opportunityTitle}
							/>
							{parentId === 'AM' ? (
								<div className='role__title enlarged'>
									<p>
										<BsArrowUpRight />
									</p>
									<p>{opportunity.location}</p>
								</div>
							) : (
								<div className='role__title'>
									<p>{opportunity.opportunityTitle}</p>
									<p>{opportunity.location}</p>
								</div>
							)}
						</div>
					</SplideSlide>
				))}
			</Splide>
		</div>
	);
};

export default OpportunityCarousel;
