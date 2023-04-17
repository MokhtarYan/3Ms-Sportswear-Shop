import productReducer from "./reducers/productReducer";
import userReducer from "./reducers/userReducer";
import cartReducer from "./reducers/cartReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  userReducer,
  productReducer,
  cartReducer,
});

export default rootReducer;
