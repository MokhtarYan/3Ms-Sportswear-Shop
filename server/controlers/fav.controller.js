const fav = require("../model/fav");

exports.createFav = async (req, res) => {
  const { favItems } = req.body;
  try {
    const newFav = new fav({
      favItems,
    });

    await newFav.save();
    newFav
      ? res.status(200).json(newFav)
      : res.status(401).json({ msg: "add favourite product to cart error" });
  } catch (error) {
    res.status(501).json({ msg: error.message });
  }
};
