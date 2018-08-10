import React from 'react';
import { connect } from 'react-redux';
import { newShoot, updateShoot } from '../actions/actions';
import NewShootForm from './form-NewShoot';
import EditShootForm from './form-EditShoot';
import Error from './error';

export const ShootFormView = (props) => {

    const submitNewShoot = (values) => {
        props.dispatch(newShoot(values));
        props.history.push('/dashboard');    
    };

    const submitUpdate = values => {
        props.dispatch(updateShoot(values));
        props.history.push(`/dashboard/shoot/${props.match.params.shootId}`);
    };

    const shoot = props.photoshoots.find((item) => item.id === props.match.params.shootId);
    
    switch (props.match.path){
        case '/dashboard/newshoot':
            return(
            <div className="shoot-form-view">
                <NewShootForm onSubmit={(values)=> submitNewShoot(values)} {...props}/> 
                <div className="map-placeholder">
                    <i className="fas fa-map-marked-alt map-placeholder-icon"></i>
                </div> 
            </div>
            );
        case '/dashboard/editshoot/:shootId':
            return(
                <div className="shoot-form-view">
                    <EditShootForm 
                        onSubmit={(values)=> submitUpdate(values)} 
                        initialValues={shoot} 
                        {...props}/> 
                    <div className="map-placeholder">
                        <i className="fas fa-map-marked-alt map-placeholder-icon"></i>
                    </div> 
                </div>
                );
        default:
            return <Error />;   
    }
};

const mapStateToProps = (state) => {
    return {
        photoshoots: state.app.photoshoots
    };
};

export default connect(mapStateToProps)(ShootFormView);
