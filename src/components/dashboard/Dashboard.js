import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';

import PhotoshootGrid from './PhotoshootGrid';
import SingleShoot from './SingleShoot';
import NewShoot from '../forms/NewShoot';
import EditShoot from '../forms/EditShoot';

import './Dashboard.css';

export const Dashboard = ({ isLoggedIn, scrollIsLocked }) => {
  window.scrollTo(0,0);

  //Prevents over-scrolling when Menu is open
  let scrollLock = scrollIsLocked ? 'scrollLock' : null;

  return(
    <div className={`dashboard ${scrollLock}`}>
      <Switch>
        <Route exact path="/dashboard" render={() => (
          isLoggedIn ? (
            <PhotoshootGrid />
          ) : (
            <Redirect to="/" />
          )
        )} />
        <Route path="/dashboard/shoot/:shootId" component={SingleShoot} />
        <Route path="/dashboard/newshoot" component={NewShoot} />
        <Route path="/dashboard/editshoot/:shootId" component={EditShoot} />
      </Switch>
    </div>
  )
}

const mapStateToProps = (state) => {
	return {
    isLoggedIn: state.auth.isLoggedIn,
    scrollIsLocked: state.ui.scrollIsLocked
	}
}

export default connect(mapStateToProps)(Dashboard);