// third party libraries
import React from 'react';
import { shallow } from 'enzyme';

// components
import Routes from './index';

describe('Route component', () => {
  it('should register a route for the / page', () => {
    const wrapper = shallow(
      <Routes />,
    );

    expect(wrapper.find({ path: '/' }).length).toBe(1);
  });
});
