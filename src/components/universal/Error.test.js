import React from 'react';
import { shallow } from 'enzyme';

import { Error } from './Error';

describe('<Error />', () => {
  test('Should render', () => {
    shallow(<Error />);
  })
})