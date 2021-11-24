import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import BorderBottom from '../../assets/Svgs/BorderBottom';
import './headerdesktop.styles.scss';

const Header: FC = () => {
	return (
		<header id='header__desktop'>
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
