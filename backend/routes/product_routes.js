const express = require("express");
const {getAllProducts, createProduct, UpdateProduct, deleteProduct, getProductDetails} = require("../controller/products_control");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/authentication");
// const { create } = require("../models/productmodel");

const router = express.Router();

router.route("/products").get(getAllProducts);

router
    .route("/product/new")
    .post(isAuthenticatedUser, authorizeRoles("admin"), createProduct);

router
    .route("/product/:id")
    .put(isAuthenticatedUser, authorizeRoles("admin"), UpdateProduct)
    .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteProduct)

router.route("/product/:id").get(getProductDetails);

module.exports = router;
