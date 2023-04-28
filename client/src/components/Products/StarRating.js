import React, { useState } from "react";
import "./Products.css";
import { useDispatch, useSelector } from "react-redux";
import { updateProduct } from "../../redux/actions/actionProducts";
import { Button, Modal } from "react-bootstrap";
import productReducer from "../../redux/reducers/productReducer";
const StarRating = ({ product }) => {
  const [rate, setRate] = useState(0);
  const [hover, setHover] = useState(0);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedProduct = {
      _id: product._id,
      brand: product.brand,
      cover: product.cover,
      productName: product.productName,
      category: product.category,
      price: product.price,
      color: product.color,
      rating: (product.rating + rate) / 2,
      size: product.size,
      avQuantity: product.avQuantity,
    };
    dispatch(updateProduct(updatedProduct));
  };
  return (
    <div>
      <button className="RateButton" onClick={handleShow}>
        Rate!
      </button>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Rate product:</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {[...Array(5)].map((star, index) => {
            index += 1;
            return (
              <button
                type="button"
                key={index}
                className={index <= (hover || rate) ? "on" : "off"}
                onClick={() => setRate(index)}
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(rate)}
              >
                <span className="star">&#9733;</span>
              </button>
            );
          })}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={(handleClose, handleSubmit)}>
            Save Rating
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default StarRating;
