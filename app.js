const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

const DB_HOST =
  "mongodb+srv://Julia:26101990Qwer@cluster0.qxbifbr.mongodb.net/online_shop?retryWrites=true&w=majority";

mongoose
  .connect(DB_HOST)
  .then(() => {
    console.log("database connect successs");
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });

const app = express();

app.use(cors());

app.listen(3000, () => console.log("server running"));
