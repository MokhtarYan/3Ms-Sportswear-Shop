import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import ActivationPage from "./components/ActivationPage";
import Profile from "./components/Profile";
import HeaderNav from "./components/Nav/HeaderNav";
import "./App.css";
import Home from "./components/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import ExtractProducts from "./components/Products/ExtractProducts";
import DetailsProducts from "./components/Products/DetailsProducts";
import { useSelector } from "react-redux";
import productReducer from "./redux/reducers/productReducer";
import CartItems from "./components/Cart/CartItems";
import HeaderNavv from "./components/Nav/HeaderNavv";
function App() {
  const { products } = useSelector((state) => state.productReducer);
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderNav />
        <HeaderNavv />
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/signup" Component={SignUp} />
          <Route exact path="/signin" Component={SignIn} />
          {/* <Route
            exact
            path="/confirm/:activationCode"
            element={<ActivationPage />}
          /> */}
          <Route exact path="/profile" element={<Profile />} />
          <Route path="/product/allProducts" element={<ExtractProducts />} />
          <Route
            path="/product/allProducts/Details/:id"
            element={<DetailsProducts />}
          />
          <Route path="/cart" element={<CartItems />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
