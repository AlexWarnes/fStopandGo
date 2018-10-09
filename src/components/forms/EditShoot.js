import React from 'react';
import { connect } from 'react-redux';
import { updateShoot } from '../../actions/actions';
import PhotoshootForm from './PhotoshootForm';

export const EditShoot = (props) => {

    const submitUpdate = (values) => {
        props.dispatch(updateShoot(values));
        props.history.push(`/dashboard/shoot/${props.match.params.shootId}`);
    };

    const shootToEdit = props.photoshoots.find((item) => item.id === props.match.params.shootId);

    return(
        <div className="shoot-form-view">
            <PhotoshootForm 
                onSubmit={(values)=> submitUpdate(values)} 
                initialValues={shootToEdit} 
                {...props}/> 
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        photoshoots: state.app.photoshoots
    };
};

export default connect(mapStateToProps)(EditShoot);
