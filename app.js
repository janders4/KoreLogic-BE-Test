const express = require("express");
const app = express();
const { apiRouter } = require("./routers/apiRouters");

app.use(express.json());
app.use("/api", apiRouter);
app.use((err, req, res, next) => {
  res.status(404).json({
    status: 404,
    error: err.message
  });
});
module.exports = app;
