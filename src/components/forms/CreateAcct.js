import React from 'react'; 
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Redirect } from 'react-router-dom';
import { createNewUser, login } from '../../store/actions/authActions';
import { displayValidationError, clearValidationError } from '../../store/actions/uiActions';
import {required, nonEmpty, matches, length, isTrimmed} from '../../store/validators';
import ValidationError from '../universal/ValidationError';
import './forms.css';

const passwordLength = length({min: 10, max: 72});
const matchesPassword = matches('password');

export const CreateAcctForm = (props) => {
	const { handleSubmit, pristine, submitting, reset, history, dispatch } = props;
		
	const cancel = () => {
		reset();
		history.goBack();
		dispatch(clearValidationError());
	};
	
	const createUserAccount = (userData) => {
		const credentials = { 
			username: userData.username, 
			password: userData.password 
		}
		return dispatch(createNewUser(userData))
		.then(() => dispatch(login(credentials)))
		.then(() => dispatch(clearValidationError()));
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
								<Field 
									name="username" 
									component="input" 
									type="text" 
									autoComplete="off" 
									required={true}
									validate={[required, nonEmpty, isTrimmed]} 
								/>
							</div>
						</div>
						<div>
							<label htmlFor="create-email">Email</label>
							<div>
								<Field name="email" component="input" type="email" autoComplete="off" required={true} />
							</div>
						</div>
						<div>
							<label htmlFor="create-password">Password</label>
							<div>
								<Field 
									name="password" 
									component="input" 
									type="password" 
									autoComplete="off" 
									required={true} 
									validate={[required, passwordLength, isTrimmed]}
								/>
							</div>
						</div>
						<div>
							<label htmlFor="create-password-confirm">Confirm Password</label>
							<div>
								<Field 
									name="confirm password" 
									component="input" 
									type="password" 
									autoComplete="off" 
									required={true} 
									validate={[required, nonEmpty, matchesPassword]}
								/>
							</div>
						</div>
						<ValidationError />
						<div className="acct-action-buttons-container">
							<button 
								className=" btn-green btn"
								type="submit"
								disabled={pristine || submitting}>
								Create Account
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
			)
	}
}

const mapStateToProps = (state) => {
	return {
		isLoggedIn: state.auth.isLoggedIn,
		isValidationError: state.ui.isValidationError
	}
}



export default connect(mapStateToProps)(reduxForm({
	form: 'createAccount',
	onSubmitFail: (errors, dispatch) => {
		let errorField = Object.keys(errors)[0];
		let errorMessage = errors[Object.keys(errors)[0]]
		// TODO: Figure out why redux-form's focus action isn't working
		// dispatch(focus('createAccount', errorField));
		dispatch(displayValidationError(`${errorField}: ${errorMessage}`));
	},
})(CreateAcctForm));