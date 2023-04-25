import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Spinner } from "react-bootstrap";
import ProductCard from "../Products/ProductCard";
import AddProduct from "../Admin/AddProduct";
import productReducer from "../../redux/reducers/productReducer";
import { Navigate } from "react-router";
import userReducer from "../../redux/reducers/userReducer";
import "../Products/Products.css";
import { getMenProd } from "../../redux/actions/actionProducts";

const MenProducts = () => {
  const dispatch = useDispatch();
  const { loading, Mproduct } = useSelector((state) => state.productReducer);
  const { users, isAuth } = useSelector((state) => state.userReducer);
  useEffect(() => {
    dispatch(getMenProd());
    console.log(Mproduct);
  }, []);
  return (
    <div>
      {loading ? (
        <Spinner animation="border" variant="primary" />
      ) : isAuth ? (
        <div className="proList">
          {Mproduct.map((el) => (
            <div key={el._id}>
              <ProductCard product={el} />
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

export default MenProducts;
