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
      ? res.status(204).send(selectedProduct)
      : res.status(404).json({ msg: "Product not found!" });
  } catch (error) {
    res.status(504).json({ msg: error.message });
  }
};

exports.getNike = async (req, res) => {
  try {
    const nikeProducts = await Product.find({ brand: "Nike" });
    nikeProducts
      ? res.status(201).json(nikeProducts)
      : res.status(401).json({ msg: "get Nike Products error" });
  } catch (error) {
    res.status(501).json({ msg: error.message });
  }
};

exports.getAdidas = async (req, res) => {
  try {
    const adidasProducts = await Product.find({ brand: "Adidas" });
    adidasProducts
      ? res.status(201).json(adidasProducts)
      : res.status(401).json({ msg: "get Adidas Products error" });
  } catch (error) {
    res.status(501).json({ msg: error.message });
  }
};

exports.getPuma = async (req, res) => {
  try {
    const pumaProducts = await Product.find({ brand: "Puma" });
    pumaProducts
      ? res.status(201).json(pumaProducts)
      : res.status(401).json({ msg: "get Puma Products error" });
  } catch (error) {
    res.status(501).json({ msg: error.message });
  }
};

exports.getMen = async (req, res) => {
  try {
    const menProducts = await Product.find({ category: "Men" });
    pumaProducts
      ? res.status(201).json(menProducts)
      : res.status(401).json({ msg: "get Men Products error" });
  } catch (error) {
    res.status(501).json({ msg: error.message });
  }
};
exports.getWomen = async (req, res) => {
  try {
    const womenProducts = await Product.find({ category: "Women" });
    pumaProducts
      ? res.status(201).json(womenProducts)
      : res.status(401).json({ msg: "get Women Products error" });
  } catch (error) {
    res.status(501).json({ msg: error.message });
  }
};
