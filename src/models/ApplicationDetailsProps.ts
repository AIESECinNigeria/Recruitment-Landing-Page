export interface ApplicationDetailsProps {
	firstname: string;
	lastname: string;
	email: string;
	phone: string;
	dob: string;
	location: string;
	course: string;
	referral: string;
	bestRole: string;
	motivation: string;
	level: string;
	contactAvenue: string;
}

export type regValues =
	| 'firstname'
	| 'lastname'
	| 'email'
	| 'phone'
	| 'dob'
	| 'location'
	| 'course'
	| 'referral'
	| 'bestRole'
	| 'motivation'
	| 'level'
	| 'contactAvenue';
