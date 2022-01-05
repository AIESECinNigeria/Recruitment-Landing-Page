import { FC, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import BorderBottom from '../../assets/Svgs/BorderBottom';
import './headerdesktop.styles.scss';

const Header: FC = () => {
	const [navbarOpen, setNavbarOpen] = useState<boolean>(false);
	const [headerFixed, setHeaderFixed] = useState<boolean>(false);

	const toggleNavbar = () => {
		setNavbarOpen((navbarOpen) => !navbarOpen);
	};

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
		<header id='header__desktop' className={headerFixed ? 'fixed' : ''}>
			<div className='header__desktop__content'>
				<div className='AIESEC__logo'>
					<NavLink to='/'>
						<div className='border'></div>
						<img
							src='https://res.cloudinary.com/dkaflz24l/image/upload/v1637753666/AiN%20Website%20Assets/AiN_Black_oraotj.png'
							alt='AiN logo'
						/>
					</NavLink>
				</div>

				<div
					className={`hamburger ${navbarOpen ? 'open' : ''}`}
					onClick={toggleNavbar}
				>
					<span></span>
					<span></span>
					<span></span>
				</div>

				<nav className='header__navigation'>
					<ul>
						<li>
							<NavLink
								to='/'
								className={({ isActive }) => (isActive ? 'selected' : '')}
							>
								<p className='link__text'>Home</p>
								<BorderBottom />
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/about'
								className={({ isActive }) => (isActive ? 'selected' : '')}
							>
								<p className='link__text'>About</p>
								<BorderBottom />
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/opportunities'
								className={({ isActive }) => (isActive ? 'selected' : '')}
							>
								<p className='link__text'>Opportunities</p>
								<BorderBottom />
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/organizations'
								className={({ isActive }) => (isActive ? 'selected' : '')}
							>
								<p className='link__text'>For Organizations</p>
								<BorderBottom />
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/membership'
								className={({ isActive }) => (isActive ? 'selected' : '')}
							>
								<p className='link__text'>Membership</p>
								<BorderBottom />
							</NavLink>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
