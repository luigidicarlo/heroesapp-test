import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Login } from '../pages/Login';
import { DashboardRouter } from './DashboardRouter';

export const AppRouter = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/login" component={Login} />
				<Route path="/" component={DashboardRouter} />
			</Switch>
		</BrowserRouter>
	);
};
