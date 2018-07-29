import React from 'react';
import { connect } from 'react-redux';

import './App.css';

import Landing from './Landing';
import Dashboard from './dashboard';

export class App extends React.Component {
  render() {

    switch (this.props.isLoggedIn) {
      case true:
        return( 
          <div className="App">
            <Dashboard />
          </div>
        );
      case false:
        return (
          <div className="App">
            <Landing />
          </div>
        );
      default:
        return (
          <div className="App">
            <Landing />
          </div>
        );
    } 
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn
  }
}

export default connect(mapStateToProps)(App);