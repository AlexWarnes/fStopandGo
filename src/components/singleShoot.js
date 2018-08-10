import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './singleShoot.css';
import Warning from './warning';
import { deleteShoot, toggleWarning } from '../actions/actions';

export const SingleShoot = (props) => {
    const shoot = props.photoshoots.find((item) => item.id === props.match.params.shootId);
    
    let gearList;
    
    if (shoot.gearList.length > 0){
        console.log('MAPPING THE GEAR')
        gearList = shoot.gearList.map((item, index) => {
            return <li className="gearList-item" key={index}>{item}</li>
        });
    } else { gearList = "You haven't added any gear for this shoot."}

    const handleDelete = (id) => {
        props.dispatch(deleteShoot(id))
        props.history.push('/dashboard');
    } 

    return(
        <div>
            <Warning 
                onAffirm={()=> handleDelete(props.match.params.shootId)}
                message='Are you sure you want to delete this shoot?'
                affirmTxt='Yes, delete this shoot.'
            />
            <main>
                <Link to='/dashboard'>
                    <i className="fas fa-chevron-left back-to-dash-icon"></i>
                    <p className="back-to-dash">Back to Dashboard</p>
                </Link>
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

                    <button className="delete-shoot-btn app-bar-btn"
                        onClick={()=> props.dispatch(toggleWarning(true))}>
                        <i className="far fa-trash-alt app-bar-icon"></i>
                        Delete
                    </button>
                </div>
            </main>
        </div>
    );
};

// onClick={()=> handleDelete(props.match.params.shootId)

const mapStateToProps = (state) => {
    return {
        photoshoots: state.app.photoshoots
    };
};

export default connect(mapStateToProps)(SingleShoot);