const express = require("express");
const {
  getAllRestaurants,
  getRestaurantById
} = require("../controllers/restaurantController");
const restaurantsRouter = express.Router();

restaurantsRouter.get("/", getAllRestaurants);
restaurantsRouter.get("/:id", getRestaurantById);

module.exports = { restaurantsRouter };
