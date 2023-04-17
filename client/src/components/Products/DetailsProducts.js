import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import "./Products.css";
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";
import productReducer from "../../redux/reducers/productReducer";
import { addToCart } from "../../redux/actions/actionCart";
const DetailsProducts = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.productReducer);
  const params = useParams();
  const prod = products.filter((el) => el._id === params.id);
  const produit = prod[0];
  console.log(products);
  console.log(params);
  console.log(produit);
  return (
    <div className="detailPage">
      <img className="imgDetails" src={produit.cover.front} alt="" />
      <img className="imgDetails" src={produit.cover.back} alt="" />
      <div className="detailDesc">
        <h1 className="detailName">{produit.productName}</h1>
        <h3 className="detailCat">{produit.category}</h3>
        <h6 className="detailPrice">{produit.price}D.T</h6>
        <p className="detailSize">Select size:</p>
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
          <button
            className="detailCart"
            onClick={() => dispatch(addToCart(produit._id, 1))}
          >
            Add to <AiOutlineShoppingCart />
          </button>
          <button className="detailLike">
            Favourite <AiOutlineHeart />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailsProducts;
