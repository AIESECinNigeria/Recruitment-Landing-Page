import { FC, useRef } from 'react';

interface FormInputProps {
	id: string;
	label: string;
	type: string;
	placeholder?: string;
}

const FormInput: FC<FormInputProps> = ({ id, label, type, placeholder }) => {
	const textAreaRef = useRef<HTMLTextAreaElement>(null);

	return (
		<div className='form__input'>
			<label htmlFor={id}>{label}</label>
			{type === 'textarea' ? (
				<textarea
					ref={textAreaRef}
					id={id}
					placeholder='Placeholder text'
					onFocus={() => (textAreaRef.current!.style.height = '150px')}
					onBlur={() => (textAreaRef.current!.style.height = '48px')}
				></textarea>
			) : (
				<input type={type} id={id} placeholder={placeholder} />
			)}
		</div>
	);
};

export default FormInput;
