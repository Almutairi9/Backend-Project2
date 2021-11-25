const mongoose = require("mongoose");

const bookmarkletSchema = new mongoose.Schema({
  savedItem: {
    type: mongoose.Schema.Types.ObjectId,
    // ref: "Item",
    defualt: "",
  },
  savedItdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  date: {
    type: Date,
    default: new Date(),
  },
});

module.exports = mongoose.model("bookmarklet", bookmarkletSchema);
