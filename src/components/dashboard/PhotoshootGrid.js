import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUserPhotoshoots } from '../../store/actions/photoshootActions';

import './PhotoshootGrid.css';

export class PhotoshootGrid extends React.Component {
    
    componentDidMount() {       
        this.props.dispatch(getUserPhotoshoots(this.props.userID, this.props.userJWT))
    }
    
    render(){
        //TODO: Make component ShootSummaryCard for this?
        const photoshoots = this.props.photoshoots.map(shoot => (
            <Link to={`/dashboard/shoot/${shoot.id}`} key={shoot.id}>
                <div className="shoot-card col-4" >
                    <h3 className="shoot-card-title">{shoot.title}</h3>
                    <p className="shoot-card-location">{shoot.location}</p>
                    <p className="shoot-card-description">{shoot.description}</p>
                </div>
            </Link>
        ))

        switch (this.props.photoshoots.length){
            case (0):
                return (
                    <div className="photoshootGrid">
                        <h2 className="greeting">Hi {this.props.username}</h2>
                        <p>You don't have any photoshoots yet!</p>
                        <Link to="/dashboard/newshoot">
                          <div className="new-shoot-btn">
                            <i className="material-icons">add</i>
                            <p>Photoshoot</p>
                          </div>
                        </Link>
                    </div>
                );
            default:
                return(
                    <div className="photoshootGrid">
                    <h2 className="greeting">Hi {this.props.username}</h2>
                        {photoshoots}
                        <Link to="/dashboard/newshoot">
                          <div className="new-shoot-btn">
                            <i className="material-icons">add</i>
                            <p>Photoshoot</p>
                          </div>
                        </Link>
                    </div>
                );
        }
    }
};

const mapStateToProps = (state) => {
    return {
        photoshoots: state.photoshoot.photoshoots,
        userID: state.auth.userID,
        userJWT: state.auth.userJWT,
        username: state.auth.username
    };
};

export default connect(mapStateToProps)(PhotoshootGrid);