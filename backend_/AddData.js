
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

