import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

import Landing from './components/landing/Landing';
import Dashboard from './components/dashboard/Dashboard';
import CreateAcctForm from './components/forms/CreateAcct';
import LoginForm from './components/forms/Login';
import { Error } from './components/universal/Error';

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
