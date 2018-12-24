import React from 'react';

import './Burger.css';

export const Burger = (props) => {
  let menuStatus = props.menuStatus === true ? 'open' : null;

  return(
    <div className="burger-box" onClick={props.onClick}>
      <div className={`burger ${menuStatus}`}>
        <div className="burger-layer"></div>
        <div className="burger-layer"></div>
        <div className="burger-layer"></div>
      </div>
    </div>
  );
}

export default Burger;