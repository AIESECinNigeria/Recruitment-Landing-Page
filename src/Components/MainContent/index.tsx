import { FC, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import * as ROUTES from '../../ROUTES';

import HeaderDesktop from '../HeaderDesktop';
import Footer from '../Footer';
import './maincontent.styles.scss';
import opportunityPortalData from '../../data/opportunityPortalData';
import { InternshipProps } from '../../pages/Internship';

const Home = lazy<FC>(() => import('../../pages/Home'));
const About = lazy<FC>(() => import('../../pages/About'));
const Internship = lazy<FC<InternshipProps>>(
	() => import('../../pages/Internship')
);
const Opportunities = lazy<FC>(() => import('../../pages/Opportunities'));
const Organizations = lazy<FC>(() => import('../../pages/Organizations'));
const Membership = lazy<FC>(() => import('../../pages/Membership'));

const MainContent: FC = () => {
	return (
		<section id='main__content'>
			<HeaderDesktop />
			<Routes>
				<Route path={ROUTES.HOME} element={<Home />} />
				<Route path={ROUTES.ABOUT} element={<About />} />
				<Route
					path={ROUTES.GTa}
					element={
						<Internship
							bannerText={`Kickstart your career with a professional internship with AIESEC`}
							ctaLink={'hello'}
							internshipData={opportunityPortalData[0]}
							heroBgBig='https://res.cloudinary.com/dkaflz24l/image/upload/v1641264232/AiN%20Website%20Assets/internship-hero-bg-big_plj72c.png'
							heroBgSmall='https://res.cloudinary.com/dkaflz24l/image/upload/v1641264223/AiN%20Website%20Assets/internship-hero-bg-small_orucp7.png'
							heroTitleText={
								<p>
									<span className='bold'>Kickstart</span> your career with a{' '}
									<span className='bold'>professional internship</span> with
									AIESEC
								</p>
							}
						/>
					}
				/>
				<Route
					path={ROUTES.GTe}
					element={
						<Internship
							bannerText={`Differentiate yourself with an international teaching opportunity`}
							ctaLink={'hello'}
							internshipData={opportunityPortalData[2]}
							heroBgBig='https://res.cloudinary.com/dkaflz24l/image/upload/v1641330003/AiN%20Website%20Assets/GTe-banner-big_ax5fl7.png'
							heroBgSmall='https://res.cloudinary.com/dkaflz24l/image/upload/v1641330002/AiN%20Website%20Assets/GTe-banner-small_htzkcw.png'
							heroTitleText={
								<p>
									<span className='bold'>
										Differentiate yourself with an international teaching
										opportunity
									</span>
								</p>
							}
						/>
					}
				/>
				<Route
					path={ROUTES.GV}
					element={
						<Internship
							bannerText={`If we don't change the world, then who will?`}
							ctaLink={'hello'}
							internshipData={opportunityPortalData[1]}
							heroBgBig='https://res.cloudinary.com/dkaflz24l/image/upload/v1641330003/AiN%20Website%20Assets/GV-banner-big_szgnai.png'
							heroBgSmall='https://res.cloudinary.com/dkaflz24l/image/upload/v1641330002/AiN%20Website%20Assets/GV-banner-small_pvkui1.png'
							heroTitleText={
								<p>
									<span className='bold'>
										If we don't change the world, then who will?
									</span>
								</p>
							}
						/>
					}
				/>
				<Route
					path={ROUTES.AM}
					element={
						<Internship
							bannerText={`Differentiate yourself with an international teaching opportunity`}
							ctaLink={'hello'}
							internshipData={opportunityPortalData[3]}
							heroBgBig='https://res.cloudinary.com/dkaflz24l/image/upload/v1641329983/AiN%20Website%20Assets/AM-banner-big_vhyboq.png'
							heroBgSmall='https://res.cloudinary.com/dkaflz24l/image/upload/v1641330001/AiN%20Website%20Assets/AM-banner-small_egir30.png'
							heroTitleText={
								<p className='AM'>
									<span className='bold'>Become an AIESEC member</span>
								</p>
							}
						/>
					}
				/>
				<Route path={ROUTES.OPPORTUNITIES} element={<Opportunities />} />
				<Route path={ROUTES.ORGANIZATIONS} element={<Organizations />} />
				<Route path={ROUTES.MEMBERSHIP} element={<Membership />} />
				<Route path='*' element={<p>Not found</p>} />
			</Routes>
			<Footer />
		</section>
	);
};

export default MainContent;
