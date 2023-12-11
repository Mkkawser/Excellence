import { useState } from "react";
import Navbar from "./Navbar";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Footer } from "./Footer";
import { Home } from "./Home";
import SignUp from "./Profile/SignUp";
import Login from "./Profile/login";

function App() {
  const [isLogin, setisLogin] = useState(localStorage.getItem("isLogin"));

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/login"
            element={isLogin == "true" ? <Navigate to={"/"} /> : <Login />}
          />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
