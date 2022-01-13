import { FC, useRef, useState } from 'react';
import { GrPlayFill } from 'react-icons/gr';
import { AiOutlineSearch } from 'react-icons/ai';
//@ts-ignore
import ModalVideo from 'react-modal-video';
//@ts-check
import ScrollAnimation from 'react-animate-on-scroll';
import Play from '../../assets/Svgs/play';
import 'react-modal-video/scss/modal-video.scss';
import 'animate.css/animate.min.css';
import './homehero.styles.scss';

const HomeHero: FC = () => {
	const videoRef = useRef<HTMLVideoElement | null>(null);
	const posterRef = useRef<HTMLDivElement | null>(null);
	const [videoIsOpen, setVideoIsOpen] = useState<boolean>(false);

	// useEffect(() => {
	// 	if (videoIsOpen) {
	// 		const iframe = document.querySelector('.modal-video-movie-wrap iframe')!;
	// 		const style = document.createElement('style');
	// 		style.textContent = `
	// 			body video {
	// 				width: 100%;
	// 			}
	// 		`;
	// 		iframe?.contentDocument?.head.appendChild(style);
	// 	}
	// }, [videoIsOpen]);

	return (
		<section id='home__hero'>
			<div className='home__hero__content'>
				<div className='hero__text__container'>
					<ScrollAnimation
						className='hero__text'
						animateIn='animate__fadeInUp'
						animateOnce={true}
						duration={0.8}
					>
						<h1>
							Connecting <span className='highlighted'>Young People</span> to
							Life Changing <span className='highlighted'>Experiences.</span>
						</h1>
					</ScrollAnimation>
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
					<div className='poster' ref={posterRef}>
						<img
							src='https://img.youtube.com/vi/1u-74sc4IIs/hqdefault.jpg'
							alt='video-poster'
						/>
					</div>

					<video ref={videoRef} className='hero__reels__video' loop>
						<source
							src='https://res.cloudinary.com/dkaflz24l/video/upload/v1641995540/AiN%20Website%20Assets/AIESEC_clipped_tuejib.mp4'
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
				channel='youtube'
				videoId='1u-74sc4IIs'
				isOpen={videoIsOpen}
				onClose={() => setVideoIsOpen(false)}
			/>
		</section>
	);
};

export default HomeHero;
