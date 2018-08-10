import React from 'react'; 
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Redirect } from 'react-router-dom';
import { createAccount } from '../actions/actions';


import './forms.css';

const CreateAcctForm = (props) => {
	const { handleSubmit, pristine, submitting, reset, history, dispatch } = props;
	
	console.log(props);
	
	const cancel = () => {
		history.goBack();
		reset();
	};
	
	const createUserAccount = (values) => {
		dispatch(createAccount(values));
	}

	switch (props.isLoggedIn){
		case true:
			return <Redirect to="/dashboard" />
		default:
			return(
				<section className="acct-action-container">
					<form onSubmit={handleSubmit(values => createUserAccount(values))} className="create-acct-form acct-action-form">
						<div>
							<label htmlFor="create-username">Username</label>
							<div>
								<Field name="userName" component="input" type="text" autoComplete="off" required="true" />
							</div>
						</div>
						<div>
							<label htmlFor="create-email">Email</label>
							<div>
								<Field name="email" component="input" type="email" autoComplete="off" required="true" />
							</div>
						</div>
						<div>
							<label htmlFor="create-password">Password</label>
							<div>
								<Field name="password" component="input" type="password" autoComplete="off" required="true" />
							</div>
						</div>
						<div>
							<label htmlFor="create-password-confirm">Confirm Password</label>
							<div>
								<Field name="confirm password" component="input" type="password" autoComplete="off" required="true" />
							</div>
						</div>
						<div className="acct-action-buttons-container">
							<button 
								className="create-acct-button acct-go-button acct-action-button"
								type="submit"
								disabled={pristine || submitting}>
								Create Account
							</button>
							<button 
								className="cancel-btn acct-cancel-button acct-action-button"
								disabled={submitting}
								onClick={()=> cancel()}>
								Cancel
							</button>
						</div>
					</form>
				</section>
			)
	}
}

const mapStateToProps = (state) => {
	return {
		isLoggedIn: state.app.isLoggedIn
	}
}

export default connect(mapStateToProps)(reduxForm({form: 'createAccount'})(CreateAcctForm));