import { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import LoadingPage from './pages/loadingPage';
import SidebarDesktop from './Components/SidebarDesktop';
import MainContent from './Components/MainContent';
import './App.scss';

const App = () => {
	return (
		<Suspense fallback={<LoadingPage />}>
			<Router>
				<Routes>
					{['/', '/join-aiesec'].map((route) => (
						<Route
							path={route}
							element={
								<div className='App'>
									<SidebarDesktop />
									<MainContent />
								</div>
							}
						/>
					))}
				</Routes>
			</Router>
		</Suspense>
	);
};

export default App;
