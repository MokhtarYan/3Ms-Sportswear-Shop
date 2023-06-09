import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/actions/actionProducts";
import productReducer from "../../redux/reducers/productReducer";
import Spinner from "react-bootstrap/esm/Spinner";
import ProductCard from "./ProductCard";
import "./Products.css";

import { Navigate } from "react-router";
import AddProduct from "../Admin/AddProduct";

const ExtractProducts = ({ search, lan }) => {
  const { products, loading } = useSelector((state) => state.productReducer);
  const { isAuth, users } = useSelector((state) => state.userReducer);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
    console.log(products);
  }, []);

  return (
    <div className="prodList">
      {loading ? (
        <Spinner animation="border" variant="primary" />
      ) : isAuth ? (
        <div className="proList">
          {products
            .filter((el) =>
              el.productName
                .toUpperCase()
                .trim()
                .includes(search.toUpperCase().trim())
            )
            .map((el) => (
              <div key={el._id}>
                <ProductCard product={el} lan={lan} />
              </div>
            ))}
          {users.userRole === "admin" ? <AddProduct /> : null}
        </div>
      ) : (
        <Navigate to="/signin"></Navigate>
      )}
    </div>
  );
};

export default ExtractProducts;
