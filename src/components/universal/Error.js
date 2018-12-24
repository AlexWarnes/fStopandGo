import React from 'react';
import { connect } from 'react-redux';
import './Error.css';

export const Error = (props) => {
  switch(props.errorIsDisplayed){
    case true:
    return(
      <div className="error-container">
        <h1>Uh-oh, we've detected a glitch in the matrix.</h1>
        <p>ERROR</p>
      </div>
    )
    case false:
    return(
      <div></div>
    )
    default:
    return(
      <div></div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    errorIsDisplayed: state.ui.errorIsDisplayed
  };
};

export default connect(mapStateToProps)(Error);