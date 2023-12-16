const express = require("express");
const cors = require("cors");
const profileRouter = require("./routers/profile");
const mongoose = require("mongoose");
const login = require("./routers/login");
const session = require("express-session");
const app = express();
const port = process.env.PORT || 5000;
require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: "secretkey",
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: true, // Set to true if using HTTPS
      maxAge: 1000 * 60 * 60, // Session duration in milliseconds (1 hour in this case)
    },
  })
);

mongoose
  .connect(
    `mongodb+srv://Mkkawser:irumorgan420@cluster0.ed1v50g.mongodb.net/myapp`
  )
  .then(console.log("connect"))
  .catch(() => console.log("Server Error"));

app.use("/", profileRouter);
app.use("/", login);

app.get("/", (req, res) => {
  // res.json({ message: "Homepage" });
  console.log(req.session?.xx);
  res.send("Homepage");
});

app.listen(port, () => {
  console.log(`post ${port}`);
});
