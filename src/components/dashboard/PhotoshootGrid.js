import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ShootPreviewCard from './ShootPreviewCard';

import './PhotoshootGrid.css';

export const PhotoshootGrid = (props) => {
  const photoshoots = props.photoshoots.map((photoshoot, i) => (
    <ShootPreviewCard shoot={photoshoot} key={i}/>
  ));

  let greeting = props.photoshoots.length === 0 ? (
    <div>
      <h2 className="greeting">Hi {props.username}</h2>
      <p>You don't have any photoshoots yet!</p>
    </div>
  ) : (
    <div>
      <h2 className="greeting">Hi {props.username}</h2>
    </div>
  )

  return (
    <div>
      {greeting}
      <div className="photoshootGrid">
        {photoshoots || null}
        <Link to="/dashboard/newshoot">
          <div className="new-shoot-btn">
            <i className="material-icons">add</i>
            <p>Photoshoot</p>
          </div>
        </Link>
      </div>  
    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    photoshoots: state.photoshoot.photoshoots,
    username: state.auth.username
  };
};

export default connect(mapStateToProps)(PhotoshootGrid);