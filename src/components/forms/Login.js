import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Redirect } from 'react-router-dom';
import { getToken} from '../../store/actions/authActions';
import { displayValidationError, clearValidationError } from '../../store/actions/uiActions';
import ValidationError from '../universal/ValidationError';



import './forms.css';

const LoginForm = (props) => {
	const { handleSubmit, pristine, submitting, reset, history, dispatch } = props;

	const cancel = () => {
		reset();
		history.goBack();
		dispatch(clearValidationError());
	}

	const logUserIn = (credentials) => {
		dispatch(getToken(credentials))
	}

	switch (props.isLoggedIn){
		case true:
			return <Redirect to="/dashboard" />
		default:
			return(
				<section className="acct-action-container">
					<form onSubmit={handleSubmit(credentials => logUserIn(credentials))} className="login-form acct-action-form">
						<label htmlFor="login-username">Username</label>
						<Field name="username" component="input" type="text" autoComplete="off" required={true} />

						<label htmlFor="create-password">Password</label>
						<Field name="password" component="input" type="password" autoComplete="off" required={true} />
						<ValidationError />
						<div className="acct-action-buttons-container">
							<button
								className="btn btn-green"
								disabled={pristine || submitting}
								type="submit">
								Login
							</button>
							<button 
								className="btn btn-grey"
								disabled={submitting}
								onClick={()=> cancel()}>
								Cancel
							</button>
						</div>
					</form>
				</section>
			);
	}
}

const mapStateToProps = (state) => {
	return{
		isLoggedIn: state.auth.isLoggedIn
	}
}

export default connect(mapStateToProps)(reduxForm({
	form: 'login',
	onSubmitFail: (dispatch) => {
		dispatch(displayValidationError('Incorrect Username or Password'))
	}
})(LoginForm)); 