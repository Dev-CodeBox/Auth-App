const mongoose = require("mongoose");

require("dotenv").config();

exports.connect = () => {
  mongoose
    .connect(process.env.MONGODB_URL, {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    })
    .then(() => {
      console.log("DataBase connected successfully");
    })
    .catch((err) => {
      console.log("DataBase Connection Failed");
      console.error(err);
      process.exit(1);
    });
};
