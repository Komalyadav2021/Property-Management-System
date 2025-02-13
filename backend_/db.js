const mongoose = require("mongoose");

mongoose
  .connect("mongoDB url", { 
    useNewUrlParser: true,
    useUnifiedTopology: true, 
  })
  .then(() => {
    console.log("Connected to MongoDB Compass");
  })
  .catch((error) => {
    console.error("Connection error:", error);
  });

  module.exports = mongoose;


