import { FC, useRef } from 'react';
import { GrPlayFill } from 'react-icons/gr';

import Play from '../../assets/Svgs/play';
import './homehero.styles.scss';

const HomeHero: FC = () => {
	const videoRef = useRef<HTMLVideoElement | null>(null);
	const posterRef = useRef<HTMLDivElement | null>(null);

	return (
		<section id='home__hero'>
			<div className='home__hero__content'>
				<div className='hero__text'>
					<h1>
						Connecting <span className='highlighted'>Young People</span> to Life
						Changing <span className='highlighted'>Experiences.</span>
					</h1>
				</div>

                <div className="search__experiences">
                    <input type="text" placeholder='' />
                </div>

				<div
					className='hero__reels'
					onMouseEnter={() => {
						videoRef.current?.play();
						posterRef.current!.className = 'poster hide';
					}}
					onMouseLeave={() => {
						videoRef.current?.pause();
						posterRef.current!.className = 'poster';
					}}
				>
					<div className='poster' ref={posterRef}></div>

					<video
						ref={videoRef}
						className='hero__reels__video'
						loop
					>
						<source
							src='https://res.cloudinary.com/dkaflz24l/video/upload/v1637792264/AiN%20Website%20Assets/video3_qo4t5z.mp4'
							type='video/mp4'
						/>
						Your browser does not support the video tag.
					</video>

					<div
						className='play__icon'
						onMouseEnter={() => {
							videoRef.current?.play();
							posterRef.current!.className = 'poster hide';
						}}
					>
						<Play />

						<GrPlayFill />
					</div>
				</div>
			</div>
		</section>
	);
};

export default HomeHero;
