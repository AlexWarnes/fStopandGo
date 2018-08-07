import React from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';

import { toggleNavDrawer } from '../actions/actions';

import NavDrawer from './navDrawer';

import './bottomAppBar.css';

export class BottomAppBar extends React.Component{
    
    openNavDrawer(){
        this.props.dispatch(toggleNavDrawer(true));
    }
    
    render(){
        
        switch (this.props.navDrawerIsOpen){
            case false:
                return(
                    <nav>
                        <div className="nav-hamburger">
                            <button 
                                onClick={()=> this.openNavDrawer()}
                                className="nav-hamburger-button">
                                <i className="fas fa-bars nav-hamburger-icon nav-icon"></i>
                            </button>
                        </div>
                    </nav>
                );
            case true:
                return(
                    <NavDrawer />
                );
            default:
                return(
                    <div><p>We have a problem.</p></div>
                );
        }
    }
};

const mapStateToProps = (state) => {
    return {
        navDrawerIsOpen: state.app.navDrawerIsOpen
    }
}

export default connect(mapStateToProps)(BottomAppBar);
