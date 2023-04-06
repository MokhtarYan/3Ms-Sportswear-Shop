import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import ActivationPage from "./components/ActivationPage";
import Profile from "./components/Profile";
import HeaderNav from "./components/Nav/HeaderNav";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderNav />
        <Routes>
          <Route exact path="/" Component={SignUp} />
          <Route exact path="/signin" Component={SignIn} />
          <Route
            exact
            path="/confirm/:activationCode"
            element={<ActivationPage />}
          />
          <Route exact path="/profile" element={<Profile />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
