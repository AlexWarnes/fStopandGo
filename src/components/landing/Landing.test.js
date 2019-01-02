import React from 'react';
import { shallow } from 'enzyme';

import { Landing } from './Landing';

describe('<Landing />', () => {
  test('Should render', () => {
    shallow(<Landing />);
  });

  test('Should scroll lock when menuIsOpen', () => {
    const wrapper = shallow(<Landing scrollIsLocked={true} />);
    expect(wrapper.hasClass('scrollLock')).toEqual(true);
  })
})