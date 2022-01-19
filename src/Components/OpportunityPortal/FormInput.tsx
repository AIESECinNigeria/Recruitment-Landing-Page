import { forwardRef, useRef } from 'react';

interface FormInputProps {
	id: string;
	label: string;
	type: string;
	placeholder: string ;
	[x: string]: string | ((e: any) => void) | boolean;
}

const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
	({ id, label, type, placeholder, ...otherProps }, ref) => {
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
					<input
						ref={ref}
						type={type}
						id={id}
						placeholder={placeholder}
						{...otherProps}
					/>
				)}
			</div>
		);
	}
);

export default FormInput;
