const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const helmet = require("helmet");
const authController = require("./controllers/authController");

dotenv.config();
const app = express();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("DB connection successful!"));

app.use(cors());
app.use(helmet());
app.use(express.json());

app.post("/signup", authController.signup);
app.post("/login", authController.login);

const port = 4000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
