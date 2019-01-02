import React from 'react';
import { shallow } from 'enzyme';

import { Menu } from './Menu';
import { toggleWarning } from '../../store/actions/uiActions';

describe('<Menu />', () => {
  const dispatch = jest.fn();

  test('Should render', () => {
    shallow(<Menu />);
  });

  test('Dispatches warning when clicking delete account', () => {
    const wrapper = shallow(<Menu dispatch={dispatch} />);
    wrapper.find('.menu-item.delete-account').simulate('click');
    expect(dispatch).toHaveBeenCalledWith(toggleWarning());
  });

})