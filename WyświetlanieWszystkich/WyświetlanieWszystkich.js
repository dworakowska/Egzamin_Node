const DataSource = require("../data-source");

const WyświetlanieWszystkich = async (req, res) => {
  res.json(await DataSource.getAdverts());
};

module.exports = WyświetlanieWszystkich;
