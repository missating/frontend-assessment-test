import React, { useEffect, useState } from 'react';
import HotelCard from '../HotelCard'

import './HotelList.scss'

const API_URL = 'http://fake-hotel-api.herokuapp.com/api/hotels'

const HotelList = () => {
  const [hotels, setHotels] = useState({});

  useEffect(() => {
    fetch(`${API_URL}?count=10`)
      .then((response) => response.json())
      .then((response) => {
        setHotels(response)
        console.log(response)
      })
      .catch((error) => console.log(error))
  }, [])


  return (
    <div className="hotellist-container">
      {
        Object.entries(hotels).map(([key, value]) => (
          <HotelCard
            key={value.id}
            image={value.images[0]}
            name={value.name}
            description={value.description}
            price={value.price}
            star={value.stars}
          />
        ))
      }
    </div>
  )
}

export default HotelList;
