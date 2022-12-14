const express = require("express");
const bodyParser = require("body-parser");
const route = require("./route/route");
const mongoose = require("mongoose");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose
  .connect(
    "mongodb+srv://plutonium-batch:CD0Y7Vi1xxgIRocV@cluster0.78bw9.mongodb.net/test",
    {
      useNewUrlParser: true,
    }
  )
  .then(() => console.log("MongoDb is connected"))
  .catch((err) => console.log(err));

app.use("/", route);

app.listen(process.env.PORT || 5000, function () {
  console.log("Express app running on port " + (process.env.PORT || 5000));
});
