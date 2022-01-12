import { FC, useRef, useState } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import FormInput from './FormInput';
import {
	academicOptions,
	contactOptions,
	LCOptions,
	motivationOptions,
	referralOptions,
	roleOptions,
} from '../../data/options';
import DropdownOptions from './DropdownOptions';
import './opportunityportal.styles.scss';

interface OpportunityPortalProps {
	id: number;
	logoUrl: string;
	logoAlt: string;
}

const OpportunityPortal: FC<OpportunityPortalProps> = ({
	id,
	logoUrl,
	logoAlt,
}) => {
	const buttonRef = useRef<HTMLButtonElement>(null);
	const [isFormOpen, setIsFormOpen] = useState<boolean>(false);

	return (
		<section id={id === 2 ? 'join-AIESEC' : ''} className='opportunity__portal'>
			<div className={'opportunity__details AM'}>
				<div className='opportunity__details__content'>
					<ScrollAnimation
						className='opportunity__logo'
						animateIn='animate__flipInX'
					>
						<img src={logoUrl} alt={logoAlt} />
					</ScrollAnimation>

					<h1 className='title'>
						{id === 1 ? 'Our Roles' : 'Ready to join the community?'}
					</h1>

					<p className='desc'>
						{id === 1
							? `	When you join one of our local AIESEC teams, you are assigned to a
									smaller team in a specific department. Think of it as a simulation
									of the departments in any organisation or company, buy your impact
									will be a real one.`
							: `Join one of our local teams and develop yourself through practical
									experiences in the world’s largest youth lead organisation`}
					</p>

					{id === 2 && (
						<button
							ref={buttonRef}
							className='join__AIESEC'
							onClick={() => {
								setIsFormOpen(true);
								buttonRef.current!.style.display = 'none';
							}}
						>
							Join AIESEC
						</button>
					)}

					<form id='join__AIESEC__form' className={isFormOpen ? 'open' : ''}>
						<div className='name'>
							<FormInput id='firstname' label='First Name' type='text' />
							<FormInput id='lastname' label='Last Name' type='text' />
						</div>
						<FormInput id='dob' label='Date of Birth' type='date' />
						<FormInput id='email' label='Email Address' type='email' />
						<FormInput
							id='phone'
							label='Phone Number'
							type='tel'
							placeholder='Enter Phone number'
						/>
						<DropdownOptions
							label='How do we contact you?'
							options={contactOptions}
							value={contactOptions[0]}
						/>
						<DropdownOptions
							label='Location'
							options={LCOptions}
							value={LCOptions[0]}
						/>
						<DropdownOptions
							label='What is your motivation for joining  AIESEC?'
							options={motivationOptions}
							value={motivationOptions[0]}
						/>
						<DropdownOptions
							label='What’s your current academic level?'
							options={academicOptions}
							value={academicOptions[0]}
						/>
						<FormInput
							id='degree'
							label='Degree or Course of study?'
							type='text'
							placeholder='Enter Degree'
						/>
						<DropdownOptions
							label='What role do you think fits you best?'
							options={roleOptions}
							value={roleOptions[0]}
						/>
						<DropdownOptions
							label='Referral?'
							options={referralOptions}
							value={referralOptions[0]}
						/>

						<button>Send Application</button>
					</form>
				</div>
			</div>
		</section>
	);
};

export default OpportunityPortal;
