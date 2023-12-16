const profileModel = require("../models/profile");
const cloudinary = require("../cloudinary/");

const getAllProfile = async (req, res) => {
  try {
    const data = await profileModel.find({});
    res.send(data);
  } catch (error) {
    res.send("error");
  }
};
const getProfile = async (req, res) => {
  try {
    const { user_id } = req.params;
    const data = await profileModel.find({ _id: user_id });
    res.send(data);
  } catch (error) {
    res.send("error");
  }
};

const postProfile = async (req, res) => {
  try {
    const data = await profileModel.create(req.body);
    res.json({ message: "Post" });
  } catch (error) {
    console.log(error);
    if (error.code === 11000) {
      // MongoDB duplicate key error (11000)
      res.json({ error: "Duplicate key error. Email already exists." });
    } else {
      // Other errors
      res.json({ error: "Server error" });
    }
  }
};

const putProfile = async (req, res) => {
  const id = req.body.profile_id;
  const { cloud_id, avatar } = await profileModel.findOne({ _id: id }).exec();
  const upload = await cloudinary.v2.uploader.upload(req.file.path, {
    folder: "excellence",
    public_id: req.file.filename,
  });
  const data = await profileModel.updateOne(
    { _id: id },
    {
      ...req.body,
      avatar: upload ? upload.secure_url : avatar,
      cloud_id: upload ? upload.public_id : cloud_id,
    },
    { new: true }
  );
  // data.save();
  console.log(data);
  res.json({ message: "put" });
};
const delProfile = (req, res) => {
  res.json({ message: "del" });
};

module.exports = {
  getAllProfile,
  getProfile,
  postProfile,
  putProfile,
  delProfile,
};
