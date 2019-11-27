import React, { useState, useEffect, memo } from 'react'
import StarRating from '../StarRating'
import Reviews from '../Reviews'

import './HotelCard.scss'

const API_URL = 'http://fake-hotel-api.herokuapp.com/api/reviews'

const HotelCard = ({
  image, name, description, price, star, hotelId, city, country, start, end,
}) => {
  const [retried, setRetried] = useState(false);
  const [reviews, setReviews] = useState([])
  const [showReview, setShowReview] = useState(false)
  const [id, setId] = useState(0)

  const handleImgError = (event) => {
    if (!retried) {
      setRetried(true)
      const img = event.target;
      img.src = 'https://res.cloudinary.com/dxayftnxb/image/upload/v1574791542/download_dtr4in.png'
    }
  }

  const toggleReview = () => {
    setShowReview(!showReview)
  }

  useEffect(() => {
    fetch(`${API_URL}?hotel_id=${id}`)
      .then((response) => response.json())
      .then((response) => {
        setReviews(response)
      })
      .catch((error) => {
        throw error
      })
  }, [id])

  return (
    <>
      <article className="hotelcard-container">
        <div className="hotelcard-container__image">
          <img onError={handleImgError} src={image} alt={name} />
        </div>
        <div className="hotelcard-container__details">
          <div className="hotelcard-container__details-one">
            <h2>{name}</h2>
            <p className="hotelcard-container__details-location">
              {city}
              ,
              {' '}
              {' '}
              {country}
            </p>
            <p className="hotelcard-container__details-description">{description}</p>
            <p className="hotelcard-container__details-date">
              Available from
              {' '}
              {start}
              {' '}
              -
              {' '}
              {end}
            </p>
            <StarRating totalStars={star} />
          </div>
          <div className="hotelcard-container__details-two">
            <span>
              <sup>&euro;</sup>
              {price}
            </span>
            <button type="button" className="hotelcard-container__button" onClick={() => { setId(hotelId); toggleReview(); }}>
              Reviews
            </button>
          </div>
        </div>
      </article>
      <div className={showReview ? 'hotelcard-reviews-container' : ''}>
        {
          reviews && reviews.length === 0 && (
            showReview ? (
              <p className="hotelcard-reviews-container__text">
                No Reviews yet
              </p>
            ) : null

          )
        }
        {reviews && reviews.map((data, index) => (
          showReview
            ? (
              <Reviews
                key={data.index}
                name={data.name}
                comment={data.comment}
                positive={data.positive}
              />
            )
            : null
        ))}
      </div>
    </>
  )
}


export default memo(HotelCard)
