// react library
// third-party libraries
import React from 'react';
import { shallow } from 'enzyme';

// components
import StarRating from './index'

describe('StarRating Component', () => {
  const initialProps = {
    totalStars: 3,
  }
  it('should be rendered properly', () => {
    // eslint-disable-next-line react/jsx-props-no-spreading
    const wrapper = shallow(<StarRating {...initialProps} />);
    expect(wrapper.find('div').length).toEqual(4);
    expect(wrapper).toMatchSnapshot();
  });
})
