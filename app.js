const express = require("express");
const app = express();
const { apiRouter } = require("./routers/apiRouters");

app.use(express.json());
app.use("/api", apiRouter);
module.exports = app;
