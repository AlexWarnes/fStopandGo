import React from 'react';
import { shallow } from 'enzyme';

import { AppDescription } from './AppDescription';

describe('<AppDescription />', () => {
  test('Should render', () => {
    shallow(<AppDescription />);
  })
})