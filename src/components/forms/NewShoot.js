import React from 'react';
import { connect } from 'react-redux';
import { newShoot } from '../../store/actions/photoshootActions';
import PhotoshootForm from './PhotoshootForm';

export const NewShoot = (props) => {

    const submitNewShoot = (values) => {
        props.dispatch(newShoot(values));
        props.history.push('/dashboard');    
    };
    
    return(
        <div className="shoot-form-view">
            <PhotoshootForm 
                onSubmit={(values)=> submitNewShoot(values)} 
                {...props}/> 
        </div>
    );
};

export default connect()(NewShoot);
