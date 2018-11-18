import React from 'react';
import { shallow } from 'enzyme';

import { Dashboard } from './Dashboard';

describe('<Dashboard />', ()=> {
  it('Should render without crashing', ()=> {
    const dispatch = jest.fn();

    shallow(<Dashboard dispatch={dispatch} />);
  });
});