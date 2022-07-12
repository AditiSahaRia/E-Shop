const express = require("express");
const app = express();

const errorMiddleware = require("./middleware/error");

app.use(express.json());

// Route Imports

const product = require("./routes/product_routes");
const user = require("./routes/user_routes");

app.use("/api/v1", product);
app.use("/api/v1", user);

// Middleware for Error handling

app.use(errorMiddleware);

module.exports = app;