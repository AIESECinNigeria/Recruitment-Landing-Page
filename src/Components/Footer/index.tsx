import { FC } from 'react';

import './footer.styles.scss';

const Footer: FC = () => {
	return (
		<footer id='footer'>
			<div className='footer__content'>
				<div className='copyright__policy'>
					<p className='copyright'>&copy; AIESEC 2022</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
