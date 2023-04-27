const express = require("express");
const { createFav } = require("../controlers/fav.controller");

router = express.Router();
router.post("/addFav", createFav);

module.exports = router;
