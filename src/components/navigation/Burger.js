import React from 'react';

import './Burger.css';

export const Burger = (props) => {
  let menuStatus;

  props.menuStatus === true ? menuStatus = 'open' : menuStatus = null;

  return(
    <div className="burger-box">
      <div className={`burger ${menuStatus}`} onClick={props.onClick}>
        <div className="burger-layer"></div>
        <div className="burger-layer"></div>
        <div className="burger-layer"></div>
      </div>
    </div>
  );
}

export default Burger;