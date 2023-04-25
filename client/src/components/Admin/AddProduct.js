import React, { useState } from "react";
import { MdAddBox } from "react-icons/md";
import "../Products/Products.css";
import { useDispatch } from "react-redux";
import { Button, Card, Modal } from "react-bootstrap";
import { createProduct } from "../../redux/actions/actionProducts";
const AddProduct = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [brand, setBrand] = useState();
  const [productName, setProductName] = useState();

  const [category, setCategory] = useState();
  const [price, setPrice] = useState();
  const [color, setColor] = useState();
  const [rating, setRating] = useState();
  const [avQuantity, setAvQuantity] = useState();
  const [front, setFront] = useState();
  const [back, setBack] = useState();
  const [xs, setXs] = useState();
  const [s, setS] = useState();
  const [xxl, setXxl] = useState();
  const [m, setM] = useState();
  const [l, setL] = useState();
  const [xl, setXl] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      brand: brand,
      cover: { front: front, back: back },
      productName: productName,
      category: category,
      price: price,
      color: color,
      rating: rating,
      size: { XS: xs, S: s, M: m, L: l, XL: xl, XXL: xxl },
      avQuantity: avQuantity,
    };

    brand && productName && category && price && color && rating && avQuantity
      ? dispatch(createProduct(newProduct))
      : alert("Don't leave any input empty!");
  };
  return (
    <div>
      <Card className="addCard">
        <button className="addButton" onClick={handleShow}>
          <MdAddBox />
        </button>
      </Card>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
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
              <label htmlFor="">Cover:</label>
              <input
                type="text"
                value={front}
                placeholder="Front"
                onChange={(e) => setFront(e.target.value)}
              />
              <input
                type="text"
                value={back}
                placeholder="Back"
                onChange={(e) => setBack(e.target.value)}
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
            <div>
              <label htmlFor="">Size:</label>
              <input
                type="text"
                placeholder="XS"
                value={xs}
                onChange={(e) => setXs(e.target.value)}
              />
              <input
                type="text"
                placeholder="S"
                value={s}
                onChange={(e) => setS(e.target.value)}
              />
              <input
                type="text"
                placeholder="M"
                value={m}
                onChange={(e) => setM(e.target.value)}
              />
              <input
                type="text"
                placeholder="L"
                value={l}
                onChange={(e) => setL(e.target.value)}
              />
              <input
                type="text"
                placeholder="XL"
                value={xl}
                onChange={(e) => setXl(e.target.value)}
              />
              <input
                type="text"
                placeholder="XXL"
                value={xxl}
                onChange={(e) => setXxl(e.target.value)}
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
            Add Product
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddProduct;
