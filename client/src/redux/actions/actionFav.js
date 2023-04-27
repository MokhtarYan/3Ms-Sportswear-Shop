import axios from "axios";
import {
  FAV_ADD_ITEM,
  FAV_ADD_ITEM_FAIL,
  FAV_ADD_ITEM_SUCCESS,
  FAV_REMOVE_ITEM,
} from "../actionTypes/FavActionTypes";

export const addToFav = (_id) => async (dispatch) => {
  dispatch({ type: FAV_ADD_ITEM });
  try {
    const { data } = await axios.get(`/product/getProduct/${_id}`);
    dispatch({
      type: FAV_ADD_ITEM_SUCCESS,
      payload: {
        product: data,
      },
    });
  } catch (error) {
    dispatch({
      type: FAV_ADD_ITEM_FAIL,
      payload: error.data,
    });
  }
};

// delete item from cart
export const removeFromFav = (id) => (dispatch) => {
  dispatch({
    type: FAV_REMOVE_ITEM,
    payload: id,
  });
};
