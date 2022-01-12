import { FC } from 'react';
import { FaFacebookSquare } from 'react-icons/fa';
import { SiYoutube } from 'react-icons/si';
import { IoLogoInstagram } from 'react-icons/io';
import { BsArrowRight } from 'react-icons/bs';

import './sidebardesktop.styles.scss';

const SidebarDesktop: FC = () => {
	return (
		<section id='sidebar__desktop'>
			<div className='socials'>
				<a
					href='https://web.facebook.com/AIESECinNigeria/'
					target='_blank'
					rel='noreferrer'
					className='social facebook'
				>
					<FaFacebookSquare />
				</a>
				<a
					href='https://youtube.com/c/AiesecnigeriaOrg'
					target='_blank'
					rel='noreferrer'
					className='social youtube'
				>
					<SiYoutube />
				</a>
				<a
					href='https://www.instagram.com/aiesecinnigeria/'
					target='_blank'
					rel='noreferrer'
					className='social instagram'
				>
					<IoLogoInstagram />
				</a>
			</div>

			<div className='scroll__down'>
				<a href='#footer'>
					scroll &nbsp; down
					<BsArrowRight />
				</a>
			</div>
		</section>
	);
};

export default SidebarDesktop;
