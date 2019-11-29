// third party libraries
import React from 'react';
import { shallow } from 'enzyme';

// components
import Navbar from './components/Navbar';
import App from './App';

describe('The application', () => {
  it('mounts the navbar if the page is / page', () => {
    const location = {
      pathname: '/',
    };

    const wrapper = shallow(<App location={location} />);

    expect(wrapper.find(Navbar).length).toBe(1);
  });
});
