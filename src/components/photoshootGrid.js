import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import SearchBar from './searchBar';

import './photoshootGrid.css';

export class PhotoshootGrid extends React.Component{
    
    photoshoots = this.props.photoshoots.map(shoot => (
        <Link to={`/dashboard/shoot/${shoot.id}`} key={shoot.id}>
            <div className="shoot-card" >
                <h3 className="shoot-card-title">{shoot.title}</h3>
                <p className="shoot-card-location">{shoot.location}</p>
                <p className="shoot-card-description">{shoot.description}</p>
            </div>
        </Link>
    ))

    render(){
        return(
            <div className="photoshootGrid">
                <SearchBar />
                {this.photoshoots}
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        photoshoots: state.photoshoots
    }
}

export default connect(mapStateToProps)(PhotoshootGrid);