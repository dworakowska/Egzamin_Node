const DataSource = require("../data-source");

const Modyfikowanie = async (req, res) => {
  const advert = await DataSource.getAdvertById(req.params.id);

  if (advert) {
    const { price, text, category } = JSON.parse(req.body);
    if (price || text || category) {
      advert.price = price ? price : advert.price;
      advert.text = text ? text : advert.text;
      advert.category = category ? category : advert.category;

      res.json(await advert.save());
    } else {
      res.sendStatus(400);
    }
  } else {
    res.sendStatus(404);
  }
};

module.exports = Modyfikowanie;
