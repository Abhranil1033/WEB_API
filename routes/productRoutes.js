const express = require("express");

const {getAllProducts,createProduct,updateProduct,deleteProduct} = require("../controller/productController")

const router = express.Router();

router.route("/products").get(getAllProducts);
router.route("/products").post(createProduct);
router.route("/products/:id").put(updateProduct).delete(deleteProduct);

module.exports = router;