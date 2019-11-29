
const API_URL_HOTELS = 'http://fake-hotel-api.herokuapp.com/api/hotels'
const API_URL_REVIEWS = 'http://fake-hotel-api.herokuapp.com/api/reviews'


const fetchHotels = async (minStars, maxPrice) => {
  const hotels = await (await fetch(`${API_URL_HOTELS}?count=10&min_stars=${minStars}&max_price=${maxPrice}&no_error=1`)).json()
  return hotels
}

const fetchReview = async (id) => {
  const reviews = await (await fetch(`${API_URL_REVIEWS}?hotel_id=${id}`)).json()
  return reviews
}

export default {
  fetchHotels,
  fetchReview,
}
