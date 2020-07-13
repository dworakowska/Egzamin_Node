const DataSource = require("../data-source");

const WyświetlanieKonkretnego = async (req, res) => {
  res.json(await DataSource.getAdvertById(req.params.id));
};

module.exports = WyświetlanieKonkretnego;
