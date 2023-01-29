const mongoose = require("mongoose");

const vocabsSchema = new mongoose.Schema({
  word: {
    type: String,
    required: true,
  },
  pos: {
    type: String,
    required: true,
  },
  meaning: {
    type: String,
    required: true,
  },
  sentences: {
    type: [String],
    required: true,
  },
});

module.exports = mongoose.model("Vocab", vocabsSchema);
