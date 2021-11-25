import { FC, useEffect, useRef, useState } from 'react';
import { GrPlayFill } from 'react-icons/gr';
import { AiOutlineSearch } from 'react-icons/ai';
import ModalVideo from 'react-modal-video';

import Play from '../../assets/Svgs/play';
import 'react-modal-video/scss/modal-video.scss';
import './homehero.styles.scss';

const HomeHero: FC = () => {
	const videoRef = useRef<HTMLVideoElement | null>(null);
	const posterRef = useRef<HTMLDivElement | null>(null);
	const [videoIsOpen, setVideoIsOpen] = useState<boolean>(false);

	useEffect(() => {
		if (videoIsOpen) {
			const iframe = document.querySelector(
				'.modal-video-movie-wrap iframe'
			)!;
			const style = document.createElement('style');
			style.textContent = `
				body video {
					width: 100%;
				}
			`;
			// iframe?.cotentDocument?.head.appendChild(style);
			console.log(iframe.DOCUMENT_NODE);
		}
	}, [videoIsOpen]);

	return (
		<section id='home__hero'>
			<div className='home__hero__content'>
				<div className='hero__text'>
					<h1>
						Connecting <span className='highlighted'>Young People</span> to Life
						Changing <span className='highlighted'>Experiences.</span>
					</h1>
				</div>

				<div className='hero__search__experiences'>
					<p className='search__placeholder'>
						Search for an experience. <span>E.g. Marketing, design, HR...</span>
					</p>

					<AiOutlineSearch />
				</div>

				<div
					className='hero__reels'
					onMouseEnter={() => {
						videoRef.current?.play();
						videoRef.current!.muted = true;
						posterRef.current!.className = 'poster hide';
					}}
					onMouseLeave={() => {
						videoRef.current?.pause();
						posterRef.current!.className = 'poster';
					}}
				>
					<div className='poster' ref={posterRef}></div>

					<video ref={videoRef} className='hero__reels__video' loop>
						<source
							src='https://res.cloudinary.com/dkaflz24l/video/upload/v1637792264/AiN%20Website%20Assets/video3_qo4t5z.mp4'
							type='video/mp4'
						/>
						Your browser does not support the video tag.
					</video>

					<div
						className='play__icon'
						onClick={() => {
							setVideoIsOpen(true);
						}}
					>
						<Play />

						<GrPlayFill />
					</div>
				</div>
			</div>

			<ModalVideo
				channel='custom'
				url='https://res.cloudinary.com/dkaflz24l/video/upload/v1637792264/AiN%20Website%20Assets/video3_qo4t5z.mp4'
				isOpen={videoIsOpen}
				onClose={() => setVideoIsOpen(false)}
			/>
		</section>
	);
};

export default HomeHero;
