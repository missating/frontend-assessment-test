import React, { useState } from 'react'

import './HotelCard.scss'

import StarRating from '../StarRating'

const HotelCard = ({
  image, name, description, price, star,
}) => {
  const [retried, setRetried] = useState(false);
  const handleImgError = (event) => {
    if (!retried) {
      setRetried(true)
      const img = event.target;
      img.src = 'https://res.cloudinary.com/dxayftnxb/image/upload/v1574791542/download_dtr4in.png'
    }
  }
  return (
    <article className="hotelcard-container">
      <div className="hotelcard-container__image">
        <img onError={handleImgError} src={image} alt={name} />
      </div>
      <div className="hotelcard-container__details">
        <div className="hotelcard-container__details-one">
          <h2>{name}</h2>
          <p>{description}</p>
          <StarRating totalStars={star} />
        </div>
        <div className="hotelcard-container__details-two">
          <span>
            <sup>&euro;</sup>
            {price}
          </span>
          <button type="button">Review</button>
        </div>
      </div>
    </article>
  )
}


export default HotelCard
