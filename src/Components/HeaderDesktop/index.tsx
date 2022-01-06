import {
	Dispatch,
	FC,
	SetStateAction,
	useEffect,
	useRef,
	useState,
} from 'react';
import { NavLink } from 'react-router-dom';
import { RiArrowDownSFill, RiSearchLine } from 'react-icons/ri';
import { MdClear } from 'react-icons/md';

import BorderBottom from '../../assets/Svgs/BorderBottom';
import * as ROUTES from '../../ROUTES';
import './headerdesktop.styles.scss';

interface HeaderProps {
	setShowOverlay: Dispatch<SetStateAction<boolean>>;
}

const Header: FC<HeaderProps> = ({ setShowOverlay }) => {
	const searchInput = useRef<HTMLInputElement>(null);
	const [navbarOpen, setNavbarOpen] = useState<boolean>(false);
	const [headerFixed, setHeaderFixed] = useState<boolean>(false);
	const [searchFocused, setSearchFocused] = useState<boolean>(false);

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

	useEffect(() => {
		searchFocused ? searchInput.current?.focus() : searchInput.current?.blur();
	}, [searchFocused]);

	return (
		<>
			<header
				id='header__desktop'
				className={headerFixed || searchFocused ? 'fixed' : ''}
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

					<nav className='header__navigation'>
						<ul>
							<li className='search'>
								<RiSearchLine onClick={() => setSearchFocused(true)} />
								<div className={searchFocused ? 'focus' : ''}>
									<input
										ref={searchInput}
										type='search'
										name='search-opportunities'
										id='search-opportunities'
										placeholder='Search'
										onFocus={() => setSearchFocused(true)}
										onBlur={() => setSearchFocused(false)}
									/>
									<div className='clear__icon'>
										<MdClear />
									</div>
								</div>
							</li>

							<li>
								<NavLink
									to={ROUTES.HOME}
									className={({ isActive }) => (isActive ? 'selected' : '')}
								>
									<p className='link__text'>Home</p>
									<BorderBottom />
								</NavLink>
							</li>

							<li>
								<NavLink
									to={ROUTES.ABOUT}
									className={({ isActive }) => (isActive ? 'selected' : '')}
								>
									<p className='link__text'>About</p>
									<BorderBottom />
								</NavLink>
							</li>

							<li
								className='opportunities'
								onMouseOver={() => setShowOverlay(true)}
								onMouseOut={() => setShowOverlay(false)}
							>
								<NavLink to='/##'>
									<p className='link__text'>Opportunities</p>
									<RiArrowDownSFill />
								</NavLink>

								<div className='child__container'></div>
							</li>

							<li>
								<NavLink
									to={ROUTES.ORGANIZATIONS}
									className={({ isActive }) => (isActive ? 'selected' : '')}
								>
									<p className='link__text'>For Organizations</p>
									<BorderBottom />
								</NavLink>
							</li>

							<li>
								<NavLink
									to={ROUTES.AM}
									className={({ isActive }) => (isActive ? 'selected' : '')}
								>
									<p className='link__text'>Membership</p>
									<BorderBottom />
								</NavLink>
							</li>
						</ul>
					</nav>

					<div
						className={`hamburger ${navbarOpen ? 'open' : ''}`}
						onClick={toggleNavbar}
					>
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>
			</header>

			<nav className={`header__navigation__mobile ${navbarOpen ? 'open' : ''}`}>
				<div className='AIESEC__logo__close'>
					<NavLink to={ROUTES.HOME}>
						<img
							src='https://res.cloudinary.com/dkaflz24l/image/upload/v1637753666/AiN%20Website%20Assets/AiN_Black_oraotj.png'
							alt='AiN logo'
						/>
					</NavLink>
					<div
						className={`hamburger ${navbarOpen ? 'open' : ''}`}
						onClick={toggleNavbar}
					>
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>

				<ul>
					<li>
						<NavLink
							to={ROUTES.HOME}
							className={({ isActive }) => (isActive ? 'selected' : '')}
							onClick={toggleNavbar}
						>
							<p className='link__text'>Home</p>
							<BorderBottom />
						</NavLink>
					</li>

					<li>
						<NavLink
							to={ROUTES.ABOUT}
							className={({ isActive }) => (isActive ? 'selected' : '')}
							onClick={toggleNavbar}
						>
							<p className='link__text'>About</p>
							<BorderBottom />
						</NavLink>
					</li>

					<li
						className='opportunities'
						onMouseOver={() => setShowOverlay(true)}
						onMouseOut={() => setShowOverlay(false)}
					>
						<NavLink to='/##'>
							<p className='link__text'>Opportunities</p>
							<RiArrowDownSFill />
						</NavLink>

						<div className='child__container'></div>
					</li>

					<li>
						<NavLink
							to={ROUTES.ORGANIZATIONS}
							className={({ isActive }) => (isActive ? 'selected' : '')}
							onClick={toggleNavbar}
						>
							<p className='link__text'>For Organizations</p>
							<BorderBottom />
						</NavLink>
					</li>

					<li>
						<NavLink
							to={ROUTES.AM}
							className={({ isActive }) => (isActive ? 'selected' : '')}
							onClick={toggleNavbar}
						>
							<p className='link__text'>Membership</p>
							<BorderBottom />
						</NavLink>
					</li>
				</ul>
			</nav>
		</>
	);
};

export default Header;
