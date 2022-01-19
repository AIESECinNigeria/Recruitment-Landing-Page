import React from 'react';
import ReactDOM from 'react-dom';
import { configure } from 'axios-hooks';
import LRU from 'lru-cache';
import axios from './config/axios.config';
import App from './App';

const cache = new LRU({ max: 100, maxAge: 100 * 60 * 60 * 5 });
configure({ axios, cache });

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);
