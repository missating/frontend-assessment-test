// react library
import React from 'react';
import { shallow } from 'enzyme';

// oages
import Home from './index'

describe('HotelList Component', () => {
  it('should be rendered properly', () => {
    // eslint-disable-next-line react/jsx-props-no-spreading
    const wrapper = shallow(<Home />);
    expect(wrapper.find('div').length).toEqual(1);
    expect(wrapper).toMatchSnapshot();
  });
})
