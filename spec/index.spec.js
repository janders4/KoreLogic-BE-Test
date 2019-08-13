const chai = require("chai");
const expect = chai.expect;
const { fetchAllRestaurants } = require("../models/restaurantModels");

describe("Korelogic BackEnd Tests", () => {
  describe("/restaurants", () => {
    it("returns an array if no query provided", () => {
      const restaurants = fetchAllRestaurants();
      expect(restaurants.length > 0).to.equal(true);
    });
  });
  describe("/restaurants?query...", () => {
    it("throws an error if bad query passed", () => {
      expect(() => fetchAllRestaurants({ roofTerrace: true })).to.throw(
        "No restaurants found"
      );
    });
    it("returns an array of objects when passed a vegan option query", () => {
      const restaurants = fetchAllRestaurants({ "vegan-options": true });
      expect(restaurants.length).to.equal(5);
    });
    it("returns an array of objects when passed a dog friendly query", () => {
      const restaurants = fetchAllRestaurants({ "dog-friendly": true });
      expect(restaurants.length).to.equal(3);
    });
    it("returns an array of objects accepting multiple queries", () => {
      const restaurants = fetchAllRestaurants({
        "dog-friendly": false,
        "vegan-options": true
      });
      expect(restaurants.length).to.equal(2);
    });
  });
});
