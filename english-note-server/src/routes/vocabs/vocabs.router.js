const express = require("express");

const { httpGetAllVocabs, httpAddNewVocab } = require("./vocabs.controller");

const vocabsRouter = express.Router();

vocabsRouter.get("/vocabsList", httpGetAllVocabs);
vocabsRouter.post("/addNewVocab", httpAddNewVocab);

module.exports = vocabsRouter;
