import { Dispatch, FC, SetStateAction } from 'react';
import Dropdown, { Option } from 'react-dropdown';
import { FaCaretDown, FaCaretUp } from 'react-icons/fa';

import 'react-dropdown/style.css';

type DropdownOptionsProps = {
	label: string;
	options: Array<{ value: string; label: string }>;
	value?: { value: string; label: string };
	onChange?: Dispatch<SetStateAction<string>>;
};

const DropdownOptions: FC<DropdownOptionsProps> = ({
	label,
	options,
	value,
	onChange,
}) => {
	return (
		<div className='dropdown'>
			<span className='dropdown__label'>{label}</span>
			<Dropdown
				options={options}
				value={value ?? options[0]}
				className={'custom__dropdown'}
				controlClassName='custom__dropdown__control'
				arrowClosed={<FaCaretDown />}
				arrowOpen={<FaCaretUp />}
				onChange={(option: Option) =>
					onChange ? onChange(option.value) : null
				}
			/>
		</div>
	);
};

export default DropdownOptions;
