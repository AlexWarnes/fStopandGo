import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Landing from './components/landing/Landing';
import Dashboard from './components/dashboard/Dashboard';
import CreateAcctForm from './components/forms/CreateAcct';
import LoginForm from './components/forms/Login';
import Error from './components/universal/Error';
import NavBar from './components/navigation/NavBar';
import Menu from './components/navigation/Menu';
import Resources from './components/resources/Resources';
import MapView from './components/map/MapView';

import { refreshAuthToken } from './store/actions/authActions';
import { getServerStatus } from './store/actions/uiActions';


export class App extends React.Component {

  componentDidMount() {
    this.props.dispatch(getServerStatus());
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.isLoggedIn && this.props.isLoggedIn) {
      // When we are logged in, refresh the auth token periodically
      this.startPeriodicRefresh();
    } else if (prevProps.isLoggedIn && !this.props.isLoggedIn) {
      // Stop refreshing when we log out
      this.stopPeriodicRefresh();
    }
  }

  componentWillUnmount() {
    this.stopPeriodicRefresh();
  }

  startPeriodicRefresh() {
    this.refreshInterval = setInterval(
      () => this.props.dispatch(refreshAuthToken()),
      60 * 60 * 1000 // One hour
    );
  }

stopPeriodicRefresh() {
  if (!this.refreshInterval) {
    return;
  }
  clearInterval(this.refreshInterval);
}


  render(){
    return(
      // <Router>
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
      //</Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.auth.isLoggedIn
  }
}

export default withRouter(connect(mapStateToProps)(App));