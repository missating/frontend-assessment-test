import React from 'react'

import './StarRating.scss'

const starRating = ({ totalStars }) => (
  <div className="starrating-container">
    {[...Array(totalStars)].map((number, index) => (
      <div className="starrating-container__star" key={index} />
    ))}
  </div>
)

export default starRating;
