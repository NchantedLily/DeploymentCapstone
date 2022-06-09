const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const foodSchema = new Schema({
  title: {
    name: String,
  },
  description: {
    type: String,
  },
  imageURL: {
    type: String,
  },
});

const Food = mongoose.model("Foods", foodSchema);

module.exports = Food;
