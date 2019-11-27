import React from 'react'

import './Reviews.scss'

const Reviews = ({ name, comment, positive }) => (
  <article className="reviews-container">
    <div className="reviews-container__content">
      <h3>{name}</h3>
      <p>{comment}</p>
      <span>
        Positive:
        {' '}
        {positive}
      </span>
    </div>
  </article>
)

export default Reviews;
