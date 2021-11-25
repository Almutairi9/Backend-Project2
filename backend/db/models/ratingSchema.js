const mongoose = require("mongoose");

const ratingSchema = new mongoose.Schema({
    rating: {
    type: Number,
    defualt: "",
  },
  ratingBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  ratingDate: {
    type: Date,
    default: new Date(),
  },
});

module.exports = mongoose.model("rating", ratingSchema);