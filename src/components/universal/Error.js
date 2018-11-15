import React from 'react';
import { connect } from 'react-redux';
import './Error.css';

export const Error = (props) => {
    if (props.errorIsDisplayed === true) {
        return(
            <div className="error-page">
                <h1>Uh-oh, we've detected a glitch in the matrix.</h1>
                <p>ERROR</p>
            </div>
        )  
    } else {
        return(
            <div>
                {/* TODO: This Component is not working */}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        errorIsDisplayed: state.ui.errorIsDisplayed
    };
};

export default connect(mapStateToProps)(Error);