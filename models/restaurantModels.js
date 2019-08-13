const restaurantData = require("../cafe.json");

exports.fetchAllRestaurants = params => {
  if (!params) return restaurantData;
  const restraunts = restaurantData.filter(item => {
    for (let key in params) {
      if (item[key] != JSON.parse(params[key])) return false;
    }
    return true;
  });
  if (restraunts.length === 0) throw new Error("No restaurants found");
  return restraunts;
};

exports.fetchRestaurantById = id => {
  const restaurant = restaurantData.filter(restaurant => {
    return restaurant.name === id;
  });
  if (result.length === 0) throw new Error("Restaurant not found");
  return restaurant;
};
