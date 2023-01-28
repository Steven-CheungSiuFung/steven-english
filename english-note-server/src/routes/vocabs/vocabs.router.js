const express = require("express");

const { httpGetAllVocabs } = require("./vocabs.controller");

const vocabsRouter = express.Router();

vocabsRouter.get("/vocabsList", httpGetAllVocabs);

module.exports = vocabsRouter;
