import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Landing from './components/landing/Landing';
import Dashboard from './components/dashboard/Dashboard';
import CreateAcctForm from './components/forms/CreateAcct';
import LoginForm from './components/forms/Login';
import Error from './components/universal/Error';
import NavBar from './components/navigation/NavBar';
import Menu from './components/navigation/Menu';
import Resources from './components/resources/Resources';
import MapView from './components/map/MapView';


export const App = (props) => {

  // TODO: add a call to wake up the API server so Heroku doesn't sleep on users trying to fetch/login

	return(
		<Router>
			<div className="app">
        {/* <Error /> */}
        <Menu />
				<NavBar />
				<Switch>
					<Route exact path="/" component={Landing} />
					<Route path="/dashboard" component={Dashboard} />
          <Route path="/map" component={MapView} />
          <Route path="/resources" component={Resources} />
					<Route path="/createaccount" component={CreateAcctForm} />
					<Route path="/login" component={LoginForm} />
					<Route component={Error} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;