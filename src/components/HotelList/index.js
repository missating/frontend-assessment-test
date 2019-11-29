// third party libraries
import React, { useEffect, useState } from 'react';

// components
import HotelCard from '../HotelCard'

// styles
import './HotelList.scss'

// others
import api from '../../api';

const HotelList = () => {
  const [hotels, setHotels] = useState([]);
  const [minStars, setMinStars] = useState(3)
  const [maxPrice, setMaxPrice] = useState(100000)
  const { fetchHotels } = api

  useEffect(() => {
    fetchHotels(minStars, maxPrice).then((allHotels) => {
      setHotels(allHotels)
    }).catch((error) => {
      throw error
    })
  }, [minStars, maxPrice])


  return (
    <div className="hotellist-container">
      <div className="hotellist-container__content">
        <select
          className="hotellist-container__content-select"
          name="select-box"
          value={minStars}
          onChange={(event) => setMinStars(event.target.value)}
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
        <input
          className="hotellist-container__content-input"
          placeholder="Filter By Price"
          type="number"
          onChange={(event) => setMaxPrice(event.target.value)}
        />
      </div>
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
