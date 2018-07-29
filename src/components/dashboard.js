import React from 'react';
import { connect } from 'react-redux';

import SearchBar from './searchBar';
import PhotoshootGrid from './photoshootGrid';
import BottomAppBar from './bottomAppBar';

import './dashboard.css';

export class Dashboard extends React.Component{

    render(){
        return(
            <div>
                <h1>Welcome, {this.props.userName}</h1>
                <SearchBar />
                <PhotoshootGrid />
                <BottomAppBar />
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.isLoggedIn,
        userName: state.userName,
        photoshoots: state.photoshoots
    }
}

export default connect(mapStateToProps)(Dashboard);