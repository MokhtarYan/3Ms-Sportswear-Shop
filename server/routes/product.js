const {
  addProduct,
  getAllProducts,
  updateProduct,
  getNike,
  getAdidas,
  getPuma,
  getMen,
  getWomen,
  deleteProduct,
} = require("../controlers/product.controler");

const express = require("express");
const router = express.Router();

router.post("/addProduct", addProduct);
router.get("/allProducts", getAllProducts);
router.put("/updateProduct/:_id", updateProduct);
router.delete("/deleteProduct/:_id", deleteProduct);
router.get("/Nike", getNike);
router.get("/Adidas", getAdidas);
router.get("/Puma", getPuma);
router.get("/Men", getMen);
router.get("/Women", getWomen);
module.exports = router;
