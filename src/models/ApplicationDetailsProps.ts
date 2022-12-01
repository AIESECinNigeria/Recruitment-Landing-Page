export interface ApplicationDetailsProps {
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
	dob: string;
	location: string;
	referral: string;
	bestRole: string;
	motivation: string;
	contactAvenue: string;
	isStudent: boolean;
	course?: string;
	university?: string;
	level?: string;
}

export type regValues =
	| 'firstName'
	| 'lastName'
	| 'email'
	| 'phone'
	| 'dob'
	| 'location'
	| 'course'
	| 'referral'
	| 'bestRole'
	| 'motivation'
	| 'level'
	| 'contactAvenue'
	| 'isStudent'
	| 'university';

