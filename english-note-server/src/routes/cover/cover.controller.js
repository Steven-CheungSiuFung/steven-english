const { getCoverContent } = require("../../models/cover.model");

function httpGetCoverContent(req, res) {
  return res.status(200).json(getCoverContent());
}

module.exports = {
  httpGetCoverContent,
};
