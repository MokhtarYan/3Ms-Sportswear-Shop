import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

import Profile from "./components/Profile";
import HeaderNav from "./components/Nav/HeaderNav";
import "./App.css";
import Home from "./components/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import ExtractProducts from "./components/Products/ExtractProducts";
import DetailsProducts from "./components/Products/DetailsProducts";

import productReducer from "./redux/reducers/productReducer";
import CartItems from "./components/Cart/CartItems";
import HeaderNavv from "./components/Nav/HeaderNavv";
import UsersList from "./components/Admin/UsersList";
import BlockedPage from "./components/Admin/BlockedPage";
import WomenProd from "./components/proC/WomenProd";
import MenProducts from "./components/proC/MenProducts";

import KidsProd from "./components/proC/KidsProd";
import { useState } from "react";
import FavItems from "./components/Fav/FavItems";
import Footer from "./components/Home/Footer";

function App() {
  const [search, setSearch] = useState("");
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderNav search={search} handleChange={handleChange} />
        <HeaderNavv />
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/signup" Component={SignUp} />
          <Route exact path="/signin" Component={SignIn} />

          <Route exact path="/profile" element={<Profile />} />
          <Route
            path="/product/allProducts"
            element={<ExtractProducts search={search} />}
          />
          <Route
            path="/product/allProducts/Details/:id"
            element={<DetailsProducts />}
          />
          <Route path="/cart" element={<CartItems />} />
          <Route path="/Fav" element={<FavItems />} />
          <Route path="/user/userList" element={<UsersList />} />
          <Route path="/user/blocked" element={<BlockedPage />} />
          <Route path="/product/Women" element={<WomenProd />} />
          <Route path="/product/Men" element={<MenProducts />} />
          <Route path="/product/Kids" element={<KidsProd />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
