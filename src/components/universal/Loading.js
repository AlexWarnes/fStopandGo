import React from 'react';
import './Loading.css';

export const Loading = () => {
  return (
    <div className="loading-container">
      <div className="circle-border">
        <div className="circle-core"></div>
      </div> 
    </div>
  );
}