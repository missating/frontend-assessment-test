// react library
import React from 'react';

// third-party libraries
import { shallow } from 'enzyme';

// components
import NavBar from './index'

describe('NavBar Component', () => {
  it('should be rendered properly', () => {
    const wrapper = shallow(<NavBar />);
    expect(wrapper.find('header').length).toEqual(1);
    expect(wrapper).toMatchSnapshot();
  });
})
