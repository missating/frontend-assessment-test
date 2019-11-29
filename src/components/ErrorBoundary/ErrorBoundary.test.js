// third party libraries
import React from 'react'
import { shallow } from 'enzyme';

// components
import ErrorBoundary from './index'

describe('ErrorBoundary Component', () => {
  const initialProps = {
    children: '<OtherComponent/>',
  }
  it('should be rendered properly', () => {
    // eslint-disable-next-line react/jsx-props-no-spreading
    const wrapper = shallow(<ErrorBoundary {...initialProps} />);
    expect(wrapper).toMatchSnapshot();
  });
})
