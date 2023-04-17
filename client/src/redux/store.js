import { applyMiddleware, compose, createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";

const persistConfig = {
  key: "persist-key",
  storage,
};
const persisReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(
  persisReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
const persistor = persistStore(store);
export default store;
export { persistor };
