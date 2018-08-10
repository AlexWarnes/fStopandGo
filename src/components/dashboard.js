import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';

import PhotoshootGrid from './photoshootGrid';
import BottomAppBar from './bottomAppBar';
import AppDescription from './AppDescription';
import SingleShoot from './singleShoot';
import ShootFormView from './shootFormView';
import { Error } from './error';

import './dashboard.css';

export const Dashboard = (props) => {

		switch (props.isLoggedIn) {
			case true:
				return (
					<div>
						<BottomAppBar />
						<Switch>
							<Route exact path="/dashboard" component={PhotoshootGrid} />                    
							<Route path="/dashboard/about" component={AppDescription} />
							<Route path="/dashboard/shoot/:shootId" component={SingleShoot} />
							<Route path="/dashboard/newshoot" component={ShootFormView} />
							<Route path="/dashboard/editshoot/:shootId" component={ShootFormView} />
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