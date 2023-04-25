import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getKidsProd, getWomenProd } from "../../redux/actions/actionProducts";
import productReducer from "../../redux/reducers/productReducer";
import { Navigate } from "react-router";
import userReducer from "../../redux/reducers/userReducer";
import ProductCard from "../Products/ProductCard";
import { Spinner } from "react-bootstrap";
import AddProduct from "../Admin/AddProduct";
import "../Products/Products.css";

const KidsProd = () => {
  const dispatch = useDispatch();
  const { loading, product1 } = useSelector((state) => state.productReducer);
  const { users, isAuth } = useSelector((state) => state.userReducer);
  useEffect(() => {
    dispatch(getKidsProd());
    console.log(product1);
  }, []);
  return (
    <div>
      {loading ? (
        <Spinner animation="border" variant="primary" />
      ) : isAuth ? (
        <div className="proList">
          {product1.map((el) => (
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

export default KidsProd;
