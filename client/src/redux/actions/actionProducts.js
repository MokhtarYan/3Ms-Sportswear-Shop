import {
  ADD_PRODUCT,
  ADD_PRODUCT_FAIL,
  ADD_PRODUCT_SUCCESS,
  DELETE_PRODUCT,
  GET_PRODUCTS,
  KIDS_PRODUCTS,
  MEN_PRODUCTS,
  RATE_PRODUCT,
  UPDATE_PRODUCT,
  WOMEN_PRODUCTS,
} from "../actionTypes/ProductsActionTypes";
import axios from "axios";

export const getProducts = () => async (dispatch) => {
  try {
    const res = await axios.get("/product/allProducts");
    dispatch({
      type: GET_PRODUCTS,
      payload: res.data,
    });
  } catch (error) {
    alert("get all products error");
  }
};

export const createProduct = (newProduct) => async (dispatch) => {
  dispatch({ type: ADD_PRODUCT });
  try {
    const res = await axios.post("/product/addProduct", newProduct);
    dispatch({
      type: ADD_PRODUCT_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: ADD_PRODUCT_FAIL,
      payload: error.response.data,
    });
  }
};

export const updateProduct = (product) => async (dispatch) => {
  try {
    const res = await axios.put(
      `/product/updateProduct/${product._id}`,
      product
    );
    dispatch({
      type: UPDATE_PRODUCT,
      payload: res.data,
    });
  } catch (error) {
    alert("update product error");
  }
};

export const deleteProduct = (_id) => async (dispatch) => {
  try {
    const res = axios.delete(`/product/deleteProduct/${_id}`);
    dispatch({
      type: DELETE_PRODUCT,
      payload: res.data,
    });
  } catch (error) {
    alert("delete product error");
  }
};

export const getWomenProd = () => async (dispatch) => {
  try {
    const res = await axios.get("/product/Women");
    dispatch({
      type: WOMEN_PRODUCTS,
      payload: res.data,
    });
  } catch (error) {
    alert("get women products error");
  }
};

export const getMenProd = () => async (dispatch) => {
  try {
    const res = await axios.get("/product/Men");
    dispatch({
      type: MEN_PRODUCTS,
      payload: res.data,
    });
  } catch (error) {
    alert("get Men products error");
  }
};

export const getKidsProd = () => async (dispatch) => {
  try {
    const res = await axios.get("/product/Kids");
    dispatch({
      type: KIDS_PRODUCTS,
      payload: res.data,
    });
  } catch (error) {
    alert("get kids products error");
  }
};
export const rateProd = (rate) => async (dispatch) => {
  try {
    dispatch({ type: RATE_PRODUCT, payload: rate });
  } catch (error) {
    alert("rate error");
  }
};
