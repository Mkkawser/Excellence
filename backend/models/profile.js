const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  pass: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
  cloud_id: {
    type: String,
  },
});

const profileModel = mongoose.model("profile", profileSchema);
module.exports = profileModel;
