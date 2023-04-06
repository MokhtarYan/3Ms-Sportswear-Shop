const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema({
  brand: String,
  productName: String,
  cover: { front: String, back: String },
  category: String,
  price: Number,
  color: Number,
  rating: Number,
  size: {
    XS: Number,
    S: Number,
    M: Number,
    L: Number,
    XL: Number,
    XXL: Number,
  },
  avQuantity: Number,
});

module.exports = mongoose.model("Product", productSchema);
