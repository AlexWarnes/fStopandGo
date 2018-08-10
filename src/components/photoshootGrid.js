import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import SearchBar from './searchBar';

import './photoshootGrid.css';

export const PhotoshootGrid = (props) => {
    
    const photoshoots = props.photoshoots.map(shoot => (
        <Link to={`/dashboard/shoot/${shoot.id}`} key={shoot.id}>
            <div className="shoot-card" >
                <h3 className="shoot-card-title">{shoot.title}</h3>
                <p className="shoot-card-location">{shoot.location}</p>
                <p className="shoot-card-description">{shoot.description}</p>
            </div>
        </Link>
    ))

    console.log(`HEY YOU: ${props.photoshoots.length}`)
    switch (props.photoshoots.length){
        case (0):
            return (
                <div>
                    <SearchBar />
                    <h2>Hi {props.userName}, you don't have any photoshoots yet!</h2>
                    <p>Click the + button to create a new shoot.</p>
                    <Link to="/dashboard/newshoot">
                        <button className="new-shoot-fab floating-action-button">
                            <i className="fas fa-plus-circle fab-icon"></i>
                        </button>
                    </Link>
                </div>
            );
        default:
            return(
                <div className="photoshootGrid">
                    <SearchBar />
                    {photoshoots}
                    <Link to="/dashboard/newshoot">
                        <button className="new-shoot-fab floating-action-button">
                            <i className="fas fa-plus-circle fab-icon"></i>
                        </button>
                    </Link>
                </div>
            );
        }
};

const mapStateToProps = (state) => {
    return {
        photoshoots: state.app.photoshoots,
        userName: state.app.userName
    }
}

export default connect(mapStateToProps)(PhotoshootGrid);