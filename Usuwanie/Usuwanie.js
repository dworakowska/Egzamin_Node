const DataSource = require("../data-source");

const Usuwanie = async (req, res) => {
  res.json(await DataSource.removeAdvert(req.params.id));
};

module.exports = Usuwanie;
