import { FC } from 'react';

const CheckIcon: FC = (props) => (
	<svg
		width={18}
		height={18}
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		{...props}
	>
		<path
			d='m12.825 5.317-5.492 5.491-2.991-2.983L3.167 9l4.166 4.167L14 6.5l-1.175-1.183ZM9 .667A8.336 8.336 0 0 0 .667 9c0 4.6 3.733 8.333 8.333 8.333S17.333 13.6 17.333 9 13.6.667 9 .667Zm0 15A6.665 6.665 0 0 1 2.333 9 6.665 6.665 0 0 1 9 2.333 6.665 6.665 0 0 1 15.667 9 6.665 6.665 0 0 1 9 15.667Z'
			fill='#9EE800'
		/>
	</svg>
);

export default CheckIcon;
