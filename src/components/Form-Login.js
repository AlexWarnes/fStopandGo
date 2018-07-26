import React from 'react';
import { connect } from 'react-redux';

import { toggleVisLogin } from '../actions/actions'

import './Forms.css';

export class LoginForm extends React.Component{

    closeLoginForm() {
        this.props.dispatch(toggleVisLogin(false));
    }

    render(){
        return(
            <section className="acct-action-container">
                <form action="#" className="login-form acct-action-form">
                    <label htmlFor="login-username">Username</label>
                    <input type="text" id="login-username" name="username" autoComplete="off" required="true" />

                    <label htmlFor="create-password">Password</label>
                    <input type="password" id="create-password" name="password" autoComplete="off" required="true" />

                    <div className="acct-action-buttons-container">
                            <button className="create-acct-button acct-go-button acct-action-button">Login</button>
                            <button 
                                onClick={()=> this.closeLoginForm()}
                                className="acct-cancel-button acct-action-button">
                                Cancel
                            </button>
                        </div>
                </form>
            </section>
        );
    }
};

export default connect()(LoginForm)