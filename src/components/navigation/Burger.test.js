import React from 'react';
import { shallow } from 'enzyme';

import { Burger } from './Burger';

describe('<Burger />', () => {
  test('Should render', () => {
    shallow(<Burger />);
  });

  test('Should have class Open when menuStatus is true', () => {
    const wrapper = shallow(<Burger menuStatus={true} />)
    expect(wrapper.find('.burger').hasClass('open')).toEqual(true);
  });

  test('Should not have class Open when menuStatus is false', () => {
    const wrapper = shallow(<Burger menuStatus={false} />)
    expect(wrapper.find('.burger').hasClass('open')).toEqual(false);
  });
})