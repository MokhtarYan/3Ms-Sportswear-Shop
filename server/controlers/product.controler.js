const Product = require("../model/Product");

exports.addProduct = async (req, res) => {
  const {
    brand,
    productName,
    cover,
    category,
    color,
    price,
    rating,
    size,
    avQuantity,
  } = req.body;
  const existProduct = await Product.findOne({ productName });
  if (existProduct) {
    res.status(409).json({ msg: "Product already exists" });
  } else {
    try {
      const newProduct = new Product({
        brand,
        productName,
        cover,
        category,
        color,
        price,
        rating,
        size,
        avQuantity,
      });
      await newProduct.save();

      newProduct
        ? res.status(200).json(newProduct)
        : res
            .status(401)
            .json({ msg: "Check the product's informations entered!" });
    } catch (error) {
      res.status(501).json({ msg: error.message });
    }
  }
};

exports.getAllProducts = async (req, res) => {
  try {
    const allProducts = await Product.find();
    allProducts
      ? res.status(201).json(allProducts)
      : res.status(401).json({ msg: "getAllProducts error" });
  } catch (error) {
    res.status(501).json({ msg: error.message });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params._id,
      { ...req.body },
      { new: true }
    );
    res.status(204).send(updatedProduct);
  } catch (error) {
    res.status(504).json({ msg: error.message });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params._id);
    res.status(204).send("The product is deleted successfully");
  } catch (error) {
    res.status(504).json({ msg: error.message });
  }
};

exports.getProduct = async (req, res) => {
  try {
    const selectedProduct = await Product.findById(req.params._id);
    selectedProduct
      ? res.status(201).send(selectedProduct)
      : res.status(404).json({ msg: "Product not found!" });
  } catch (error) {
    res.status(504).json({ msg: error.message });
  }
};

exports.getMen = async (req, res) => {
  try {
    const menProducts = await Product.find({ category: "Men" });
    menProducts
      ? res.status(201).json(menProducts)
      : res.status(401).json({ msg: "get Men Products error" });
  } catch (error) {
    res.status(501).json({ msg: error.message });
  }
};
exports.getWomen = async (req, res) => {
  try {
    const womenProducts = await Product.find({ category: "Women" });
    womenProducts
      ? res.status(201).json(womenProducts)
      : res.status(401).json({ msg: "get Women Products error" });
  } catch (error) {
    res.status(501).json({ msg: error.message });
  }
};

exports.getKids = async (req, res) => {
  try {
    const kidsProducts = await Product.find({ category: "Kids" });
    kidsProducts
      ? res.status(201).json(kidsProducts)
      : res.status(401).json({ msg: "get Kids Products error" });
  } catch (error) {
    res.status(501).json({ msg: error.message });
  }
};
