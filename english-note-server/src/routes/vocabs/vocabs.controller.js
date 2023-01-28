const { getCoverContent } = require("../../models/vocabs.model");

function httpGetAllVocabs(req, res) {
  return res.status(200).json(getCoverContent());
}

module.exports = {
  httpGetAllVocabs,
};
