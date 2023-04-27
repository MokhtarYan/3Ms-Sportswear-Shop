import {
  FAV_ADD_ITEM,
  FAV_ADD_ITEM_FAIL,
  FAV_ADD_ITEM_SUCCESS,
  FAV_REMOVE_ITEM,
} from "../actionTypes/FavActionTypes";

const init = {
  favItems: [],
  loading: false,
  error: null,
};

export const favReducer = (state = init, { type, payload }) => {
  switch (type) {
    case FAV_ADD_ITEM:
      return {
        ...state,
        loading: true,
      };
    case FAV_ADD_ITEM_SUCCESS:
      const item = payload;
      const existItem = state.favItems.find(
        (el) => el.product._id === item.product._id
      );

      if (existItem) {
        return {
          ...state,
          favItems: state.favItems.map((el) =>
            el.product._id === existItem.product._id ? item : el
          ),
        };
      } else {
        return {
          ...state,
          favItems: [...state.favItems, item],
        };
      }
    case FAV_ADD_ITEM_FAIL:
      return {
        ...state,
        error: payload,
        loading: false,
      };

    case FAV_REMOVE_ITEM:
      return {
        ...state,
        favItems: state.favItems.filter((el) => el.product !== payload),
      };

    default:
      return state;
  }
};

export default favReducer;
