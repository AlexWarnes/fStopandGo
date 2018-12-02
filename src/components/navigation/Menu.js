import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleNavDrawer } from '../../store/actions/uiActions';
import { logout, deleteUser } from '../../store/actions/authActions';

import './Menu.css';

export const Menu = (props) => {
    const { dispatch } = props;
    // const logUserOut = () => {
    //     dispatch(toggleNavDrawer(false));
    //     dispatch(logout());
    // }

    // const handleDeleteUser = (userID, userJWT) => {
    //     dispatch(deleteUser(userID, userJWT));
    //     dispatch(toggleNavDrawer(false));
    // }

    // const closeNavDrawer = () => {
    //     dispatch(toggleNavDrawer(false));
    // }
    

    switch(props.menuIsOpen){
      case true:
      return(
        <div className="menu">
          <section className="menu-header">
            <h2 className="menu-title">f/StopandGo</h2>
            <h3 className="menu-username">{props.userName}</h3>
          </section>
          <section>
            <Link to="/dashboard">
              <p className="menu-item"><i className="fas fa-home drawer-icon"></i>Dashboard</p>
            </Link>
            <Link to="/dashboard/map">
              <p className="menu-item"><i className="fas fa-map drawer-icon"></i>Map View</p>
            </Link>
            <Link to="/dashboard/learning">
              <p className="menu-item"><i className="fas fa-lightbulb drawer-icon"></i>Learning Center</p>
            </Link>
            <Link to="/dashboard/about">
              <p className="menu-item"><i className="fas fa-info-circle drawer-icon"></i>About</p>
            </Link>
          </section>
          <section>
            <Link to="/">
              <p className="menu-item"><i className="fas fa-sign-out-alt drawer-icon"></i>Log Out</p>
            </Link>
              <p className="menu-item"><i className="fas fa-exclamation-circle drawer-icon"></i>Delete Account</p>
          </section>
          <section>
              <a href="https://github.com/AlexWarnes/fStopandGo" target="_blank" rel="noopener noreferrer">
                  <p className="menu-item"><i className="fas fa-code drawer-icon"></i>View the Code</p>
              </a>
          </section>
          {/* <div className="menu-close" onClick={()=> closeNavDrawer()}>
              <i className="fas fa-chevron-down drawer-icon-close"></i>
          </div> */}
        </div>
      );
      default:
        return <div></div>;
    }
};

const mapStateToProps = (state) => {
    return {
        userName: state.auth.userName,
        userJWT: state.auth.userJWT,
        userID: state.auth.userID,
        menuIsOpen: state.ui.menuIsOpen
    }
}

export default connect(mapStateToProps)(Menu);