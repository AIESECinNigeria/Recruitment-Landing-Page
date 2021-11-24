import { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import LoadingPage from './pages/Home'
import SidebarDesktop from './Components/SidebarDesktop';
import MainContent from './Components/MainContent';
import './App.scss';

const App = () => {
	return (
		<Suspense fallback={<LoadingPage />}>
			<Router>
				<div className='App'>
					<SidebarDesktop />
					<MainContent />
				</div>
			</Router>
		</Suspense>
	);
};

export default App;
