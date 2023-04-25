import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateProduct } from "../../redux/actions/actionProducts";
import { Button, Modal } from "react-bootstrap";

const EditProduct = ({ product }) => {
  const [brand, setBrand] = useState(product.brand);
  const [productName, setProductName] = useState(product.productName);

  const [category, setCategory] = useState(product.category);
  const [price, setPrice] = useState(product.price);
  const [color, setColor] = useState(product.color);
  const [rating, setRating] = useState(product.rating);
  const [avQuantity, setAvQuantity] = useState(product.avQuantity);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedProduct = {
      _id: product._id,
      brand: brand,
      cover: product.cover,
      productName: productName,
      category: category,
      price: price,
      color: color,
      rating: rating,
      size: product.size,
      avQuantity: avQuantity,
    };

    brand && productName && category && price && color && rating && avQuantity
      ? dispatch(updateProduct(updatedProduct))
      : alert("Don't leave any input empty!");
  };
  return (
    <div>
      {" "}
      <Button variant="primary" onClick={handleShow}>
        Update
      </Button>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Update Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form
            action=""
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <div className="field">
              <label htmlFor="">Brand:</label>
              <input
                type="text"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                className="editInput"
              />
            </div>
            <div className="field">
              <label htmlFor="">Product's Name :</label>
              <input
                type="text"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                className="editInput"
              />
            </div>
            <div className="field">
              <label htmlFor="">Category:</label>
              <input
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="editInput"
              />
            </div>
            <div className="field">
              <label htmlFor="">Price:</label>
              <input
                type="text"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="editInput"
              />
            </div>
            <div className="field">
              <label htmlFor="">Color:</label>
              <input
                type="text"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                className="editInput"
              />
            </div>
            <div className="field">
              <label htmlFor=""> Rating</label>
              <input
                type="text"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                className="editInput"
              />
            </div>
            <div className="field">
              <label htmlFor="">Available Quantity</label>
              <input
                type="text"
                value={avQuantity}
                onChange={(e) => setAvQuantity(e.target.value)}
                className="editInput"
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={(handleClose, handleSubmit)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EditProduct;
