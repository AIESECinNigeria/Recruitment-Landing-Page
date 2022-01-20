import { Suspense } from 'react';
import {
	BrowserRouter as Router,
	Navigate,
	Route,
	Routes,
} from 'react-router-dom';

import LoadingPage from './pages/loadingPage';
import SidebarDesktop from './Components/SidebarDesktop';
import MainContent from './Components/MainContent';
import './App.scss';

const App = () => {
	return (
		<Suspense fallback={<LoadingPage />}>
			<Router>
				<Routes>
					<Route path='/' element={<Navigate to='/join-aiesec' />} />
					<Route
						path='/join-aiesec'
						element={
							<div className='App'>
								<SidebarDesktop />
								<MainContent />
							</div>
						}
					/>
				</Routes>
			</Router>
		</Suspense>
	);
};

export default App;
