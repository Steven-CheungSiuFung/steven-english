const vocabs = require("../../models/vocabs.model");

function getAllVocabs(req, res) {
  return res.status(200).json(vocabs);
}

module.exports = {
  getAllVocabs,
};
