import React from 'react';
import { connect } from 'react-redux';
import './ValidationError.css';

export const ValidationError = ({ isValidationError, validationMessage}) => {

  const capFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  switch (isValidationError) {
    case true:
      return(
        <div className="validation-error">
          <i className="material-icons validation-error-icon">error</i>
          <p className="validation-error-message">{capFirstLetter(validationMessage)}</p>
        </div>
      );
    default:
      return(
        <div></div>
      );
  }
}

const mapStateToProps = state => {
  return {
    isValidationError: state.ui.isValidationError,
    validationMessage: state.ui.validationMessage
  }
}

export default connect(mapStateToProps)(ValidationError);