const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const favSchema = new Schema({
  favItems: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,

        ref: "product",
      },
    },
  ],
});

module.exports = mongoose.model("Fav", favSchema);
