import { FC } from 'react';
import { RiTwitterFill } from 'react-icons/ri';
import { SiYoutube } from 'react-icons/si';
import { IoLogoInstagram } from 'react-icons/io';
import { BsArrowRight } from 'react-icons/bs';

import './sidebardesktop.styles.scss';

const SidebarDesktop: FC = () => {
	return (
		<section id='sidebar__desktop'>
			<div className='socials'>
				<a href='https://twitter.com/AIESECNigeria' className='social twitter'>
					<RiTwitterFill />
				</a>
				<a href='https://youtube.com/c/AiesecnigeriaOrg' className='social youtube'>
					<SiYoutube />
				</a>
				<a href='https://www.instagram.com/aiesecinnigeria/' className='social instagram'>
					<IoLogoInstagram />
				</a>
			</div>

            <div className="scroll__down">
                <a href='#footer'>
                    scroll &nbsp; down
                    <BsArrowRight />
                </a>
            </div>
		</section>
	);
};

export default SidebarDesktop;
