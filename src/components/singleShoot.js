import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { viewingShoot } from '../actions/actions';

// import './singleShoot.css';

export const SingleShoot = (props) => {
    const shoot = props.photoshoots.find((item) => item.id === props.match.params.shootId);
    const gearList = shoot.gearList.map((item, index) => {
        return <li className="gearList-item" key={index}>{item}</li>
    });

    props.dispatch(viewingShoot(shoot));

    return(
        <main>
            <section className="shoot">
                <div className="shoot-header">
                    <h2 className="shoot-title">{shoot.title}</h2>
                    <p className="shoot-location">{shoot.location}</p>
                </div>

                <article className="shoot-description-box">
                    <p className="shoot-description">{shoot.description}</p>
                </article>
                <article className="shoot-gearList-box">
                    <h3>Gear List</h3>
                    <ul className="shoot-gearList">
                        {gearList}
                    </ul>
                </article>
                <div className="map-placeholder">
                    <i className="fas fa-map-marked-alt map-placeholder-icon"></i>
                </div>
                </section>
                <div className="app-bar-actions">
                    <Link to={`/dashboard/editshoot/${props.match.params.shootId}`}>
                        <button className="edit-shoot-btn app-bar-btn">
                            <i className="far fa-edit app-bar-icon"></i>
                            Edit Shoot
                        </button>
                    </Link>

                    <button className="delete-shoot-btn app-bar-btn">
                        <i className="far fa-trash-alt app-bar-icon"></i>
                        Delete
                    </button>
                </div>
        </main>
    );
};

const mapStateToProps = (state) => {
    return {
        photoshoots: state.app.photoshoots
    };
};

export default connect(mapStateToProps)(SingleShoot);