import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleMenu, toggleWarning } from '../../store/actions/uiActions';
import { logout, deleteUser } from '../../store/actions/authActions';
import Warning from '../universal/Warning';

import './Menu.css';

export const Menu = (props) => {
  const { dispatch } = props;
  
  const handleLogout = () => {
    dispatch(toggleMenu());
    dispatch(logout());
  }

  const handleDeleteUser = (userID, userJWT) => {
    dispatch(toggleMenu());
    dispatch(toggleWarning());
    dispatch(deleteUser(userID, userJWT));
  }

  switch(props.menuIsOpen){
    case true:
    return(
      <div className="menu">
        <div className="menu-header">
          <p className="logo">
            <i className="material-icons logo-icon">filter_center_focus</i>
            f/StopandGo
          </p>
          <h3 className="menu-username">{props.username}</h3>
        </div>
        <section>
          <Link to="/dashboard">
            <p className="menu-item" onClick={()=> dispatch(toggleMenu())}><i className="fas fa-home menu-icon"></i>Dashboard</p>
          </Link>
          <Link to="/map">
            <p className="menu-item feature-pending" onClick={()=> dispatch(toggleMenu())}><i className="fas fa-map menu-icon"></i>Map View (feature pending)</p>
          </Link>
          <Link to="/resources">
            <p className="menu-item feature-pending" onClick={()=> dispatch(toggleMenu())}><i className="fas fa-lightbulb menu-icon"></i>Resources (feature pending)</p>
          </Link>
          <Link to="/">
            <p className="menu-item" onClick={()=> dispatch(toggleMenu())}><i className="fas fa-info-circle menu-icon"></i>About</p>
          </Link>
        </section>
        <section>
          <Link to="/">
            <p className="menu-item" onClick={()=> handleLogout()}><i className="fas fa-sign-out-alt menu-icon"></i>Log Out</p>
          </Link>
            <p className="menu-item" onClick={()=> dispatch(toggleWarning())}><i className="fas fa-exclamation-circle menu-icon"></i>Delete Account</p>
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
    );
    default:
      return <div></div>;
  }
};

const mapStateToProps = (state) => {
    return {
        username: state.auth.username,
        userJWT: state.auth.userJWT,
        userID: state.auth.userID,
        menuIsOpen: state.ui.menuIsOpen
    }
}

export default connect(mapStateToProps)(Menu);