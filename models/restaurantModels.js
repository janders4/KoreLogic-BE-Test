const restaurantData = require("../cafe.json");

exports.fetchAllRestaurants = () => {
  return restaurantData;
};

exports.fetchRestaurantById = id => {
  const restaurant = restaurantData.filter(restaurant => {
    return restaurant.name === id;
  });
  return restaurant;
};
