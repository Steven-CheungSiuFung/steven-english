const express = require("express");
const { getCoverContent } = require("./cover.controller");

const coverRouter = express.Router();

coverRouter.get("/coverContent", getCoverContent);

module.exports = coverRouter;
