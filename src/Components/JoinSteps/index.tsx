import { FC } from 'react';

import WigglyBig from '../../assets/Svgs/WigglyBig';
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
								A representative of the local team you select would reach out to
								you to guide you throught the next steps to becoming a member.
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
								Once you successfully complete the application and selection
								process, you would be officially welcomed into one of our local
								teams. Your leadership experience starts now!
							</p>
						</div>
					</div>
				</div>

				<div className="disclaimer">
					<p><span className='note'>NOTE:</span> You would be required to pay a <span className='dark'>Membership fee</span>  during your application process.</p>
					<WigglyBig />
				</div>
			</div>
		</section>
	);
};

export default JoinSteps;
