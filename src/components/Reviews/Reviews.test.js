// third-party libraries
import React from 'react';
import { shallow } from 'enzyme';

// components
import Reviews from './index'

describe('Reviews Component', () => {
  const initialProps = {
    name: 'Susan Martins',
    comment: 'Nice hotel',
    positive: true,
  }
  it('should be rendered properly', () => {
    // eslint-disable-next-line react/jsx-props-no-spreading
    const wrapper = shallow(<Reviews {...initialProps} />);
    expect(wrapper.find('div').length).toEqual(1);
    expect(wrapper.find('article').length).toEqual(1)
    expect(wrapper).toMatchSnapshot();
  });
})
