import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

import Landing from './Landing';
import Dashboard from './dashboard';
// import { DevNav } from './devNav';
import { CreateAcctForm } from './Form-CreateAcct';
import { LoginForm } from './Form-Login';
import { Error } from './error';

export class App extends React.Component {
	render() {
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
		
		// switch (this.props.isLoggedIn) {
		// 	case true:
		// 		return( 
		// 			<div className="App">
		// 				<Route exact path="/dashboard" component={Dashboard} />
		// 			</div>
		// 		);
		// 	case false:
		// 		return (
		// 			<div className="App">
		// 				<Route exact path="/" component={Landing} />
		// 			</div>
		// 		);
		// 	default:
		// 		return (
		// 			<div className="App">
		// 				<Route exact path="/" component={Landing} />
		// 			</div>
		// 		);
		// } 

		// return(
		// 	<Router>
		// 		<div className="App">
		// 			<Route exact path="/" component={Landing} />
		// 			<Route exact path="/dashboard" component={Dashboard} />
		// 		</div>
		// 	</Router>
		// );
		
		// return(
		// 	<Router>
				// <div className="App">
					// <Route exact path="/" render={()=> (
					// 	this.props.isLoggedIn ? (
					// 		<Redirect exact to="/dashboard" component={Dashboard}/>
					// 	) : (
					// 		<Landing />
					// 	)
					// )}/>
				// 	<Route exact path="/dashboard" component={Dashboard} />
				// </div>
		// 	</Router>
		// );

		// return(
		// 	<Router>
		//  		<div className="App">
		//  			<Route exact path="/" component={Landing} />
		//  			<Route path="/dashboard" component={Dashboard} />
		//  		</div>
		//  	</Router>
		// )

	}
}

const mapStateToProps = (state) => {
	return {
		isLoggedIn: state.app.isLoggedIn
	}
}

export default connect(mapStateToProps)(App);
