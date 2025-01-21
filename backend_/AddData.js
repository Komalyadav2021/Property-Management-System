// const mongoose = require("mongoose");

// const schema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   phone_number: {
//     type: String,
//     required: true,
//   },
//   street_name: {
//     type: String,
//     required: true,
//   },
//   area: {
//     type: String,
//     required: true,
//   },
//   city: {
//     type: String,
//     required: true,
//   },
//   state: {
//     type: String,
//     required: true,
//   },
//   furnished_status: {
//     type: String,
//     required: true,
//   },
//   rent: {
//     type: String,
//     required: true,
//   },
//   image: {
//     type: Array,
//     required: true,
//   },
// });

// const addData = new mongoose.model("addData", schema);
// module.exports = addData;

const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  name: String,
  phone_number: String,
  street_name: String,
  city: String,
  state: String,
  area: String,
  furnished_status: String,
  rent: String,
  image: [String], // Array to store image file paths
});

const addData = mongoose.model('Property', propertySchema);

module.exports = addData;
