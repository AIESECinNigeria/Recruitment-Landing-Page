import { FC } from 'react';

import './subscribeemail.styles.scss';

const SubscribeEmail: FC = () => {
	return (
		<section id='subscribe__email'>
			<div className='subscribe__email__content'>
				<h1 className='subscribe__email__content__text'>
					Stay up to date with our products and opportunities
				</h1>
                <form className='subscribe__email__content__form'>
                    <div className="input__div">
                        <input type="email" placeholder='ENTER YOUR EMAIL' />
                        <button>SUBMIT</button>
                    </div>
                </form>
			</div>
		</section>
	);
};

export default SubscribeEmail;
