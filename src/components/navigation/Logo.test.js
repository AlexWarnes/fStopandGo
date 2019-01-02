import React from 'react';
import { shallow } from 'enzyme';

import { Logo } from './Logo';

describe('<Logo />', () => {
  test('Should render', () => {
    shallow(<Logo />);
  });

  test('Should render large logo if logoSize is large', () => {
    const wrapper = shallow(<Logo logoSize={'large'} />);
    expect(wrapper.children().length).toEqual(2);
  });

  test('Should render small logo by default', () => {
    const wrapper = shallow(<Logo logoSize={null} />);
    expect(wrapper.children().length).toEqual(1);
  });

  test('Status when server is asleep', () => {
    const wrapper = shallow(<Logo logoSize={null} status={'asleep'} />);
    expect(wrapper.find('.logo-icon').hasClass('status-yellow')).toEqual(true);
    expect(wrapper.find('.status-text').text()).toContain('Asleep');
    //Not the other status options
    expect(wrapper.find('.status-text').text()).not.toContain('Awake');
    expect(wrapper.find('.status-text').text()).not.toContain('Down');
  })
  test('Status when server is awake', () => {
    const wrapper = shallow(<Logo logoSize={null} status={'awake'} />);
    expect(wrapper.find('.logo-icon').hasClass('status-green')).toEqual(true);
    expect(wrapper.find('.status-text').text()).toContain('Awake');
    //Not the other status options
    expect(wrapper.find('.status-text').text()).not.toContain('Asleep');
    expect(wrapper.find('.status-text').text()).not.toContain('Down');
  })
  test('Status when server is down', () => {
    const wrapper = shallow(<Logo logoSize={null} status={'down'} />);
    expect(wrapper.find('.logo-icon').hasClass('status-red')).toEqual(true);
    expect(wrapper.find('.status-text').text()).toContain('Down');
    //Not the other status options
    expect(wrapper.find('.status-text').text()).not.toContain('Awake');
    expect(wrapper.find('.status-text').text()).not.toContain('Asleep');
  })
})