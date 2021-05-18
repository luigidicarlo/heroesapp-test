import { useContext } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';
import { Login } from '../pages/Login';
import { DashboardRouter } from './DashboardRouter';

export const AppRouter = () => {
	const { user } = useContext(AuthContext);

	return (
		<BrowserRouter>
			<Switch>
				{!user.isLoggedIn && <Route exact path="/login" component={Login} />}
				{user.isLoggedIn ? (
					<Route path="/" component={DashboardRouter} />
				) : (
					<Redirect to="/login" />
				)}
			</Switch>
		</BrowserRouter>
	);
};
