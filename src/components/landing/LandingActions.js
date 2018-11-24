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
        <div className="landing-nav">
            {/* TODO: Link to game */}
            <p className="landing-nav-logo">
                <i class="material-icons landing-nav-icon">filter_center_focus</i>
                f/StopandGo
            </p>
            <section className="landing-actions">
                <Link to="/login" className="login-account action-button">Login</Link>
                <Link to="/dashboard" onClick={()=> launchDemoAccount()} className="demo-account action-button" >Demo</Link>
            </section>
        </div>
    );
}

export default connect()(LandingActions)