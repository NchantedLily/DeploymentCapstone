const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const attractionSchema = new Schema({
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

const Attraction = mongoose.model("Attractions", attractionSchema);

module.exports = Attraction;
