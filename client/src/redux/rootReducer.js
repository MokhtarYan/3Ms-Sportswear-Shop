import productReducer from "./reducers/productReducer";
import userReducer from "./reducers/userReducer";
import cartReducer from "./reducers/cartReducer";
import favReducer from "./reducers/favReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  userReducer,
  productReducer,
  cartReducer,
  favReducer,
});

export default rootReducer;
