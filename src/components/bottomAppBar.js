import React from 'react';
import { connect } from 'react-redux';

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
                
                        <button className="new-shoot-fab floating-action-button">
                            <i className="fas fa-plus-circle fab-icon"></i>
                        </button>                            
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
        navDrawerIsOpen: state.navDrawerIsOpen
    }
}

export default connect(mapStateToProps)(BottomAppBar);

                        
/* <div class="nav-buttons-container">
<button class="edit-shoot-button nav-button">
    <i class="fas fa-edit nav-icon"></i>
</button>

<button class="delete-shoot-button nav-button">
    <i class="fas fa-trash-alt nav-icon"></i>
</button>

<button class="save-shoot-button nav-button">
    <i class="fas fa-check-circle nav-icon nav-complete"></i>
</button>

<button class="cancel-shoot-button nav-button">
    <i class="fas fa-times-circle nav-icon nav-cancel"></i>
</button>
</div> */