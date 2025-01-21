const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/PMS1", { 
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


