import { FC } from 'react';

import './internshipbenefits.styles.scss';

interface InternshipBenefitsProps {}

const InternshipBenefits: FC<InternshipBenefitsProps> = () => {
	return (
		<section id='internship__benefits'>
			<div className='internship__benefits__content'>
				<div className='internship__benefit'>
					<div className="img__block"></div>

					<p className="text1">Gain Cross-cultural Experience</p>
					<p className="text2">Create life changing opportunities with AIESEC</p>
				</div>

				<div className='internship__benefit'>
					<div className="img__block"></div>

					<p className="text1">Gain Cross-cultural Experience</p>
					<p className="text2">Create life changing opportunities with AIESEC</p>
				</div>

				<div className='internship__benefit'>
					<div className="img__block"></div>

					<p className="text1">Gain Cross-cultural Experience</p>
					<p className="text2">Create life changing opportunities with AIESEC</p>
				</div>
			</div>
		</section>
	);
};

export default InternshipBenefits;
