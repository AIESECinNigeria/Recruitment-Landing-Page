import { FC } from 'react';

const BorderBottomLongThick: FC = (props) => (
	<svg
		width={165}
		height={12}
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		{...props}
	>
		<path
			d='M1 11c37.566 0 74.874-7.406 112.593-7.683 15.644-.115 31.144-.209 46.764 0 4.231.056 4.044-.774-.19-.854-7.515-.142-14.423-1.435-22.101-1.043-14.176.722-28.399.205-42.59.853-28.94 1.322-57.91.828-86.793 1.897'
			stroke='#037EF3'
			strokeWidth={2}
			strokeLinecap='round'
		/>
	</svg>
);

export default BorderBottomLongThick;
