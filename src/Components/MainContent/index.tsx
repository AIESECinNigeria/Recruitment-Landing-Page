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
