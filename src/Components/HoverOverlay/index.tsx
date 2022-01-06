import { FC } from 'react';

import './hoveroverlay.styles.scss';

interface HoverOverlayProps {
    show: boolean;
}

const HoverOverlay: FC<HoverOverlayProps> = ({ show }) => {
	return <section id='hover__overlay' className={show ? 'shown' : ''}></section>;
};

export default HoverOverlay;
