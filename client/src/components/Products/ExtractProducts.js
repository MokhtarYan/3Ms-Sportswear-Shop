import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, getWomenProd } from "../../redux/actions/actionProducts";
import productReducer from "../../redux/reducers/productReducer";
import Spinner from "react-bootstrap/esm/Spinner";
import ProductCard from "./ProductCard";
import "./Products.css";

import { Navigate } from "react-router";

const ExtractProducts = () => {
  const { products, loading } = useSelector((state) => state.productReducer);
  const { isAuth } = useSelector((state) => state.userReducer);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
    console.log(products);
  }, []);

  return (
    <div style={{ dispaly: "flex", justifyContent: "center" }}>
      {loading ? (
        <Spinner animation="border" variant="primary" />
      ) : isAuth ? (
        <div className="proList">
          {products.map((el) => (
            <div key={el._id}>
              <ProductCard product={el} />
            </div>
          ))}
        </div>
      ) : (
        <Navigate to="/signin"></Navigate>
      )}
    </div>
  );
};

export default ExtractProducts;
