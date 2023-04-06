const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartSchema = new Schema({
  cartItems: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,

        ref: "product",
      },

      quantity: { type: Number, default: 1 },
      price: Number,
    },
  ],

  totalPrice: {
    type: Number,
    required: true,
    default: 0.0,
  },
});

module.exports = mongoose.model("Cart", cartSchema);
