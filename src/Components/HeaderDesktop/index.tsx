import {
	Dispatch,
	FC,
	SetStateAction,
	useEffect,
	useState,
} from 'react';
import { NavLink } from 'react-router-dom';


import * as ROUTES from '../../ROUTES';
import './headerdesktop.styles.scss';

interface HeaderProps {
	setShowOverlay: Dispatch<SetStateAction<boolean>>;
}

const Header: FC<HeaderProps> = ({ setShowOverlay }) => {
	const [headerFixed, setHeaderFixed] = useState<boolean>(false);

	const checkScrollHeight = () => {
		if (window.scrollY === 0) {
			setHeaderFixed(false);
		} else {
			setHeaderFixed(true);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', checkScrollHeight);
	}, []);

	return (
		<>
			<header
				id='header__desktop'
				className={headerFixed ? 'fixed' : ''}
			>
				<div className='header__desktop__content'>
					<div className='AIESEC__logo'>
						<NavLink to={ROUTES.HOME}>
							<div className='border'></div>
							<img
								src='https://res.cloudinary.com/dkaflz24l/image/upload/v1637753666/AiN%20Website%20Assets/AiN_Black_oraotj.png'
								alt='AiN logo'
							/>
						</NavLink>
					</div>

					<a href='#join-AIESEC' className='join__AIESEC'>Join AIESEC</a>
				</div>
			</header>
		</>
	);
};

export default Header;
