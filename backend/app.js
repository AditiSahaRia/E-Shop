const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

const errorMiddleware = require("./middleware/error");

app.use(express.json());
app.use(cookieParser());

// Route Imports

const product = require("./routes/product_routes");
const user = require("./routes/user_routes");
const order = require("./routes/order_routes");

app.use("/api/v1", product);
app.use("/api/v1", user);
app.use("/api/v1", order);

// Middleware for Error handling

app.use(errorMiddleware);

module.exports = app;