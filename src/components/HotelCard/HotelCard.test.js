// react library
import React from 'react';
import { shallow } from 'enzyme';

// components
import HotelCard from './index'

describe('HotelCard Component', () => {
  const initialProps = {
    image: 'exmaple.png',
    name: 'Best Hotel',
    description: 'Best hotel ever',
    price: 500,
    star: 4,
    hotelId: '12345',
    city: 'Lagos',
    country: 'Nigeria',
    start: 'Thu Nov 21 2019',
    end: 'Thu Jul 30 2020',
  }
  it('should be rendered properly', () => {
    // eslint-disable-next-line react/jsx-props-no-spreading
    const wrapper = shallow(<HotelCard {...initialProps} />);
    expect(wrapper.find('div').length).toEqual(5);
    expect(wrapper.find('article').length).toEqual(1)
    expect(wrapper).toMatchSnapshot();
  });
})
