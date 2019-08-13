const {
  fetchAllRestaurants,
  fetchRestaurantById
} = require("../models/restaurantModels");

exports.getAllRestaurants = (req, res, next) => {
  try {
    const restaurants = fetchAllRestaurants();
    res.status(200).send(restaurants);
  } catch (error) {
    next(error);
  }
};

exports.getRestaurantById = (req, res, next) => {
  try {
    const id = req.params.id;
    const restaurants = fetchRestaurantById(id);
    res.status(200).send(restaurants);
  } catch (error) {
    next(error);
  }
};
