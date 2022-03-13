// imports here
const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const router = require("./router");

// env checks
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

// env configs
const PORT = process.env.PORT || 8080;
const dbURI = process.env.DB_URI;

// connect to db
mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: true,
  })
  .then(() => {
    app.listen(PORT);
    console.log(`listening on port ${PORT} \nConnected to DB`);
  })
  .catch((err) => console.log(err));

// middleware & static files
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cors());
app.use(cookieParser());

// router
app.use("/api", router);
