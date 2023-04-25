import {
  ADD_PRODUCT,
  ADD_PRODUCT_FAIL,
  ADD_PRODUCT_SUCCESS,
  DELETE_PRODUCT,
  GET_PRODUCTS,
  KIDS_PRODUCTS,
  MEN_PRODUCTS,
  UPDATE_PRODUCT,
  WOMEN_PRODUCTS,
} from "../actionTypes/ProductsActionTypes";

const init = {
  products: null,
  error: null,
  loading: true,
  product1: null,
  Wproduct: null,
  Mproduct: null,
};

export const productReducer = (state = init, { type, payload }) => {
  switch (type) {
    case ADD_PRODUCT:
      return {
        ...state,
        loading: true,
      };
    case ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        products: [...state.products, payload],
        loading: false,
      };
    case ADD_PRODUCT_FAIL:
      return {
        ...state,
        error: payload,
        loading: false,
      };

    case UPDATE_PRODUCT:
      return {
        ...state,
        products: state.products.map((el) =>
          el._id === payload._id ? payload : el
        ),
      };

    case DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter((el) => el._id !== payload),
      };
    case WOMEN_PRODUCTS:
      return {
        ...state,
        Wproduct: payload,
        loading: false,
      };
    case MEN_PRODUCTS:
      return {
        ...state,
        Mproduct: payload,
        loading: false,
      };

    case KIDS_PRODUCTS:
      return {
        ...state,
        product1: payload,
        loading: false,
      };

    case GET_PRODUCTS:
      return {
        ...state,
        products: payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default productReducer;
