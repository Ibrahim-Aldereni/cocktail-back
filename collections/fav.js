"use strict";

const mongoose = require("mongoose");

mongoose.connect(`${process.env.MONGODB_URI}/examDB`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//Schemas
const favDoc = new mongoose.Schema({
  name: String,
  img: String,
});

//Modals
const favModal = mongoose.model("favDrink", favDoc);

module.exports = favModal;
