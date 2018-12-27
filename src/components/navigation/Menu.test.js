import React from 'react';
import { shallow } from 'enzyme';

import { Menu } from './Menu';

describe('<Menu />', () => {
  const dispatch = jest.fn();

  test('Should render', () => {
    shallow(<Menu />);
  })

})