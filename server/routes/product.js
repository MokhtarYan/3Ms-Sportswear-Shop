const {
  addProduct,
  getAllProducts,
  updateProduct,
  getMen,
  getWomen,
  deleteProduct,
  getProduct,
  getKids,
} = require("../controlers/product.controler");

const express = require("express");
const router = express.Router();

router.post("/addProduct", addProduct);
router.get("/allProducts", getAllProducts);
router.put("/updateProduct/:_id", updateProduct);
router.get("/getProduct/:_id", getProduct);
router.delete("/deleteProduct/:_id", deleteProduct);
router.get("/Kids", getKids);
router.get("/Men", getMen);
router.get("/Women", getWomen);
module.exports = router;
