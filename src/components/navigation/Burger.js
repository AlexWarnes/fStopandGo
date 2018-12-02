import React from 'react';
import { connect } from 'react-redux';

import './Burger.css';
import { toggleMenu } from '../../store/actions/uiActions';

export const Burger = (props) => {
  
  function animateBurger(){
    const burger = document.querySelector('.burger');
    burger.classList.toggle('open');
  }

  function handleClick(e) {
    e.preventDefault();
    animateBurger();
    props.dispatch(toggleMenu(true))
  }

  return(
    <div class="burger-box">
      <div class="burger" onClick={(e)=>handleClick(e)}>
        <div class="burger-layer"></div>
        <div class="burger-layer"></div>
        <div class="burger-layer"></div>
      </div>
  </div>
  );
}

export default connect()(Burger);