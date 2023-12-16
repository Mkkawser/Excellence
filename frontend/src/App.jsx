import { useState } from "react";
import Navbar from "./Navbar";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Footer } from "./Footer";
import { Home } from "./Home";
import SignUp from "./Profile/SignUp";
import Login from "./Profile/login";
import Cart from "./Cart";
import Profile from "./Profile";

function App() {
  const [isLogin, setisLogin] = useState(localStorage.getItem("isLogin"));

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/login"
            element={isLogin == "true" ? <Navigate to={"/"} /> : <Login />}
          />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
