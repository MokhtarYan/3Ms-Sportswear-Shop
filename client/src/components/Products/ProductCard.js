import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./Products.css";
import { TiDeleteOutline } from "react-icons/ti";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import userReducer from "../../redux/reducers/userReducer";
import { addToCart } from "../../redux/actions/actionCart";
import { deleteProduct } from "../../redux/actions/actionProducts";
import EditProduct from "../Admin/EditProduct";
import StarRating from "./StarRating";
import ProductRating from "./ProductRating";

const ProductCard = ({ product }) => {
  const { users } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  return (
    <div>
      <Card className="proCard" style={{ width: "250px", height: "500px" }}>
        {users.userRole === "admin" ? (
          <Button
            className="deleteButton"
            onClick={() => dispatch(deleteProduct(product._id))}
          >
            <TiDeleteOutline className="del" />
          </Button>
        ) : null}
        <Card.Img className="proPic" variant="top" src={product.cover.front} />
        <Card.Body className="proBody">
          <Card.Title className="proName">{product.productName}</Card.Title>
          <Card.Text className="desc">{product.brand}</Card.Text>
          <Card.Text className="star">
            <ProductRating rating={product.rating} />
            <StarRating product={product} />
          </Card.Text>

          <Card.Text className="desc">{product.price} TND</Card.Text>
          <div className="buttDiv">
            <Button className="probutton" variant="primary">
              <Link
                to={`/product/allProducts/Details/${product._id}`}
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
              >
                Details
              </Link>
            </Button>
            <Button
              className="probutton"
              variant="primary"
              onClick={() => dispatch(addToCart(product._id, 1))}
            >
              <AiOutlineShoppingCart />
            </Button>
            {users.userRole == "admin" ? (
              <EditProduct product={product} />
            ) : null}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductCard;
