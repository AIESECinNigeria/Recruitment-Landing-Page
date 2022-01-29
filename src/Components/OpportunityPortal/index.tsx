import { FC, useEffect, useRef, useState } from 'react';
import useAxios from 'axios-hooks';
import ScrollAnimation from 'react-animate-on-scroll';
import { useForm } from 'react-hook-form';

import Loader from '../Loader';
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
import CheckIcon from '../../assets/Svgs/Check';
import {
	ApplicationDetailsProps,
	regValues,
} from '../../models/ApplicationDetailsProps';
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
	const [errorMessage, setErrorMessage] = useState<string>('');
	const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);
	const [buttonActive, setButtonActive] = useState<boolean>(false);
	const [phoneNumber, setPhoneNumber] = useState<string>('');
	const [contactOption, setContactOption] = useState<string>('email');
	const [referralOption, setReferralOption] = useState<string>('friend');
	const [academicOption, setAcademicOption] = useState<string>('100');
	const [roleOption, setRoleOption] = useState<string>('customer experience');
	const [lcOption, setLcOption] = useState<string>('abuja');
	const [motivationOption, setMotivationOption] = useState<string>(
		'connect with a global community'
	);
	const {
		register,
		watch,
		setValue,
		handleSubmit,
		formState: { errors },
	} = useForm<ApplicationDetailsProps>({});

	const registerValues = (valueArr: regValues[]) => {
		for (let value of valueArr) {
			register(value, {
				required: true,
			});
		}
	};

	const checkInputValues = (watchFields: string[]) => {
		for (let field of watchFields) {
			if (!field?.length) return false;
		}

		return true;
	};

	// watch for when the username and password values change
	const watchFields: string[] = watch([
		'firstname',
		'lastname',
		'dob',
		'email',
		'course',
	]);

	const [{ loading }, sendApplication] = useAxios(
		{
			url: '/signup',
			method: 'post',
		},
		{ manual: true }
	);

	const onSubmit = async (data: { [x: string]: any }) => {
		const specifiedData = {
			...data,
			phone: phoneNumber,
			contactAvenue: contactOption,
			motivation: motivationOption,
			bestRole: roleOption,
			referral: referralOption,
			level: academicOption,
			location: lcOption,
		};

		try {
			await sendApplication({
				data: specifiedData,
			});
			setIsFormSubmitted(true);
		} catch (error: any) {
			setErrorMessage(error?.response?.data?.errors[0]?.msg);
		}
	};

	useEffect(() => {
		registerValues(['firstname', 'lastname', 'dob', 'email', 'course']);
	}, []);

	useEffect(() => {
		// disable or enable submit button based on input values length
		if (checkInputValues(watchFields) && phoneNumber.length > 0) {
			setButtonActive(true);
		} else {
			setButtonActive(false);
		}
	}, [watchFields]);

	useEffect(() => {
		//set error message if field is required
		errors.firstname && setErrorMessage('firstname is required');
		errors.lastname && setErrorMessage('lastname is required');
		errors.dob && setErrorMessage('Date of birth is required');
		errors.phone && setErrorMessage('phone number is required');
		errors.course && setErrorMessage('course of Study is required');
	}, [
		errors.firstname,
		errors.lastname,
		errors.phone,
		errors.email,
		errors.course,
		errors.dob,
	]);

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
							? `	When you join AIESEC, you are assigned to a smaller team in a specific department with specialized roles. You'll get a real job, with real job descriptions that will allow you to make an impact in the organization, and by extension the world. `
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

					{isFormSubmitted ? (
						<div className='thanks'>
							<CheckIcon />
							<div>
								<p>Application Successful</p>
								<p className='cta'>Check your mailbox</p>
							</div>
						</div>
					) : (
						<form
							id='join__AIESEC__form'
							className={isFormOpen ? 'open' : ''}
							onSubmit={handleSubmit(onSubmit)}
						>
							<div className='name'>
								<FormInput
									id='firstname'
									label='First Name'
									type='text'
									placeholder='E.g John'
									required
									onChange={({ target }) => setValue('firstname', target.value)}
								/>
								<FormInput
									id='lastname'
									label='Last Name'
									type='text'
									placeholder='E.g Doe'
									required
									onChange={({ target }) => setValue('lastname', target.value)}
								/>
							</div>
							<FormInput
								id='dob'
								label='Date of Birth'
								type='date'
								onChange={({ target }) => setValue('dob', target.value)}
								required
							/>
							<FormInput
								id='email'
								label='Email Address'
								type='email'
								placeholder='E.g johndoe@gmail.com'
								required
								onChange={({ target }) => setValue('email', target.value)}
							/>
							<div className='form__input'>
								<label htmlFor='phone'>Phone Number</label>
								<input
									id='phone'
									type='tel'
									placeholder='E.g +2349076543568'
									required
									onChange={({ target }) =>
										setPhoneNumber(target.value.replaceAll(' ', ''))
									}
								/>
							</div>
							<DropdownOptions
								label='How do we contact you?'
								options={contactOptions}
								value={contactOptions[0]}
								onChange={setContactOption}
							/>
							<DropdownOptions
								label='Location'
								options={LCOptions}
								value={LCOptions[0]}
								onChange={setLcOption}
							/>
							<DropdownOptions
								label='What is your motivation for joining  AIESEC?'
								options={motivationOptions}
								value={motivationOptions[0]}
								onChange={setMotivationOption}
							/>
							<DropdownOptions
								label={`What’s your current academic level?`}
								options={academicOptions}
								value={academicOptions[0]}
								onChange={setAcademicOption}
							/>
							<FormInput
								id='degree'
								label='Degree or Course of study?'
								type='text'
								placeholder='E.g Biology'
								required
								onChange={({ target }) => setValue('course', target.value)}
							/>
							<DropdownOptions
								label='What role do you think fits you best?'
								options={roleOptions}
								value={roleOptions[0]}
								onChange={setRoleOption}
							/>
							<DropdownOptions
								label='Referral?'
								options={referralOptions}
								value={referralOptions[0]}
								onChange={setReferralOption}
							/>

							<button>
								{' '}
								{loading ? <Loader /> : 'Send Application'}
							</button>

							{errorMessage && (
								<p className='error__message'>* {errorMessage} *</p>
							)}
						</form>
					)}
				</div>
			</div>
		</section>
	);
};

export default OpportunityPortal;
