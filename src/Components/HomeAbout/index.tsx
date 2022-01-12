import { FC } from 'react';

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
					<h2 className='title'>ABOUT AIESEC In Nigeria</h2>
					<p className='text'>
						More than half a century ago, we fell in love with the idea of
						developing young people across Nigeria into worthy global leaders.
						AIESEC in Nigeria is the result of that dream, and we've remained
						committed to that goal as we continue to build a new crop of young
						leaders who will change the world.
					</p>
				</div>
			</div>
		</section>
	);
};

export default HomeAbout;
