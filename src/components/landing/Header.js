import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export const Header = ({userStatus}) => {
  return(
    <section className="header">
      <h1 className="title">f/StopandGo</h1>
      <p>Meet your photography goals with an easy way to integrate and organize those goals into photoshoots.</p>
      {
        //If a user is not logged in, offer to Create Account
        !userStatus && 
        <Link to="/createaccount"className="create-account-btn btn-green">Get Started</Link>
      }
    </section>
  );
}

export default Header;