// thired party libraries
import React from 'react'
import PropTypes from 'prop-types';

// styles
import './StarRating.scss'

const starRating = ({ totalStars }) => (
  <div className="starrating-container">
    {[...Array(totalStars)].map((number, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <div className="starrating-container__star" key={index} />
    ))}
  </div>
)

export default starRating;

starRating.propTypes = {
  totalStars: PropTypes.number.isRequired,
}
