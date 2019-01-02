import React from 'react';
import { shallow } from 'enzyme';

import { NavBar } from './NavBar';

describe('<NavBar />', () => {
  test('Should render', () => {
    shallow(<NavBar />);
  });

  test('Should render with Login & Demo if user is not logged in', () => {
    const wrapper = shallow(<NavBar isLoggedIn={false} />)
    expect(wrapper.find('.navbar-main').contains('Login')).toEqual(true);
    expect(wrapper.find('.navbar-main').contains('Demo')).toEqual(true);
    expect(wrapper.find('.navbar-main').contains('Dashboard')).toEqual(false);
  })

  test('Should render with Dashboard and Burger if user is logged in', () => {
    const wrapper = shallow(<NavBar isLoggedIn={true} />)
    expect(wrapper.find('Burger').length).toEqual(1);
    expect(wrapper.find('.navbar-main').contains('Dashboard')).toEqual(true);
    expect(wrapper.find('.navbar-main').contains('Login')).toEqual(false);
    expect(wrapper.find('.navbar-main').contains('Demo')).toEqual(false);
  })
})