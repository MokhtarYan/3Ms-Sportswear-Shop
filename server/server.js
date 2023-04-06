const express = require("express");
const connectDB = require("./config/connectDB");
const user = require("./routes/user");
const product = require("./routes/product");
const cart = require("./routes/cart");
const upload = require("./routes/upload");
const config = require("config");
const Product = require("./model/Product");
const port = config.get("PORT");
const app = express();

app.use(express.json());
app.use("/user", user);
app.use("/product", product);
app.use("/cart", cart);
app.use("/upload", upload);
connectDB();
const PORT = port || 5000;
app.listen(PORT, (err) =>
  err ? console.error(err) : console.log(`Server is running on ${PORT}`)
);
