const express = require("express");
const jwt = require("jsonwebtoken");
const profileModel = require("../models/profile");
const login = express.Router();
const session = require("express-session");

login.get("/api/login", async (req, res) => {
  try {
    res.json({ token: "token" });
  } catch (error) {
    res.send({ error });
  }
});

login.post("/api/login", async (req, res) => {
  const { email, pass } = req.body;
  try {
    const value = await profileModel.findOne({ email });
    if (value && value.pass === pass) {
      const token = jwt.sign({ _id: value._id.toString() }, "secretkey", {
        expiresIn: "1h",
      });
      const id = value._id;
      res.json({ token, id });
    } else {
      res.send("Not Found");
    }
  } catch (error) {
    res.send("Server Error");
  }
});

module.exports = login;
