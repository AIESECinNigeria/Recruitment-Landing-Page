import { FC } from 'react';
import { Link, NavLink } from 'react-router-dom';

import './footer.styles.scss';

const Footer: FC = () => {
	return (
		<footer id='footer'>
			<div className='footer__content'>
				<div className='copyright__policy'>
					<p className='copyright'>&copy; AIESEC 2021</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
