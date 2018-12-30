import React from 'react';
import { Link } from 'react-router-dom';
import './Error.css';

export const Error = () => {
  return(
    <div className="error-container">
      <p><i className="fas fa-exclamation-circle"></i>ERROR</p>
      <h1>Uh-oh, we've detected a glitch in the matrix.</h1>
      <Link to="/">Let's go home</Link>
    </div>
  )
}

export default Error;