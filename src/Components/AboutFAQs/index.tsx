import { FC, useState } from 'react';

import faqData from '../../data/faqData';
import './aboutfaqs.styles.scss';

const AboutFAQs: FC = () => {
	const [openFAQ, setOpenFAQ] = useState<number>(0);

	return (
		<section id='about__faqs'>
			<div className='about__faqs__content'>
				<h1 className='title'>FAQs</h1>
				<div className='faqs__container'>
					{faqData.map((faq, index) => (
						<div
							className={`faq ${openFAQ !== index ? 'closed' : ''}`}
							key={faq.key}
						>
							<div
								className='faq__title__button'
								onClick={() => setOpenFAQ((openFAQ) => openFAQ === index ? -1 : index)}
							>
								<p className='faq__title'>
									{faq.key}. {faq.question}
								</p>
								<button> {openFAQ !== index ? '+' : '-'} </button>
							</div>

							<div className='faq__content'>
								<p>{faq.answer}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default AboutFAQs;
