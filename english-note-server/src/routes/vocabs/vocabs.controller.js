const { getAllVocabs, addNewVocab } = require("../../models/vocabs.model");

async function httpGetAllVocabs(req, res) {
  return res.status(200).json(await getAllVocabs());
}

async function httpAddNewVocab(req, res) {
  const vocab = req.body;
  return res.status(201).json(await addNewVocab(vocab));
}

module.exports = {
  httpGetAllVocabs,
  httpAddNewVocab,
};
