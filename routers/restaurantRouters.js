const express = require("express");
const { getAllRestaurants } = require("../controllers/restaurantController");
const restaurantsRouter = express.Router();

restaurantsRouter.get("/", getAllRestaurants);

module.exports = { restaurantsRouter };
