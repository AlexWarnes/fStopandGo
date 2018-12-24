import React from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';

import './forms.css';

const renderField = ({ input, label, meta: { touched, error } }) => {
  return (
    <div className="gearList-entry-field">
      <label>{label}</label>
      <div>
        <input {...input} type="text" autoComplete="off" placeholder="e.g. tripod" autoFocus={true} required={true}/>
        {touched && error && <span>{error}</span>}
      </div>
      
      {/* Keep the newest input in view by scrolling to bottom when a new field is added*/}
      {window.scrollTo({
        top: document.body.scrollHeight,
        left: 0,
        behavior: 'smooth'
      })}
    </div>
  )
}

const renderGearList = ({ fields, meta: { error } }) => (
	<ul className="shoot-form-gearList">
		{fields.map((item, index) => (
			<li className="gearList-entry" key={index}>	
				<Field
          name={item}
          type="text"
          component={renderField}
          label={`Gear Item #${index + 1}`}
          id={index+1}
				/>
				<button
					className="remove-gear-btn btn-red"
					type="button"
					title="Remove Item"
					onClick={() => fields.remove(index)}>
					<i className="fas fa-trash-alt"></i>
				</button>
			</li>
    ))}
    <li className="add-gear">
			<button className="add-gear-btn btn btn-lightgrey" type="button" onClick={() => fields.push()}>
				<i className="far fa-plus-square add-gear-icon"></i>
				Add Gear
			</button>
		</li>
	</ul>
)

const PhotoshootForm = (props) => {
  window.scrollTo(0,0)

  const { handleSubmit, pristine, reset, submitting, history } = props;

  const cancel = () => {
    reset();
    history.goBack();
  }

  return(
    <form onSubmit={handleSubmit(values => props.onSubmit(values))} className="shoot-form">
      <div className="form-row">
        <label htmlFor="shoot-form-title">Title</label>
        <div>
          <Field id="shoot-form-title" name="title" component="input" type="text" placeholder="Title" required={true} autoFocus={true} autoComplete="off" />
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
      
      <div className="btn-container-row">
        <div className="btn-box">
          <button className="btn btn-green" type="submit" disabled={pristine || submitting}>
            <i className="far fa-check-circle btn-icon"></i>
            Save Shoot
          </button>
          <button className="btn btn-grey" type="button" disabled={submitting} onClick={()=> cancel()}>
            <i className="far fa-times-circle btn-icon"></i>
            Cancel
          </button>
        </div>
      </div>
    </form>
  ) 
}

export default reduxForm({form: 'PhotoshootForm'})(PhotoshootForm);