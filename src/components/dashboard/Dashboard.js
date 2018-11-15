import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';

import PhotoshootGrid from './PhotoshootGrid';
import SingleShoot from './SingleShoot';
import NavBar from '../navigation/NavBar';
import NewShoot from '../forms/NewShoot';
import EditShoot from '../forms/EditShoot';
import { Error } from '../universal/Error';

import { getUserInfo } from '../../store/actions/authActions';

// import AppDescription from './AppDescription';

import './Dashboard.css';

export class Dashboard extends React.Component {

	componentDidMount(){
		this.props.dispatch(getUserInfo(this.props.userID, this.props.userJWT))
	}

	render(){
		switch (this.props.isLoggedIn) {
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
}

const mapStateToProps = (state) => {
	return {
		isLoggedIn: state.auth.isLoggedIn,
		userID: state.auth.userID,
		userJWT: state.auth.userJWT
	}
}

export default connect(mapStateToProps)(Dashboard);