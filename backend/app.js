const express = require("express");
const app = express();

const errorMiddleware = require("./middleware/error");

app.use(express.json());

// Route Imports

const product = require("./routes/route_of_products");

app.use("/api/v1", product);

// Middleware

app.use(errorMiddleware);

module.exports = app;