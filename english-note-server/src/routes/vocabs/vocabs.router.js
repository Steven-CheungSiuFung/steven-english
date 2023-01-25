const express = require("express");

const { getAllVocabs } = require("./vocabs.controller");

const vocabsRouter = express.Router();

vocabsRouter.get("/vocabsList", getAllVocabs);

module.exports = vocabsRouter;
