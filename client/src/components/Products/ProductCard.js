import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
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
import { addToFav } from "../../redux/actions/actionFav";

const ProductCard = ({ product }) => {
  const { users } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  return (
    <div>
      <Card className="proCard">
        {users.userRole === "admin" ? (
          <button
            className="deleteButton"
            onClick={() => dispatch(deleteProduct(product._id))}
          >
            <TiDeleteOutline className="del" />
          </button>
        ) : null}
        <Link
          to={`/product/allProducts/Details/${product._id}`}
          style={{
            textDecoration: "none",
          }}
        >
          <Card.Img
            className="proPic"
            variant="top"
            src={product.cover.front}
          />
        </Link>
        <Card.Body className="proBody">
          <Link
            to={`/product/allProducts/Details/${product._id}`}
            style={{
              textDecoration: "none",
              color: "black",
            }}
          >
            <Card.Title className="proName">{product.productName}</Card.Title>
          </Link>
          <Card.Text className="brand">{product.brand}</Card.Text>
          <Card.Text className="star">
            <ProductRating rating={product.rating} />
            <StarRating product={product} />
          </Card.Text>

          <div className="buttDiv">
            <Card.Text className="brand">{product.price} TND</Card.Text>

            <button
              className="likebutton"
              variant="primary"
              onClick={() => dispatch(addToFav(product._id))}
            >
              <AiOutlineHeart />
            </button>
            <button
              className="probutton"
              variant="primary"
              onClick={() => dispatch(addToCart(product._id, 1))}
            >
              <AiOutlineShoppingCart />
            </button>
            {users.userRole === "admin" ? (
              <EditProduct product={product} />
            ) : null}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductCard;
