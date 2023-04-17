import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Authorization from './routes/authentication/authentication.component';

const Shop = () => {
	return <h1>I am the shop page</h1>;
};

const App = () => {
	return (
		<Routes>
			<React.Fragment>
				<Route path="/" element={<Navigation />}>
					<Route index element={<Home />} />
					<Route path="shop" element={<Shop />} />
					<Route path="auth" element={<Authorization />} />
				</Route>
			</React.Fragment>
		</Routes>
	);
};

export default App;
