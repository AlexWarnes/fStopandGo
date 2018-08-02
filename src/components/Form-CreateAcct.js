import React from 'react';

import { connect } from 'react-redux';

import './Forms.css';

export class CreateAcctForm extends React.Component{
    
    render(){
        return(
            <section className="acct-action-container">
                <form action="#" className="create-acct-form acct-action-form">
                    <label htmlFor="create-username">Username</label>
                    <input type="text" id="create-username" name="username" autoComplete="off" required="true" />

                    <label htmlFor="create-email">Email</label>
                    <input type="email" id="create-email" name="email" autoComplete="off" required="true" />

                    <label htmlFor="create-password">Password</label>
                    <input type="password" id="create-password" name="password" autoComplete="off" required="true" />

                    <label htmlFor="create-password-confirm">Confirm Password</label>
                    <input type="password" id="create-password-confirm" name="confirm password" autoComplete="off" required="true" />

                    <div className="acct-action-buttons-container">
                        <button className="create-acct-button acct-go-button acct-action-button">Create Account</button>
                        <button 
                            className="acct-cancel-button acct-action-button"
                            onClick={()=> this.props.history.goBack()}>
                            Cancel
                        </button>
                    </div>
                </form>
            </section>
        );
    }
};

export default connect()(CreateAcctForm);