const express = require("express");
const {getAllProducts, createProduct, UpdateProduct, deleteProduct, 
    getProductDetails, createProductReview, getProductReviews, deleteReview} = require("../controller/products_control");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/authentication");
// const { create } = require("../models/productmodel");

const router = express.Router();

router.route("/products").get(getAllProducts);

// router.route("/admin/products").get(isAuthenticatedUser, authorizeRoles("admin"), getAdminProducts);

router
    .route("/admin/product/new")
    .post(isAuthenticatedUser, authorizeRoles("admin"), createProduct);

router
    .route("/admin/product/:id")
    .put(isAuthenticatedUser, authorizeRoles("admin"), UpdateProduct)
    .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteProduct)

router.route("/product/:id").get(getProductDetails);

router.route("/review").put(isAuthenticatedUser, createProductReview);

router
  .route("/reviews")
  .get(getProductReviews)
  .delete(isAuthenticatedUser, deleteReview);

module.exports = router;
