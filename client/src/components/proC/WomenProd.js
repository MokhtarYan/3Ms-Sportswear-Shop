import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWomenProd } from "../../redux/actions/actionProducts";
import productReducer from "../../redux/reducers/productReducer";
import { Navigate } from "react-router";
import userReducer from "../../redux/reducers/userReducer";
import ProductCard from "../Products/ProductCard";
import { Spinner } from "react-bootstrap";
import AddProduct from "../Admin/AddProduct";
import "../Products/Products.css";

const WomenProd = () => {
  const dispatch = useDispatch();
  const { loading, Wproduct } = useSelector((state) => state.productReducer);
  const { users, isAuth } = useSelector((state) => state.userReducer);
  useEffect(() => {
    dispatch(getWomenProd());
    console.log(Wproduct);
  }, []);

  return (
    <div className="prodList">
      {loading ? (
        <Spinner animation="border" variant="primary" />
      ) : isAuth ? (
        <div className="proList">
          {Wproduct.map((el) => (
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

export default WomenProd;
