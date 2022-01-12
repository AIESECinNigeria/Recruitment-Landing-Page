import { FC } from 'react';

import './joinsteps.styles.scss';

const JoinSteps: FC = () => {
	return (
		<section id='join__steps'>
			<div className='join__steps__content'>
				<h1 className='title'>
					Join in <span>3</span> steps
				</h1>

				<div className='steps'>
					<div className='step right'>
						<div className='number__title'>
							<p className='number'>01</p>
							<p className='step__title'>FILL AND SUBMIT APPLICATION</p>
						</div>
						<div className='border__desc'>
							<p>
								Adequately fill out the form with your details and submit your
								application.
							</p>
						</div>
					</div>
					<div className='step left'>
						<div className='number__title'>
							<p className='number'>02</p>
							<p className='step__title'>GO THROUGH APPLICATION PROCESS</p>
						</div>
						<div className='border__desc'>
							<p>
								Each local team has a representative that would reach out to
								you. You will get to know what the next steps are to become a
								member of your local team.
							</p>
						</div>
					</div>
					<div className='step right'>
						<div className='number__title'>
							<p className='number'>03</p>
							<p className='step__title'>WELCOME ONBOARD</p>
						</div>
						<div className='border__desc none'>
							<p>
								If you make it through the selection process, you would be
								welcomes into one of our teams. Your leadership experience
								starts now!
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default JoinSteps;
