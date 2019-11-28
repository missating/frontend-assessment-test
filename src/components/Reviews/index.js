// thired party libraries
import React, { memo } from 'react'
import PropTypes from 'prop-types';

// styles
import './Reviews.scss'

const Reviews = ({ name, comment, positive }) => (
  <article className="reviews-container">
    <div className="reviews-container__content">
      <h3>{name}</h3>
      <p>{comment}</p>
      <span>
        Positive:
        {' '}
        {String(positive)}
      </span>
    </div>
  </article>
)

export default memo(Reviews);

Reviews.propTypes = {
  name: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  positive: PropTypes.bool.isRequired,
}
