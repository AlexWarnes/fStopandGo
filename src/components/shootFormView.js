import React from 'react';
import { connect } from 'react-redux';
import { newShoot, updateShoot } from '../actions/actions';
import PhotoshootForm from './PhotoshootForm';
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

    const shootToEdit = props.photoshoots.find((item) => item.id === props.match.params.shootId);
    
    switch (props.match.path){
        case '/dashboard/newshoot':
            return(
            <div className="shoot-form-view">
                <PhotoshootForm 
                    onSubmit={(values)=> submitNewShoot(values)} 
                    {...props}/> 
            </div>
            );
        case '/dashboard/editshoot/:shootId':
            return(
                <div className="shoot-form-view">
                    <PhotoshootForm 
                        onSubmit={(values)=> submitUpdate(values)} 
                        initialValues={shootToEdit} 
                        {...props}/> 
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
