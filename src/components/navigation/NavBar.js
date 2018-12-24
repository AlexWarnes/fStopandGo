import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Burger from './Burger';
import Logo from './Logo';

import './NavBar.css';
import { toggleMenu } from '../../store/actions/uiActions';
import { login } from '../../store/actions/authActions';

export const NavBar = (props) => {
  const demoCredentials = {
    username: 'publicAccount',
    password: 'publicAccountPW'
  }

  switch(props.isLoggedIn) {
    case true:
      return(
        <div className="navbar">
          <Logo status={props.serverStatus} logoSize={'small'} />
          <div className="navbar-main">
            <Link to="/dashboard" className="navbar-link">
              <i className="fas fa-th-large navbar-icon"></i>
              Dashboard
            </Link>
          </div>
          <Burger menuStatus={props.menuIsOpen} onClick={()=>props.dispatch(toggleMenu())}/>
        </div>
      );
    default:
      return(
        <div className="navbar">
          <Logo status={props.serverStatus} logoSize={'large'} />
          <div className="navbar-main">
            <Link to="/login" className="navbar-link">Login</Link>
            <p className="navbar-link" onClick={() => props.dispatch(login(demoCredentials))}>Demo</p>
          </div>
        </div>
      );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.auth.isLoggedIn,
    menuIsOpen: state.ui.menuIsOpen,
    currentView: state.ui.currentView,
    serverStatus: state.ui.serverStatus
  }
}

export default connect(mapStateToProps)(NavBar);