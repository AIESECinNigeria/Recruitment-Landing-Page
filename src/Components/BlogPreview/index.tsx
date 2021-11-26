import { FC } from 'react';
import { BsArrowRight, BsArrowUpRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import BorderBottomLong from '../../assets/Svgs/BorderBottomLong';
import './blogpreview.styles.scss';

const blogPreviews = [
	{
		id: '0',
		blogUrl: '##',
		blogImgUrl:
			'https://res.cloudinary.com/dkaflz24l/image/upload/v1637954507/AiN%20Website%20Assets/blogPreview2_swvevy.png',
		blogTitle: 'My AIESEC Story',
		blogTruncatedText:
			'AIESEC is a global platform for young people to develop their leadership potential...',
	},
	{
		id: '1',
		blogUrl: '##',
		blogImgUrl:
			'https://res.cloudinary.com/dkaflz24l/image/upload/v1637954507/AiN%20Website%20Assets/blogPreview1_vptbpt.png',
		blogTitle: 'Into the bin it goes',
		blogTruncatedText:
			'AIESEC is a global platform for young people to develop their leadership potential...',
	},
];

const BlogPreview: FC = () => {
	return (
		<section id='blog__preview'>
			<h2 className='main__title'>EXPLORE</h2>
			<h2 className='main__subtitle'>The newest contents</h2>
			<div className='blog__preview__content'>
				{blogPreviews.map((blogPreview) => (
					<div
						className={`blog__preview ${
							blogPreview.id === blogPreviews[blogPreviews.length - 1].id
								? 'push__down'
								: ''
						}`}
					>
						<div className='blog__preview__image'>
							<img src={blogPreview.blogImgUrl} alt={blogPreview.blogTitle} />
						</div>
						<div className='blog__preview__details'>
							<h2 className='blog__preview__title'>{blogPreview.blogTitle}</h2>
							<p className='blog__preview__text'>
								{blogPreview.blogTruncatedText}
							</p>
							<Link to={blogPreview.blogUrl} className='view__more'>
								<p>Read More</p>
								<BsArrowRight />
							</Link>
						</div>
					</div>
				))}
			</div>
			<Link to='##' className='explore__more'>
				<p>
					Explore More
					<BsArrowUpRight />
				</p>
				<div className='border__bottom'>
					<BorderBottomLong />
				</div>
			</Link>
		</section>
	);
};

export default BlogPreview;
