import React from 'react';
import { connect } from 'react-redux';

import { toggleNavDrawer, logout } from '../actions/actions';

import './navDrawer.css';

export class NavDrawer extends React.Component{
    
    logUserOut() {
        this.props.dispatch(logout(false))
    }

    closeNavDrawer(){
        this.props.dispatch(toggleNavDrawer(false));
    }
    
    render() {
        return(
            <div className="drawer">
                <div className="drawer-content">
                    <section className="drawer-header">
                        <h2 className="drawer-title">f/StopandGo</h2>
                        <h3 className="drawer-username">AlexWarnes</h3>
                    </section>
                    <section className="drawer-nav">
                        <p className="drawer-item"><i className="fas fa-home drawer-icon"></i>Dashboard</p>
                        <p className="drawer-item"><i className="fas fa-map drawer-icon"></i>Map View</p>
                        <p className="drawer-item"><i className="fas fa-lightbulb drawer-icon"></i>Learning Center</p>
                        <p className="drawer-item"><i className="fas fa-info-circle drawer-icon"></i>About</p>
                    </section>
                    <section className="drawer-settings">
                        <p className="drawer-item" onClick={()=> this.logUserOut()}><i className="fas fa-sign-out-alt drawer-icon"></i>Log Out</p>
                        <p className="drawer-item"><i className="fas fa-exclamation-circle drawer-icon"></i>Delete Account</p>
                    </section>
                    <section className="drawer-dev">
                        <p className="drawer-item"><i className="fas fa-code drawer-icon"></i>View the Code</p>
                    </section>
                    <div className="drawer-close" onClick={()=> this.closeNavDrawer()}>
                        <i className="fas fa-chevron-down drawer-icon-close"></i>
                    </div>
                </div>
            </div>
        );
    }
};

export default connect()(NavDrawer);