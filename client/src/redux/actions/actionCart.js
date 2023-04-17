import axios from "axios";
import {
  CARD_ADD_ITEM,
  CARD_ADD_ITEM_FAIL,
  CARD_ADD_ITEM_SUCCESS,
  CART_REMOVE_ITEM,
  DECREMENT,
  INCREMENT,
} from "../actionTypes/CartActionTypes";

export const addToCart = (_id, qty) => async (dispatch) => {
  dispatch({ type: CARD_ADD_ITEM });
  try {
    const { data } = await axios.get(`/product/getProduct/${_id}`);
    dispatch({
      type: CARD_ADD_ITEM_SUCCESS,
      payload: {
        product: data,
        qty,
      },
    });
  } catch (error) {
    dispatch({
      type: CARD_ADD_ITEM_FAIL,
      payload: error.data,
    });
  }
};

// delete item from cart
export const removeFromCart = (id) => (dispatch) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: id,
  });
};

// incrementer
export const incrementQty = (cartItem) => (dispatch) => {
  dispatch({
    type: INCREMENT,
    payload: cartItem,
  });
};

// decrementer
export const decrementQty = (cartItem) => (dispatch) => {
  dispatch({
    type: DECREMENT,
    payload: cartItem,
  });
};
