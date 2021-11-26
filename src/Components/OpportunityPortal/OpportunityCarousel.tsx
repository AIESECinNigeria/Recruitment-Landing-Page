import { FC, useRef } from 'react';
import { BsArrowUpRight, BsChevronLeft, BsChevronRight } from 'react-icons/bs';

import usePosition from '../../hooks/usePosition';

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
	const carouselRef = useRef<HTMLDivElement>(null);
	const { hasItemsOnLeft, hasItemsOnRight, scrollLeft, scrollRight } =
		usePosition(carouselRef);

	return (
		<div
			className='carousel__wrapper'
			role='region'
			aria-label='opportunities carousel'
		>
			<div className='carousel__wrapper__inner' ref={carouselRef}>
				{opportunities.map((opportunity) => (
					<div key={opportunity.id} className='carousel__slide'>
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
					</div>
				))}
			</div>
			<div className='controls'>
				<button
					className='left'
					disabled={!hasItemsOnLeft}
					aria-label='Previous slide'
					onClick={scrollLeft}
				>
					<BsChevronLeft className={!hasItemsOnLeft ? 'inactive' : ''} />
				</button>

				<button
					className='right'
					disabled={!hasItemsOnRight}
					aria-label='Next slide'
					onClick={scrollRight}
				>
					<BsChevronRight className={!hasItemsOnRight ? 'inactive' : ''} />
				</button>
			</div>
		</div>
	);
};

export default OpportunityCarousel;
