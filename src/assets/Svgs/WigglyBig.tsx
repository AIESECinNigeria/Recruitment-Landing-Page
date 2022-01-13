import { FC } from 'react';

const WigglyBig: FC = (props) => (
	<svg
		width={125}
		height={36}
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		{...props}
	>
		<path
			d='M123.929 1.498c-19.173.086-107.11 7.138-119.621 8.917-4.845.688-2.85 3.085.08 3.807 56.64-.255 63.423-.576 69.648.515 1.795.314 9.359.924 3.74 3.742-4.207 2.11-33.284 6.748-23.273 8.228C63 27.963 64.757 27.86 61.978 34.4'
			stroke='#037EF3'
			strokeWidth={2}
			strokeLinecap='round'
		/>
	</svg>
);

export default WigglyBig;
