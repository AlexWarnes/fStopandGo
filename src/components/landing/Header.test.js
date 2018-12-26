import React from 'react';
import { shallow } from 'enzyme';

import { Header } from './Header';

describe('<Header />', () => {
  test('Should render', () => {
    shallow(<Header />);
  })

  test('Should show CreateAcct button if user is not logged in', () => {
    const isLoggedIn = false;
    const wrapper = shallow(<Header userStatus={isLoggedIn} />);
    expect(wrapper.find('.create-account-btn').exists()).toEqual(true);
  })

  test('Should NOT show CreateAcct button if user is logged in', () => {
    const isLoggedIn = true;
    const wrapper = shallow(<Header userStatus={isLoggedIn} />)
    expect(wrapper.find('.create-account-btn').exists()).toEqual(false);
  })
})