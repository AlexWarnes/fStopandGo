import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Burger from './Burger';

import './NavBar.css';

export const NavBar = (props) => {

  switch(props.isLoggedIn) {
    case true:
      return(
        <div className="navbar">
          <Link to="/">
              <p className="logo">
                  <i className="material-icons logo-icon">filter_center_focus</i>
              </p>
          </Link>
          <section className="navbar-main">
            <Link to="/dashboard" className="navbar-link">
              Dashboard
            </Link>
            <Burger />
          </section>
        </div>
      );
    default:
      return(
        <div className="navbar">
          <Link to="/">
            <p className="logo">
              <i className="material-icons logo-icon">filter_center_focus</i>
              f/StopandGo
            </p>
          </Link>
          <section className="navbar-main">
            <Link to="/login" className="navbar-link">Login</Link>
            {/* TODO: Create launchDemo action */}
            <Link to="/"  className="navbar-link" >Demo</Link>
          </section>
        </div>
      );
  }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.auth.isLoggedIn
    }
}

export default connect(mapStateToProps)(NavBar);