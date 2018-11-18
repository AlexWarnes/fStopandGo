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
        <section className="landing-actions">
            <Link to="/createaccount">
                <p className="create-account action-button">Create an Account</p>
            </Link>
            <Link to="/login">
                <p className="login-account action-button">Login</p>
            </Link>
            <Link to="/dashboard">
                <p className="demo-account action-button" onClick={()=> launchDemoAccount()}>Demo</p>
            </Link>
        </section>
    );
}

export default connect()(LandingActions)