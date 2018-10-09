import React from 'react';
import { connect } from 'react-redux';
import { toggleNavDrawer } from '../../actions/actions';
import Menu from './Menu';
import './NavBar.css';

export class NavBar extends React.Component{
    
    openMenu(){
        this.props.dispatch(toggleNavDrawer(true));
    }
    
    render(){   
        switch (this.props.navDrawerIsOpen){
            case false:
                return(
                    <nav>
                        <div className="nav-hamburger">
                            <button 
                                onClick={()=> this.openMenu()}
                                className="nav-hamburger-button">
                                <i className="fas fa-bars nav-hamburger-icon nav-icon"></i>
                            </button>
                        </div>
                    </nav>
                );
            case true:
                return(
                    <Menu />
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

export default connect(mapStateToProps)(NavBar);
