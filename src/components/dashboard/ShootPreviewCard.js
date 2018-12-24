import React from 'react';
import { Link } from 'react-router-dom';
import './ShootPreviewCard.css';

export const ShootPreviewCard = ({ shoot }) => {
  return (
    <Link to={`/dashboard/shoot/${shoot.id}`} className="shoot-card">
      <div>
        <h3 className="shoot-card-title">{shoot.title}</h3>
        <p className="shoot-card-location">{shoot.location}</p>
        <p className="shoot-card-description">{shoot.description}</p>
      </div>
    </Link>
  )
}

export default ShootPreviewCard;