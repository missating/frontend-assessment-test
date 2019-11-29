// react library
import React from 'react';
import { shallow } from 'enzyme';

// components
import HotelList from './index'

describe('HotelList Component', () => {
  it('should be rendered properly', () => {
    // eslint-disable-next-line react/jsx-props-no-spreading
    const wrapper = shallow(<HotelList />);
    expect(wrapper.find('div').length).toEqual(2);
    expect(wrapper).toMatchSnapshot();
  });
})
