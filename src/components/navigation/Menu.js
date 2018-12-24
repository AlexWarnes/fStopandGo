import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleMenu, toggleWarning } from '../../store/actions/uiActions';
import { deleteUser, logout } from '../../store/actions/authActions';

import Logo from './Logo';
import Warning from '../universal/Warning';

import './Menu.css';

export const Menu = (props) => {
  const { dispatch } = props;
  
  const handleLogout = () => {
    dispatch(logout());
  }

  const handleDeleteUser = (userID, userJWT) => {
    dispatch(deleteUser(userID, userJWT));
    dispatch(logout());
  }

  return(
    <div className="menu">
      <div className="menu-header">
        <Logo status={props.serverStatus} logoSize={'large'} />
        <h3 className="menu-username">{props.username}</h3>
      </div>
      <section>
        <Link to="/dashboard">
          <p className="menu-item" onClick={()=> dispatch(toggleMenu())}><i className="fas fa-th-large menu-icon"></i>Dashboard</p>
        </Link>
        <Link to="/map">
          <p className="menu-item feature-pending" onClick={()=> dispatch(toggleMenu())}><i className="fas fa-map menu-icon"></i>Map View (feature pending)</p>
        </Link>
        <Link to="/resources">
          <p className="menu-item feature-pending" onClick={()=> dispatch(toggleMenu())}><i className="fas fa-lightbulb menu-icon"></i>Resources (feature pending)</p>
        </Link>
        <Link to="/about">
          <p className="menu-item" onClick={()=> dispatch(toggleMenu())}><i className="fas fa-info-circle menu-icon"></i>About</p>
        </Link>
      </section>
      <section>
        <Link to="/">
          <p className="menu-item" onClick={()=> handleLogout()}><i className="fas fa-sign-out-alt menu-icon"></i>Log Out</p>
        </Link>
        {props.username === 'publicAccount' || <p className="menu-item" onClick={()=> dispatch(toggleWarning())}><i className="fas fa-exclamation-circle menu-icon"></i>Delete Account</p>}
        <Warning 
          onAffirm={()=> handleDeleteUser(props.userID, props.userJWT)}
          message='Are you sure you want to delete your account?'
          affirmTxt='Yes, delete my account.'
        />
      </section>
      <section>
        <a href="https://github.com/AlexWarnes/fStopandGo" target="_blank" rel="noopener noreferrer">
          <p className="menu-item"><i className="fas fa-laptop-code menu-icon"></i>Frontend Code</p>
        </a>
        <a href="https://github.com/AlexWarnes/fStopandGo-api" target="_blank" rel="noopener noreferrer">
          <p className="menu-item"><i className="fas fa-server menu-icon"></i>Backend Code</p>
        </a>
      </section>
    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    username: state.auth.username,
    userJWT: state.auth.userJWT,
    userID: state.auth.userID,
    serverStatus: state.ui.serverStatus
  }
}

export default connect(mapStateToProps)(Menu);