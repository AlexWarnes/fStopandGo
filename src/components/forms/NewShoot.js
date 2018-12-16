import React from 'react';
import { connect } from 'react-redux';
import { createNewPhotoshoot } from '../../store/actions/photoshootActions';
import PhotoshootForm from './PhotoshootForm';

export const NewShoot = (props) => {

  const submitNewShoot = (values) => {
    props.dispatch(createNewPhotoshoot(values, props.userJWT))
    .then(props.history.push('/dashboard'));    
  };
    
  return(
    <div className="shoot-form-view">
      <PhotoshootForm onSubmit={(values)=> submitNewShoot(values)} {...props} /> 
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userJWT: state.auth.userJWT
  }
}

export default connect(mapStateToProps)(NewShoot);
