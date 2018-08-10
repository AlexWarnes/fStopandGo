import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

import Landing from './Landing';
import Dashboard from './dashboard';
// import { DevNav } from './devNav';
import CreateAcctForm from './Form-CreateAcct';
import LoginForm from './Form-Login';
import { Error } from './error';

export const App = () => {

	return(
		<Router>
			<div className="App">
				<Switch>
					<Route exact path="/" component={Landing} />
					<Route path="/dashboard" component={Dashboard} />
					<Route path="/createaccount" component={CreateAcctForm} />
					<Route path="/login" component={LoginForm} />
					<Route component={Error} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
