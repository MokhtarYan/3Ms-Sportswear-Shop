import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import "./Products.css";
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";
import productReducer from "../../redux/reducers/productReducer";
import { addToCart } from "../../redux/actions/actionCart";
import ZoomImage from "./ZoomImage";
import { addToFav } from "../../redux/actions/actionFav";
import userReducer from "../../redux/reducers/userReducer";
const DetailsProducts = ({ lan }) => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.productReducer);
  const { users } = useSelector((state) => state.userReducer);
  const params = useParams();
  const prod = products.filter((el) => el._id === params.id);
  const produit = prod[0];

  return (
    <div className="detailPage">
      <ZoomImage image={produit.cover.front} />
      <ZoomImage image={produit.cover.back} />
      {/* <img className="imgDetails" src={produit.cover.front} alt="" />
      <img className="imgDetails" src={produit.cover.back} alt="" /> */}
      <div className="detailDesc">
        <h1 className="detailName">{produit.productName}</h1>
        <h3 className="detailCat">{produit.category}</h3>
        <p className="detailPrice">{produit.price} $</p>
        <p className="detailSize">
          {lan === "FR" ? "Choisissez le taille:" : "Select size:"}
        </p>
        <div className="buttons">
          <button className={produit.size.XS > 0 ? "available" : "outOfStocks"}>
            XS
          </button>
          <button className={produit.size.S > 0 ? "available" : "outOfStocks"}>
            S
          </button>
          <button className={produit.size.M > 0 ? "available" : "outOfStocks"}>
            M
          </button>
          <button className={produit.size.L > 0 ? "available" : "outOfStocks"}>
            L
          </button>
          <button className={produit.size.XL > 0 ? "available" : "outOfStocks"}>
            XL
          </button>
          <button
            className={produit.size.XXL > 0 ? "available" : "outOfStocks"}
          >
            XXL
          </button>
          {users.userRole === "user" ? (
            <div>
              <button
                className="detailCart"
                onClick={() => dispatch(addToCart(produit._id, 1))}
              >
                <AiOutlineShoppingCart />
              </button>
              <button
                className="detailLike"
                onClick={() => dispatch(addToFav(produit._id))}
              >
                <AiOutlineHeart />
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default DetailsProducts;
