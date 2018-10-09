import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';

import PhotoshootGrid from './PhotoshootGrid';
import SingleShoot from './SingleShoot';
import NavBar from '../navigation/NavBar';
import NewShoot from '../forms/NewShoot';
import EditShoot from '../forms/EditShoot';
import { Error } from '../universal/Error';
// import AppDescription from './AppDescription';

import './Dashboard.css';

export const Dashboard = (props) => {

		switch (props.isLoggedIn) {
			case true:
				return (
					<div>
						<NavBar />
						<Switch>
							<Route exact path="/dashboard" component={PhotoshootGrid} />                    
							{/* <Route path="/dashboard/about" component={AppDescription} /> */}
							<Route path="/dashboard/shoot/:shootId" component={SingleShoot} />
							<Route path="/dashboard/newshoot" component={NewShoot} />
							<Route path="/dashboard/editshoot/:shootId" component={EditShoot} />
							<Route component={Error} />
						</Switch>
					</div>
				)
			default:
				return(
					<Redirect exact to="/" />
				);
		}
}

const mapStateToProps = (state) => {
	return {
		isLoggedIn: state.app.isLoggedIn,
	}
}

export default connect(mapStateToProps)(Dashboard);