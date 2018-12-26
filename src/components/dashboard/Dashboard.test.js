import React from 'react';
import { shallow } from 'enzyme';

import { Dashboard } from './Dashboard';

describe('<Dashboard />', ()=> {
  it('Should render without crashing', ()=> {
    const dispatch = jest.fn();
    shallow(<Dashboard dispatch={dispatch} />);
  });

  it('Should scroll lock when menuIsOpen', () => {
    const wrapper = shallow(<Dashboard scrollIsLocked={true}/>);
    expect(wrapper.hasClass('scrollLock')).toEqual(true);
  });
})