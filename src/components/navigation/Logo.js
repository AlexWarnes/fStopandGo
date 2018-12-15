import React from 'react';

import './Logo.css';

export const Logo = ({logoSize, status}) => {
  let iconText;
  let iconColor;

  switch(status) {
    case 'asleep':
      iconText = 'Asleep';
      iconColor = 'status-yellow';
      break;
    case 'awake':
      iconText = 'Awake';
      iconColor = 'status-green';
      break;
    case 'down':
      iconText = 'Down';
      iconColor = 'status-red';
      break;
    default:
      iconText = 'Asleep';
      iconColor = 'status-yellow';
  }

  if (logoSize === 'large') {
    return (
      <div className="logo">
        <div className="icon-box">
            <i className={`material-icons logo-icon ${iconColor}`}>filter_center_focus</i>
            <p className="status-text">Server Status: {iconText}</p>
        </div>
        <p className="logo-text">f/StopandGo</p>
      </div>)
  } else {
    return (
      <div className="logo">
        <div className="icon-box">
          <i className={`material-icons logo-icon ${iconColor}`}>filter_center_focus</i>
          <p className="status-text">Server Status: {iconText}</p>
        </div>
      </div>)
  }
}

export default Logo;