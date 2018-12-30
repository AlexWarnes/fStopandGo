import React from 'react';
import { shallow } from 'enzyme';

import { Warning } from './Warning';

describe('<Warning />', () => {
  const staticProps = {
    dispatch: jest.fn(),
    affirmTxt: 'Yes',
    onAffirm: jest.fn(),
    message: 'Are you sure you want to delete this?'
  }
  test('Should render', () => {
    shallow(<Warning />);
  })
  
  test('Should display warning message', () => {
    const wrapper = shallow(<Warning warningIsDisplayed={true} {...staticProps}/>);
    expect(wrapper.find('p').text()).toEqual(staticProps.message)
  });

  test('Does not render if warningIsDisplayed is false', () => {
    const wrapper = shallow(<Warning warningIsDisplayed={false} {...staticProps}/>);
    expect(wrapper.children().length).toEqual(0);
  });
})