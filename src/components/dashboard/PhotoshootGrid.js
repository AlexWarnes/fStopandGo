import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './PhotoshootGrid.css';

export class PhotoshootGrid extends React.Component {
    
    // componentDidMount() {
    //     this.props.dispatch(fetchBoard());
    // }
    
    render(){

        //TODO: Make component ShootSummaryCard for this?
        const photoshoots = this.props.photoshoots.map(shoot => (
            <Link to={`/dashboard/shoot/${shoot.id}`} key={shoot.id}>
                <div className="shoot-card" >
                    <h3 className="shoot-card-title">{shoot.title}</h3>
                    <p className="shoot-card-location">{shoot.location.name}</p>
                    <p className="shoot-card-description">{shoot.description}</p>
                </div>
            </Link>
        ))

        switch (this.props.photoshoots.length){
            case (0):
                return (
                    <div>
                        <h2>Hi {this.props.username}, you don't have any photoshoots yet!</h2>
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
                        {photoshoots}
                        <Link to="/dashboard/newshoot">
                            <button className="new-shoot-fab floating-action-button">
                                <i className="fas fa-plus-circle fab-icon"></i>
                            </button>
                        </Link>
                    </div>
                );
        }
    }
};

const mapStateToProps = (state) => {
    return {
        photoshoots: state.photoshoot.photoshoots,
        username: state.auth.username
    };
};

export default connect(mapStateToProps)(PhotoshootGrid);