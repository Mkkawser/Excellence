const express = require("express");
const multer = require("multer");
const {
  getProfile,
  postProfile,
  putProfile,
  getAllProfile,
} = require("../controllers/profile");
const profileRouter = express.Router();

const storage = multer.diskStorage({
  filename: function (req, file, cb) {
    const filename = Date.now() + "-" + file.originalname;
    console.log(filename);
    cb(null, filename);
  },
});

const upload = multer({ storage: storage });

profileRouter.get("/api/profile/", getAllProfile);
profileRouter.get("/api/profile/:user_id", getProfile);
profileRouter.post("/api/profile", postProfile);
profileRouter.put("/api/profile", upload.single("avatar"), putProfile);

module.exports = profileRouter;
