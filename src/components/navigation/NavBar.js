import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Burger from './Burger';

import './NavBar.css';

export const NavBar = (props) => {

    // <Menu />
    switch(props.isLoggedIn) {
        case true:
            console.log('RENDER isLoggedIn' + props.isLoggedIn)
            return(
                <div className="landing-nav">
                    <Link to="/">
                        <p className="landing-nav-logo">
                            <i className="material-icons landing-nav-icon">filter_center_focus</i>
                            f/StopandGo
                        </p>
                    </Link>
                    <section className="landing-actions">
                        <Link to="/dashboard" className="login-account action-button">Dashboard</Link>
                        <div className="nav-hamburger">
                            {/* <button 
                                // onClick={()=> dispatch(toggleMenu())}
                                className="nav-hamburger-button">
                                <i className="fas fa-bars nav-hamburger-icon nav-icon"></i>
                            </button> */}
                            <Burger />
                        </div>
                    </section>
                </div>
            );
        default:
            console.log('RENDER isLoggedIn' + props.isLoggedIn)
            return(
                <div className="landing-nav">
                    <p className="landing-nav-logo">
                        <i className="material-icons landing-nav-icon">filter_center_focus</i>
                        f/StopandGo
                    </p>
                    <section className="landing-actions">
                        <Link to="/login" className="login-account action-button">Login</Link>
                        {/* TODO: Create launchDemo action */}
                        <Link to="/"  className="demo-account action-button" >Demo</Link>
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