import { FC } from 'react';
import { Link, NavLink } from 'react-router-dom';

import './footer.styles.scss';

const Footer: FC = () => {
	return (
		<footer id='footer'>
			<div className='footer__content'>
				<div className='footer__content__details'>
					<div className='contact__address'>
						<p>
							6th floor Co Creation Hub, 294 Herbert Macaulay Way, Sabo Yaba,
							Lagos.
						</p>
						<a href='mailto:Nigeria@aiesec.net'>Nigeria@aiesec.net</a>
                        <p>(+234) 00 0000 000</p>
					</div>

					<div className='about__us'>
						<h2 className='title'>ABOUT US</h2>
						<nav>
							<ul>
								<li>
									<Link to='##'>
										<p className='link__text'>Discover Nigeria</p>
									</Link>
								</li>
								<li>
									<Link to='##'>
										<p className='link__text'>About Us</p>
									</Link>
								</li>
								<li>
									<Link to='##'>
										<p className='link__text'>Blog</p>
									</Link>
								</li>
								<li>
									<Link to='##'>
										<p className='link__text'>Press</p>
									</Link>
								</li>
							</ul>
						</nav>
					</div>
					<div className='for__youths'>
						<h2 className='title'>FOR YOUTHS</h2>
						<nav>
							<ul>
								<li>
									<Link to='##'>
										<p className='link__text'>Global Volunteer</p>
									</Link>
								</li>
								<li>
									<Link to='##'>
										<p className='link__text'>Global Talent</p>
									</Link>
								</li>
								<li>
									<Link to='##'>
										<p className='link__text'>Global Teacher</p>
									</Link>
								</li>
								<li>
									<Link to='##'>
										<p className='link__text'>Become a member</p>
									</Link>
								</li>
							</ul>
						</nav>
					</div>
					<div className='organizations'>
						<h2 className='title'>ORGANIZATIONS</h2>
						<nav>
							<ul>
								<li>
									<Link to='##'>
										<p className='link__text'>Partner with us</p>
									</Link>
								</li>
								<li>
									<Link to='##'>
										<p className='link__text'>Pricing</p>
									</Link>
								</li>
							</ul>
						</nav>
					</div>
				</div>

				<div className='copyright__policy'>
					<p className='copyright'>&copy; AIESEC 2021</p>

					<nav className='privacy__terms'>
						<ul>
							<li>
								<NavLink
									to='/privacy'
									className={({ isActive }) => (isActive ? 'selected' : '')}
								>
									<p className='link__text'>Privacy Policy</p>
								</NavLink>
							</li>
							<li className='demacator'>|</li>
							<li>
								<NavLink
									to='/terms-conditions'
									className={({ isActive }) => (isActive ? 'selected' : '')}
								>
									<p className='link__text'>Terms & Conditions</p>
								</NavLink>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
