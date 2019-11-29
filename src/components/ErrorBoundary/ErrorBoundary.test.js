// third party libraries
import React from 'react'
import { mount } from 'enzyme';

// components
import ErrorBoundary from './index'

describe('ErrorBoundary Component', () => {
  const initialProps = {
    children: '<OtherComponent/>',
  }
  it('should be rendered properly', () => {
    // eslint-disable-next-line react/jsx-props-no-spreading
    const wrapper = mount(<ErrorBoundary {...initialProps} />);
    expect(wrapper).toMatchSnapshot();
  });
})
