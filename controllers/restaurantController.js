const { fetchAllRestaurants } = require("../models/restaurantModels");

exports.getAllRestaurants = (req, res, next) => {
  try {
    const restaurants = fetchAllRestaurants();
    res.status(200).send(restaurants);
  } catch (error) {
    next(error);
  }
};
