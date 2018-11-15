import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleNavDrawer } from '../../store/actions/uiActions';
import { logout, deleteUser } from '../../store/actions/authActions';

import './Menu.css';

export const Menu = (props) => {
    const { dispatch } = props;
    const logUserOut = () => {
        dispatch(toggleNavDrawer(false));
        dispatch(logout());
    }

    const handleDeleteUser = (userID, userJWT) => {
        dispatch(deleteUser(userID, userJWT));
        dispatch(toggleNavDrawer(false));
    }

    const closeNavDrawer = () => {
        dispatch(toggleNavDrawer(false));
    }
    
    return(
        <div className="drawer">
            <div className="drawer-content">
                <section className="drawer-header">
                    <h2 className="drawer-title">f/StopandGo</h2>
                    <h3 className="drawer-username">{props.userName}</h3>
                </section>
                <section className="drawer-nav">
                    <Link to="/dashboard">
                        <p className="drawer-item" onClick={()=> closeNavDrawer()}><i className="fas fa-home drawer-icon"></i>Dashboard</p>
                    </Link>
                    <Link to="/dashboard/map">
                        <p className="drawer-item" onClick={()=> closeNavDrawer()}><i className="fas fa-map drawer-icon"></i>Map View</p>
                    </Link>
                    <Link to="/dashboard/learning">
                        <p className="drawer-item" onClick={()=> closeNavDrawer()}><i className="fas fa-lightbulb drawer-icon"></i>Learning Center</p>
                    </Link>
                    <Link to="/dashboard/about">
                        <p className="drawer-item" onClick={()=> closeNavDrawer()}><i className="fas fa-info-circle drawer-icon"></i>About</p>
                    </Link>
                </section>
                <section className="drawer-settings">
                    <Link to="/">
                        <p className="drawer-item" onClick={()=> logUserOut()}><i className="fas fa-sign-out-alt drawer-icon"></i>Log Out</p>
                    </Link>
                    <p className="drawer-item" onClick={()=> handleDeleteUser(props.userID, props.userJWT)}><i className="fas fa-exclamation-circle drawer-icon"></i>Delete Account</p>
                </section>
                <section className="drawer-dev">
                    <a href="https://github.com/AlexWarnes/fStopandGo" target="_blank" rel="noopener noreferrer">
                        <p className="drawer-item"><i className="fas fa-code drawer-icon"></i>View the Code</p>
                    </a>
                </section>
                <div className="drawer-close" onClick={()=> closeNavDrawer()}>
                    <i className="fas fa-chevron-down drawer-icon-close"></i>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        userName: state.auth.userName,
        userJWT: state.auth.userJWT,
        userID: state.auth.userID
    }
}

export default connect(mapStateToProps)(Menu);