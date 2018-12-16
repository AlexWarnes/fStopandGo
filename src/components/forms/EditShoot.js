import React from 'react';
import { connect } from 'react-redux';
import { updatePhotoshoot } from '../../store/actions/photoshootActions';
import PhotoshootForm from './PhotoshootForm';

export const EditShoot = (props) => {
  const shootId = props.match.params.shootId;
  const shootToEdit = props.photoshoots.find((item) => item.id === shootId);

  const submitUpdate = (values) => {
      props.dispatch(updatePhotoshoot(values, shootId, props.userJWT))
      .then(props.history.push(`/dashboard/shoot/${shootId}`));
  };

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
        photoshoots: state.photoshoot.photoshoots,
        userJWT: state.auth.userJWT
    };
};

export default connect(mapStateToProps)(EditShoot);
