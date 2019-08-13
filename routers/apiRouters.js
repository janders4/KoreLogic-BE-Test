const express = require("express");
const { restaurantsRouter } = require("./restaurantRouters");
const apiRouter = express.Router();

apiRouter.use("/restaurants", restaurantsRouter);

module.exports = { apiRouter };
