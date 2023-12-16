import React, { useEffect, useState } from "react";
import axios from "axios";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    pass: "",
  });

  //Submit Data
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      //http://localhost:5000/api/profile
      .post("https://excellence-six.vercel.app/api/profile", formData)
      .then((val) => {
        console.log(val.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Controll Input
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/profile")
      .then((val) => {
        console.log(val.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return (
    <div className="border-2 bg-[#eeeded] p-4 m-4 w-[50%]">
      <form
        className="flex flex-col focus:outline-none"
        method="post"
        onSubmit={handleSubmit}
      >
        <input
          className="focus:outline-none"
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          className="focus:outline-none"
          type="number"
          name="age"
          placeholder="Your Age"
          value={formData.age}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="pass"
          placeholder="Password"
          value={formData.pass}
          onChange={handleChange}
        />
        <button type="submit">SignUp</button>
      </form>
    </div>
  );
};

export default SignUp;
