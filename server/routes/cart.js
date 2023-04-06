const express = require("express");
const { createCart } = require("../controlers/cart.controler");

router = express.Router();

router.post("/addItem", createCart);

module.exports = router;
