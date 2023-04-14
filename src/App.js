import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './routes/home/home.component';

const App = () => {
	return (
		<Routes>
			<React.Fragment>
				<Route path="/" element={<Home />} />
			</React.Fragment>
		</Routes>
	);
};

export default App;
