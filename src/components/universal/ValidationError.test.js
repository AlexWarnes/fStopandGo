import React from 'react';
import { shallow } from 'enzyme';

import { ValidationError } from './ValidationError';

describe('<ValidationError />', () => {
  test('Should render', () => {
    shallow(<ValidationError />);
  })
  
  test('Should display error message', () => {
    const validationMessage = 'Passwords do not match';
    const wrapper = shallow(<ValidationError isValidationError={true} validationMessage={validationMessage}/>);
    expect(wrapper.find('.validation-error-message').text()).toEqual(validationMessage)
  })

  test('Does not render if isValidationError is false', () => {
    const validationMessage = 'Passwords do not match';
    const wrapper = shallow(<ValidationError isValidationError={false} validationMessage={validationMessage}/>);
    expect(wrapper.children().length).toEqual(0);
  })
})