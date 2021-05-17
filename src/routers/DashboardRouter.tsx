import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { Navbar } from '../components/layouts/Navbar';
import { DC } from '../pages/DC';
import { Hero } from '../pages/Hero';
import { Marvel } from '../pages/Marvel';
import { Search } from '../pages/Search';

export const DashboardRouter = () => {
	return (
		<React.Fragment>
			<Navbar />
			<div className="container-fluid mt-3">
				<Switch>
					<Route exact path="/marvel" component={Marvel} />
					<Route exact path="/heroes/:heroid" component={Hero} />
					<Route exact path="/dc" component={DC} />
					<Route exact path="/search" component={Search} />
					<Redirect to="/marvel" />
				</Switch>
			</div>
		</React.Fragment>
	);
};
