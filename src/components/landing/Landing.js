import React from 'react';
import { connect } from 'react-redux';

import Header from './Header';
import AppDescription from './AppDescription';

import './Landing.css';


export const Landing = ({ isLoggedIn, scrollIsLocked }) => {
  window.scrollTo(0,0);

  //Prevents over-scrolling when Menu is open
  let scrollLock = scrollIsLocked ? 'scrollLock' : null;

  return(
    <div className={`${scrollLock}`}>
      <header className="landing-header">
        <Header userStatus={isLoggedIn}/>
      </header>
      <AppDescription />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.auth.isLoggedIn,
    scrollIsLocked: state.ui.scrollIsLocked
  }
}

export default connect(mapStateToProps)(Landing);