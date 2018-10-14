import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './LandingActions.css';
import { demoLogin } from '../../store/actions/authActions';
import { demoData } from '../../store/actions/photoshootActions';

export const LandingActions = (props) => {   

    const launchDemoAccount = () => {
        props.dispatch(demoLogin());
        props.dispatch(demoData());
    }

    return(
        <section className="header-actions">
            <ul className="action-list">
                <li className="action-item">New User?
                    <Link to="/createaccount">
                        <p className="create-account action-button">Create an Account</p>
                    </Link>
                </li>
                <li className="action-item">Existing User?
                    <Link to="/login">
                        <p className="login-account action-button">Login</p>
                    </Link>
                </li>
                <li className="action-item">Just Visiting?
                    <Link to="/dashboard">
                        <p className="demo-account action-button" onClick={()=> launchDemoAccount()}>Demo</p>
                    </Link>
                </li>
            </ul>
        </section>
    );
}

export default connect()(LandingActions)