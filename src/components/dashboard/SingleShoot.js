import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './SingleShoot.css';
import Warning from '../universal/Warning';
import { deletePhotoshoot } from '../../store/actions/photoshootActions'
import { toggleWarning } from '../../store/actions/uiActions';

export const SingleShoot = (props) => {
    const shoot = props.photoshoots.find((item) => item.id === props.match.params.shootId);
    
    let gearList;
    
    if (shoot.gearList.length > 0){
        gearList = shoot.gearList.map((item, index) => {
            return <li className="gearList-item" key={index}>{item}</li>
        });
    } else { gearList = "You haven't added any gear for this shoot."}

    const handleDelete = (shootID) => {
        props.dispatch(deletePhotoshoot(shootID, props.userJWT));
        props.dispatch(toggleWarning(false));
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
                        <p className="shoot-location">{shoot.location.name}</p>
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
        photoshoots: state.photoshoot.photoshoots,
        userJWT: state.auth.userJWT
    };
};

export default connect(mapStateToProps)(SingleShoot);