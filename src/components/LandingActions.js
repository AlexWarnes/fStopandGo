import React from 'react';
import './LandingActions.css';

import { connect } from 'react-redux';
import { toggleVisCreateAcct, toggleVisLogin } from '../actions/actions';

export class LandingActions extends React.Component{
    
    openCreateAcctForm() {
        this.props.dispatch(toggleVisCreateAcct(true));
    }

    openLoginForm() {
        this.props.dispatch(toggleVisLogin(true));
    }

    render(){       
        return(
            <section className="header-actions">
                <ul className="action-list">
                    <li className="action-item">New User?
                        <button 
                            onClick={()=> this.openCreateAcctForm()}
                            className="create-account action-button">
                            Create an Account
                        </button>
                    </li>
                    <li className="action-item">Existing User?
                        <button 
                        onClick={()=> this.openLoginForm()}
                        className="create-account action-button">
                        Log In
                        </button>
                    </li>
                    <li className="action-item">Just Visiting?
                        <button className="create-account action-button">Demo</button>
                    </li>
                </ul>
            </section>
        );
    }
}

export default connect()(LandingActions);