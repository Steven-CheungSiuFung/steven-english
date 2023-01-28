const express = require("express");
const { httpGetCoverContent } = require("./cover.controller");

const coverRouter = express.Router();

coverRouter.get("/coverContent", httpGetCoverContent);

module.exports = coverRouter;
