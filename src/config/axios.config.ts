import Axios from 'axios';

const axios = Axios.create({
	baseURL: 'https://nextjs-blog-steel-ten-76.vercel.app/api',
});

axios.interceptors.request.use(
	(config) => {
		config.url = config.url?.replace(/[^\x20-\x7E]/g, '');
		config.headers!['Content-Type'] = 'application/json';

		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

export default axios;
