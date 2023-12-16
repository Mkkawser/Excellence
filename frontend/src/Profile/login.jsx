import React, { useEffect, useState } from "react";
import axios from "axios";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    pass: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      // https://excellence-six.vercel.app/api/login
      .post("http://localhost:5000/api/login", formData)
      .then((val) => {
        localStorage.setItem("token",val.data.token);
        localStorage.setItem("user_id",val.data.id);
        localStorage.setItem("isLogin", true);
          window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col border-2 bg-[#eeeded] p-4 m-4 w-[50%]"
      >
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          name="pass"
          type="password"
          value={formData.pass}
          placeholder="Password"
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Login;
