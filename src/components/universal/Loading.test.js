import React from 'react';
import { shallow } from 'enzyme';

import { Loading } from './Loading';

describe('<Loading />', () => {
  test('Should render', () => {
    shallow(<Loading />);
  })
})