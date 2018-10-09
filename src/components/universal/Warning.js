import React from 'react';
import { connect } from 'react-redux';
import { toggleWarning } from '../../actions/actions';

import './Warning.css';

export const Warning = (props) => {
    const cancel = () => {
        props.dispatch(toggleWarning(false));
    }

    if (props.warningIsDisplayed === true) {
        return (
            <div className="warning-shade">
                <div className="warning-box">
                    <p>{props.message}</p>
                    <button className="btn btn-red" onClick={props.onAffirm}>{props.affirmTxt}</button>
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
        warningIsDisplayed: state.app.warningIsDisplayed
    }
}

export default connect(mapStateToProps)(Warning);