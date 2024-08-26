const express = require("express");
const cors = require("cors")
const app = express();
const mongoose  = require("mongoose");
require("dotenv").config();
const URL = process.env.DB;

app.use(cors({ origin: true }));
app.use(express.json());


const details = require("./routes/details")
app.use("/details", details)

mongoose
  .connect(URL)
  .then(() => {
    console.log("MongoDb connected");
  })
  .catch((err) => {
    console.error(err);
  });

  app.listen(4550, () => {
    console.log("port works in 4050");
  });