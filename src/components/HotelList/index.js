// third party libraries
import React, { useEffect, useState } from 'react';

// components
import HotelCard from '../HotelCard'

// styles
import './HotelList.scss'

const API_URL = 'http://fake-hotel-api.herokuapp.com/api/hotels'

const HotelList = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}?count=10`)
      .then((response) => response.json())
      .then((response) => {
        setHotels(response)
        console.log(response)
      })
      .catch((error) => {
        throw error
      })
  }, [])


  return (
    <div className="hotellist-container">
      {
        hotels && hotels.map((data) => {
          const extractStartDate = new Date(data.date_start).toDateString()
          const extractEndDate = new Date(data.date_end).toDateString()
          return (
            <HotelCard
              hotelId={data.id}
              key={data.id}
              image={data.images[0]}
              name={data.name}
              description={data.description}
              price={data.price}
              star={data.stars}
              city={data.city}
              country={data.country}
              start={extractStartDate}
              end={extractEndDate}
            />
          )
        })
      }
    </div>
  )
}

export default HotelList;
