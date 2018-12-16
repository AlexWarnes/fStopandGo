import React from 'react';
import { connect } from 'react-redux';

import Header from './Header';
import AppDescription from './AppDescription';

import './Landing.css';


export const Landing = (props) => {
  return(
    <div>
      <header className="landing-header">
        <Header userStatus={props.isLoggedIn}/>
      </header>
      <AppDescription />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.auth.isLoggedIn
  }
}

export default connect(mapStateToProps)(Landing);