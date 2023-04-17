import {
  ADD_PRODUCT,
  ADD_PRODUCT_FAIL,
  ADD_PRODUCT_SUCCESS,
  ADIDAS_PRODUCTS,
  DELETE_PRODUCT,
  GET_PRODUCTS,
  MEN_PRODUCTS,
  NIKE_PRODUCTS,
  PUMA_PRODUCTS,
  UPDATE_PRODUCT,
  WOMEN_PRODUCTS,
} from "../actionTypes/ProductsActionTypes";

const init = {
  products: null,
  error: null,
  loading: true,
  product1: null,
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

    case GET_PRODUCTS:
    case WOMEN_PRODUCTS:
    case MEN_PRODUCTS:
    case NIKE_PRODUCTS:
    case PUMA_PRODUCTS:
    case ADIDAS_PRODUCTS:
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
