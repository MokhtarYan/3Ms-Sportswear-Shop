import React, { useEffect, useState } from "react";
import { Table } from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import cartReducer from "../../redux/reducers/cartReducer";
import ItemQty from "./ItemQty";
import { FiDelete } from "react-icons/fi";
import { AiFillDelete } from "react-icons/ai";
import { removeFromCart } from "../../redux/actions/actionCart";
import "./Cart.css";
import { Link } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import userReducer from "../../redux/reducers/userReducer";

const CartItems = ({ lan }) => {
  const { users } = useSelector((state) => state.userReducer);
  const [show, setShow] = useState(false);
  const [fullName, setFullName] = useState(users.fullName);
  const [phone, setPhone] = useState();
  const [adresse, setAdresse] = useState();
  const [gov, setGov] = useState();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [total, setTotal] = useState();

  const { cartItems } = useSelector((state) => state.cartReducer);
  console.log(cartItems);
  const calculateAmount = (quantity, price) => {
    const quantityNumber = parseFloat(quantity) || 1;
    const priceNumber = parseFloat(price) || 0;
    let amount = 0;

    if (quantityNumber && priceNumber) {
      amount = quantityNumber * priceNumber;
    }
    return amount.toFixed(2);
  };

  useEffect(() => {
    let total = 0;

    cartItems.forEach((el) => {
      total += parseFloat(calculateAmount(el.qty, el.product.price));
    });

    setTotal(total);
  }, [total, cartItems]);

  const dispatch = useDispatch();
  return (
    <div
      className="Carrt"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Table
        css={{
          height: "auto",

          width: "1000px",
        }}
      >
        <Table.Header>
          <Table.Column className=" title">
            {lan === "FR" ? "L'image du produit" : "Product's Image"}
          </Table.Column>
          <Table.Column className=" title">
            {lan === "FR" ? "Produit" : "Product"}
          </Table.Column>
          <Table.Column className=" title">
            {lan === "FR" ? "Prix" : "Price"}
          </Table.Column>
          <Table.Column className=" title">Available</Table.Column>
          <Table.Column className=" title">
            {lan === "FR" ? "Quantité" : "Quantity"}
          </Table.Column>
          <Table.Column className=" title">
            {lan === "FR" ? "Suprimer" : "Delete"}
          </Table.Column>
        </Table.Header>

        <Table.Body>
          {cartItems.map((el, index) => (
            <Table.Row key={index} className="desc">
              <Table.Cell>
                <img
                  className="imageCart"
                  src={el.product.cover.front}
                  alt=""
                />
              </Table.Cell>
              <Table.Cell className="desc">{el.product.productName}</Table.Cell>
              <Table.Cell className="desc">{el.product.price} $</Table.Cell>
              <Table.Cell className="desc">{el.product.avQuantity}</Table.Cell>
              <Table.Cell>
                {" "}
                <ItemQty el={el} />
              </Table.Cell>
              <Table.Cell>
                {" "}
                <AiFillDelete
                  onClick={() => dispatch(removeFromCart(el.product))}
                >
                  <FiDelete />
                </AiFillDelete>{" "}
              </Table.Cell>
            </Table.Row>
          ))}
          <Table.Row>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell>Total</Table.Cell>
            <Table.Cell>{total} $</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>

      <Button
        className="purButton"
        variant="outline-secondary"
        onClick={handleShow}
      >
        Confirm Purchase
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>User's informations:</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ display: "flex", flexDirection: "column" }}>
          <div>
            <label htmlFor="">Full Name:</label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="">Email</label>
            <input type="text" value={users.email} readOnly />
          </div>
          <div>
            <label htmlFor="">Phone</label>

            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="">Gouvernorat</label>
            <select name="" id="">
              <option value="Ariana">Ariana</option>
              <option value="Béja">Béja</option>
              <option value="Ben Arous">Ben Arous</option>
              <option value="Bizerte">Bizerte</option>
              <option value="Gabès">Gabès</option>
              <option value="Gafsa">Gafsa</option>
              <option value="Jendouba">Jendouba</option>
              <option value="Kairouan">Kairouan</option>
              <option value="Kasserine">Kasserine</option>
              <option value="Kébili">Kébili</option>
              <option value="Le Kef">Le Kef</option>
              <option value="Mahdia">Mahdia</option>
              <option value="La Manouba">La Manouba</option>
              <option value="Médenine">Médenine</option>
              <option value="Monastir">Monastir</option>
              <option value="Nabeul">Nabeul</option>
              <option value="Sfax">Sfax</option>
              <option value="Sidi Bouzid">Sidi Bouzid</option>
              <option value="Siliana">Siliana</option>
              <option value="Sousse">Sousse</option>
              <option value="Tataouine">Tataouine</option>
              <option value="Tozeur">Tozeur</option>
              <option value="Tunis">Tunis</option>
              <option value="Zaghouan">Zaghouan</option>
            </select>
          </div>
          <div>
            <label htmlFor="">Adresse</label>
            <input
              type="text"
              value={adresse}
              onChange={(e) => setAdresse(e.target.value)}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CartItems;
