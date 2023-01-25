const cover = require("../../models/cover.model");

function getCoverContent(req, res) {
  return res.status(200).json(cover.coverContent);
}

module.exports = {
  getCoverContent,
};
