import React from 'react';
import { connect } from 'react-redux';
import { Field, FieldArray, reduxForm } from 'redux-form';

import './forms.css';



const renderField = ({ input, label, meta: { touched, error } }) => (
    <div className="gearList-entry-field">
        <label>{label}</label>
        <div>
            <input {...input} type="text" placeholder="e.g. tripod" />
            {touched && error && <span>{error}</span>}
        </div>
    </div>
)

const renderGearList = ({ fields, meta: { error } }) => (
	<ul className="shoot-form-gearList">
		<li className="add-gear">
			<button className="add-gear-btn" type="button" onClick={() => fields.push()}>
				<i className="far fa-plus-square add-gear-icon"></i>
				Add Gear
			</button>
		</li>
		
		{fields.map((item, index) => (
			<li className="gearList-entry" key={index}>
				
				<Field
				name={item}
				type="text"
				component={renderField}
				label={`Gear Item #${index + 1}`}
				/>
				
				<button
					className="remove-gear-btn"
					type="button"
					title="Remove Item"
					onClick={() => fields.remove(index)}>
					<i className="fas fa-trash-alt"></i>
				</button>
			</li>
		))}
		{error && <li className="error">{error}</li>}
	</ul>
)

 

let EditShootForm = (props) => {
    const { handleSubmit, pristine, reset, submitting } = props;
    // const shoot = props.initialValues.find((item) => item.id === props.shootId);


	const cancelShoot = () => {
		reset();
		props.onCancel();
    }
    
    // console.log(props.initialValues);

    return(
        
        <form onSubmit={handleSubmit(values => props.onSubmit(values))} className="shoot-form">
            <div className="form-row">
                <label htmlFor="shoot-form-title">Title</label>
                <div>
                    <Field name="title" component="input" type="text" placeholder="Title" autoComplete="off" />
                </div>
            </div>
            <div className="form-row">
                <label htmlFor="shoot-form-location">Location</label>
                <div>
                    <Field name="location" component="input" type="text" placeholder="Location" autoComplete="off" />
                </div>
            </div>
            <div className="form-row">
                <label htmlFor="shoot-form-description">Description</label>
                <div>
                    <Field name="description" component="textarea" autoComplete="off" />
                </div>
            </div>
            <FieldArray name="gearList" component={renderGearList} />
            <div className="app-bar-actions">
                <button className="app-bar-btn save-shoot-btn" type="submit" disabled={pristine || submitting}>
					<i className="far fa-check-circle app-bar-icon nav-complete"></i>
					Save Shoot
                </button>
                <button className="app-bar-btn cancel-btn" type="button" disabled={submitting} onClick={()=> cancelShoot()}>
					<i className="far fa-times-circle app-bar-icon nav-cancel"></i>
					Cancel
                </button>
            </div>
        </form>
    )
}

EditShootForm = reduxForm({
    form: 'shoot' // a unique identifier for this form
  })(EditShootForm)

// EditShootForm = connect(
//     state => ({
//       initialValues: state.app.viewingShoot
//     })
//   )(EditShootForm)

export default EditShootForm;