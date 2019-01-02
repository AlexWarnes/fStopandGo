import React from 'react';
import { connect } from 'react-redux';
import { toggleWarning } from '../../store/actions/uiActions';

import './Warning.css';

export const Warning = ({ dispatch, warningIsDisplayed, message, affirmTxt, onAffirm }) => {
  const cancel = () => {
    dispatch(toggleWarning(false));
  }

  if (warningIsDisplayed === true) {
    return (
      <div className="warning-shade">
        <div className="warning-box">
          <p>{message}</p>
          <button className="btn btn-red" onClick={onAffirm}>{affirmTxt}</button>
          <button className="btn btn-grey" onClick={()=> cancel()}>Cancel</button>
        </div>
      </div>
    );
  } else {
      return (
        <div></div>
      );
  }
};

const mapStateToProps = (state) => {
  return {
    warningIsDisplayed: state.ui.warningIsDisplayed
  }
}

export default connect(mapStateToProps)(Warning);